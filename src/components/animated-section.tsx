"use client"
import { motion, useInView, type MotionProps } from 'motion/react'
import * as React from 'react'

// AnimatedSection: wraps sections for fade+slide reveal on scroll.
// Usage: <AnimatedSection><YourContent/></AnimatedSection>
export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 24,
  ...rest
}: React.PropsWithChildren<{
  className?: string
  delay?: number
  y?: number
}> & MotionProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px'
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
