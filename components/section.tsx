"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { fadeInUp, defaultTransition } from "@/animations/variants"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  label?: string
  index?: string
  fullWidth?: boolean
}

export function Section({
  children,
  className,
  id,
  label,
  index,
  fullWidth = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-5%" })

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        !fullWidth && "mx-auto max-w-6xl px-6 md:px-8",
        className
      )}
    >
      {label && (
        <motion.div
          className="mb-12 flex items-center gap-3"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={defaultTransition}
        >
          {index && (
            <span className="font-mono text-xs text-primary">{index}</span>
          )}
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>
      )}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ ...defaultTransition, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
