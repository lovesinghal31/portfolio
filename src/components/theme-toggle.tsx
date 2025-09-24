"use client"
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'motion/react'
import * as React from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  // During SSR (not mounted) render a non-committal placeholder to avoid mismatch.
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        aria-label="Toggle theme"
        className="relative h-10 w-10 opacity-0"
        disabled
      >
        <span />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative"
    >
      <motion.span
        key={isDark ? 'dark' : 'light'}
        initial={false}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="flex"
      >
        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </motion.span>
    </Button>
  )
}
