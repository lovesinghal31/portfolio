"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' }
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLElement | null>(null)
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null)

  // Close menu when route changes
  useEffect(() => { setOpen(false) }, [pathname])

  // Body scroll lock when menu open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = original }
    }
  }, [open])

  // Close on outside click (mobile panel)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return
      const target = e.target as Node
      // Ignore clicks on the toggle button itself
      if (toggleBtnRef.current && toggleBtnRef.current.contains(target)) return
      if (panelRef.current && !panelRef.current.contains(target)) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [open])
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 supports-[backdrop-filter]:bg-background/55 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 flex h-14 items-center gap-4">
        <Link href="/" className="font-semibold text-foreground relative z-50">Love Singhal</Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 text-sm">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === l.href ? 'text-foreground font-medium' : 'text-muted-foreground'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Mobile hamburger */}
        <div className="md:hidden ml-auto flex items-center gap-1 relative z-50">
          <ThemeToggle />
          <Button
            ref={toggleBtnRef}
            variant="ghost"
            size="icon"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={(e) => { e.stopPropagation(); setOpen(v => !v) }}
            className={cn(open && 'bg-accent')}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
        {/* Desktop right controls */}
        <div className="ml-auto hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link href="/resume.pdf" download className="text-sm underline underline-offset-4">
            Resume
          </Link>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={cn('fixed inset-0 z-30 bg-background/60 backdrop-blur-sm transition-opacity md:hidden', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        aria-hidden={!open}
      />
      {/* Mobile nav panel */}
      <nav
        ref={panelRef}
        id="mobile-nav-panel"
        className={cn(
          'md:hidden fixed top-14 inset-x-0 z-50 bg-background/95 border-b shadow-lg will-change-transform max-h-[calc(100vh-3.5rem)] overflow-y-auto',
          'transition-all duration-300 ease-out',
          open
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-1 px-6 py-4 pb-8 text-base">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'rounded px-2 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/60',
                pathname === l.href ? 'bg-accent/60 text-foreground font-medium' : 'text-muted-foreground hover:bg-accent/40 hover:text-primary'
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/resume.pdf" download className="rounded px-2 py-2 mt-2 text-sm underline underline-offset-4">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  )
}
