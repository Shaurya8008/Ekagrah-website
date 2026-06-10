"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BrutalistCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function BrutalistCard({
  children,
  className,
  hoverEffect = false,
  ...props
}: BrutalistCardProps) {
  return (
    <div
      className={cn(
        "bg-white border-2 border-foreground rounded-[10px] shadow-[0px_4px_0px_#141414] overflow-hidden",
        hoverEffect && "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_8px_0px_#141414]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
