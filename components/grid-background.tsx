"use client"

import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  className?: string
  variant?: "grid" | "dot" | "grid-small"
}

export function GridBackground({
  className,
  variant = "dot",
}: GridBackgroundProps) {
  const bgClass =
    variant === "grid"
      ? "bg-grid"
      : variant === "grid-small"
        ? "bg-grid-small"
        : "bg-dot"

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        bgClass,
        "mask-radial opacity-40 dark:opacity-20",
        className
      )}
      aria-hidden="true"
    />
  )
}
