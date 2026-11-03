"use client";

import { setViewCount } from "@/actions/set-view-count";
import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProfileViews = () => {
  const [views, setViews] = useState(0);
  const called = useRef(false);

  useEffect(() => {
    const fetchViewsCount = async () => {
      try {
        const data = await setViewCount("profile");
        document.documentElement.style.setProperty(
          "--end-num",
          data.toString(),
        );
        setViews(data);
      } catch (error) {
        console.error("Failed to fetch view count", error);
      }
    };

    if (!called.current) {
      fetchViewsCount();
      called.current = true;
    }
  }, []);

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <div className="flex items-center gap-2 pr-4">
        <span className="flex animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num)] before:content-[counter(num)]">
          <span className="sr-only">
            {Intl.NumberFormat("en", {
              notation: "compact",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }).format(views ?? 0)}
          </span>
        </span>
        <Eye size={18} />
      </div>
    </div>
  );
}

export { ProfileViews };