"use client"

import { useMousePosition } from "@/hooks/use-mouse-position"
import { useMediaQuery } from "@/hooks/use-media-query"

export function SpotlightCursor() {
  const { x, y } = useMousePosition()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isVisible = x !== 0 || y !== 0

  if (isMobile || !isVisible) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(209, 69, 59, 0.04), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  )
}
