"use server";

import { client } from "@/lib/kv";

const setViewCount = async (path: string) => {
  return client.incr(`views-${path}`);
}
export { setViewCount };