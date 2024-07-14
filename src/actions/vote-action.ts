"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { z } from "zod";
import { action } from "./safe-action";
import { client } from "@/lib/kv";

export const voteAction = action(
  z.object({
    id: z.string(),
  }),
  async ({ id }) => {
    const clientIP = headers().get("x-forwarded-for");

    const hasVoted = await client.sadd(`apps:${id}:ip:${clientIP}`, true);

    if (!hasVoted) {
      throw new Error("You have already voted");
    }

    await client.incr(`apps:${id}`);

    revalidatePath("/");
  },
);
