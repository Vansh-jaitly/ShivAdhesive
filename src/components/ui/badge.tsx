import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[0.25rem] border px-2.5 py-0.5 text-xs font-semibold transition-colors uppercase tracking-wide",
        {
          "border-transparent bg-primary text-primary-foreground": variant === "default",
          "border-transparent bg-muted text-muted-foreground": variant === "secondary",
          "text-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
