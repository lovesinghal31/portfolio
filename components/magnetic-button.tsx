"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  as?: "button" | "a"
  href?: string
  target?: string
  rel?: string
  "aria-label"?: string
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  as: Tag = "button",
  href,
  target,
  rel,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const MotionTag = Tag === "button" ? motion.button : motion.a

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      className={cn("relative inline-flex", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </MotionTag>
  )
}
