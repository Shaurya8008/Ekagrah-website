import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col w-full">
        <label
          htmlFor={inputId}
          className="font-heading font-medium text-sm text-foreground mb-1.5 block"
        >
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-surface text-foreground font-body placeholder:text-foreground-muted/50 transition-all duration-200",
            "focus:outline-none focus:ring-2",
            error
              ? "border-destructive focus:border-destructive focus:ring-destructive/30"
              : "border-border focus:border-primary focus:ring-primary/30",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className="text-destructive text-sm mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
