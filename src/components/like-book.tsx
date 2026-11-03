import { LikeBook } from "@/components/like-button";
import { client } from "@/lib/kv";

type Props = {
  id: string;
};

const Like = async ({ id }: Props) => {
  const countArray = await client.mget(`apps:${id}`);
  const count = countArray[0] as number;
  return <LikeBook count={count} id={id} />;
}

export { Like };
