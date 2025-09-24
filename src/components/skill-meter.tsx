"use client"
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

interface SkillMeterProps {
  value: number // 0-100
  className?: string
  label?: string
  delay?: number
  gradientClass?: string // override gradient colors
  animated?: boolean
}

export function SkillMeter({ value, className, label, delay = 0, gradientClass, animated = true }: SkillMeterProps) {
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!animated || reduceMotion) {
      setVisible(true)
      return
    }
    const t = setTimeout(() => setVisible(true), 50 + delay)
    return () => clearTimeout(t)
  }, [delay, animated, reduceMotion])

  const bar = (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: visible ? `${value}%` : 0 }}
      transition={animated && !reduceMotion ? { duration: 0.9, ease: 'easeOut', delay: delay / 1000 } : { duration: 0 }}
      className={cn('h-full rounded-full shadow-inner', gradientClass || 'bg-gradient-to-r from-primary/70 to-primary')}
    />
  )

  return (
    <div
      className={cn('w-full', className)}
      aria-label={label}
      role={label ? 'meter' : undefined}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-2 rounded-full bg-muted/70 overflow-hidden relative">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
        {bar}
      </div>
    </div>
  )
}
