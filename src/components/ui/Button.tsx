"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
  href?: string;
}

const variantStyles = {
  primary:
    "bg-primary text-white border-2 border-transparent shadow-[0px_4px_0px_#141414] hover:bg-primary-dark hover:-translate-y-1 hover:shadow-[0px_6px_0px_#141414] active:translate-y-1 active:shadow-[0px_0px_0px_#141414]",
  secondary:
    "bg-secondary text-foreground border-2 border-foreground shadow-[0px_4px_0px_#141414] hover:bg-secondary-light hover:-translate-y-1 hover:shadow-[0px_6px_0px_#141414] active:translate-y-1 active:shadow-[0px_0px_0px_#141414]",
  outline:
    "bg-white border-2 border-foreground text-foreground shadow-[0px_4px_0px_#141414] hover:bg-gray-50 hover:-translate-y-1 hover:shadow-[0px_6px_0px_#141414] active:translate-y-1 active:shadow-[0px_0px_0px_#141414]",
  ghost:
    "text-foreground hover:bg-foreground/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  href,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-heading font-bold rounded-[10px] cursor-pointer transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {icon && !loading && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
}
