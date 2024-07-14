"use client";

import { likeAction } from "@/actions/like-action";
import { Button } from "@/components/ui/button";
import { ChevronUp, ThumbsUp } from "lucide-react";
import { useOptimisticAction } from "next-safe-action/hooks";

type Props = {
  id: string;
  count: number;
};

export function LikeBook({ count, id }: Props) {
  const { execute, optimisticData } = useOptimisticAction<void, number>(
    likeAction,
    count,
    (prevCount) => {
      return +prevCount + 1;
    },
  );

  return (
    <Button
      variant="default"
      className="h-8 w-16 flex-col items-center px-6"
      onClick={() => execute({ id })}
    >
      <div className="flex flex-row items-center gap-1">
        {optimisticData}
        <ThumbsUp size={16} />
      </div>
    </Button>
  );
}
