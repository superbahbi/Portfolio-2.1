"use server";

import { client } from "@/lib/kv";

export async function setViewCount(path: string) {
  return client.incr(`views-${path}`);
}
