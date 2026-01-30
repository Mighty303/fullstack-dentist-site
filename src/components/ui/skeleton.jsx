import { cn } from "@/lib/utils";
import React from "react";
function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md dark:bg-slate-800 bg-slate-200",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
