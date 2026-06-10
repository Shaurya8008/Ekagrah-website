import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  variant?: "teal" | "amber" | "stone" | "success";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  teal: "bg-primary-50 text-primary border-primary/20",
  amber: "bg-orange-50 text-secondary border-secondary/20",
  stone: "bg-stone-100 text-foreground-muted border-border",
  success: "bg-green-50 text-success border-success/20",
};

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({
  text,
  variant = "teal",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-heading font-medium rounded-full border",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {text}
    </span>
  );
}
