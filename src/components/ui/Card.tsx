import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-xl border border-border shadow-card overflow-hidden",
        hover && "card-hover",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
