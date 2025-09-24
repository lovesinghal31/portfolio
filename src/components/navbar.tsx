"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' }
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-5xl px-4 flex h-14 items-center gap-6">
        <Link href="/" className="font-semibold">Love Singhal</Link>
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
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Link href="/resume.pdf" download className="text-sm underline underline-offset-4 hidden sm:inline-flex">
            Resume
          </Link>
        </div>
      </div>
    </header>
  )
}
