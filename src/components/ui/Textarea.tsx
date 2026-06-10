import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col w-full">
        <label
          htmlFor={textareaId}
          className="font-heading font-medium text-sm text-foreground mb-1.5 block"
        >
          {label}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-surface text-foreground font-body placeholder:text-foreground-muted/50 transition-all duration-200 min-h-[120px] resize-y",
            "focus:outline-none focus:ring-2",
            error
              ? "border-destructive focus:border-destructive focus:ring-destructive/30"
              : "border-border focus:border-primary focus:ring-primary/30",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${textareaId}-error`} className="text-destructive text-sm mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
