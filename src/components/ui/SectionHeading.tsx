"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  accent,
  align = "center",
  className,
}: SectionHeadingProps) {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref as any}
      className={cn(
        "flex flex-col gap-4 reveal",
        isInView && "visible",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {accent && (
        <span className="font-accent text-secondary text-2xl md:text-3xl animate-fade-in stagger-1">
          {accent}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-up stagger-2">
        {title}
      </h2>
      {align === "center" && (
        <div className="w-16 h-1 bg-primary rounded-full animate-scale-up stagger-3" />
      )}
      {subtitle && (
        <p className="text-foreground-muted text-lg max-w-2xl mt-2 animate-fade-up stagger-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
