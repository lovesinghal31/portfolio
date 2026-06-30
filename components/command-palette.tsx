"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Home,
  User,
  Code2,
  Layers,
  Mail,
  Sun,
  Moon,
  Download,
  ExternalLink,
  FileText,
  ArrowRight,
} from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface CommandItem {
  id: string
  icon: React.ReactNode
  label: string
  shortcut?: string
  group: string
  action: () => void
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { resolvedTheme, setTheme } = useTheme()

  const commands: CommandItem[] = [
    // Navigation
    { id: "home", icon: <Home className="h-4 w-4" />, label: "Go to Home", group: "Navigation", action: () => scrollTo("#hero") },
    { id: "about", icon: <User className="h-4 w-4" />, label: "Go to About", group: "Navigation", action: () => scrollTo("#about") },
    { id: "projects", icon: <Code2 className="h-4 w-4" />, label: "Go to Projects", group: "Navigation", action: () => scrollTo("#projects") },
    { id: "skills", icon: <Layers className="h-4 w-4" />, label: "Go to Skills", group: "Navigation", action: () => scrollTo("#skills") },
    { id: "contact", icon: <Mail className="h-4 w-4" />, label: "Go to Contact", group: "Navigation", action: () => scrollTo("#contact") },
    // Actions
    { id: "theme", icon: resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />, label: `Switch to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode`, shortcut: "D", group: "Actions", action: () => { setTheme(resolvedTheme === "dark" ? "light" : "dark"); onClose() } },
    { id: "resume", icon: <Download className="h-4 w-4" />, label: "Download Resume", group: "Actions", action: () => { window.open(siteConfig.resume, "_blank"); onClose() } },
    // Links
    { id: "github", icon: <GithubIcon className="h-4 w-4" />, label: "Open GitHub", group: "Links", action: () => { window.open(siteConfig.links.github, "_blank"); onClose() } },
    { id: "linkedin", icon: <LinkedinIcon className="h-4 w-4" />, label: "Open LinkedIn", group: "Links", action: () => { window.open(siteConfig.links.linkedin, "_blank"); onClose() } },
    { id: "twitter", icon: <TwitterIcon className="h-4 w-4" />, label: "Open Twitter / X", group: "Links", action: () => { window.open(siteConfig.links.twitter, "_blank"); onClose() } },
    { id: "email", icon: <Mail className="h-4 w-4" />, label: `Email ${siteConfig.links.email}`, group: "Links", action: () => { window.open(`mailto:${siteConfig.links.email}`); onClose() } },
    // Pages
    { id: "now", icon: <FileText className="h-4 w-4" />, label: "View Now Page", group: "Pages", action: () => { window.location.href = "/now"; onClose() } },
    { id: "codepilot", icon: <ExternalLink className="h-4 w-4" />, label: "View CodePilot Case Study", group: "Pages", action: () => { window.location.href = "/projects/codepilot"; onClose() } },
  ]

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    el?.scrollIntoView({ behavior: "smooth" })
    onClose()
  }

  const filtered = query
    ? commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
      )
    : commands

  const groups = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = []
    acc[cmd.group].push(cmd)
    return acc
  }, {})

  const flatItems = Object.values(groups).flat()

  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((i) => (i + 1) % flatItems.length)
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((i) => (i - 1 + flatItems.length) % flatItems.length)
          break
        case "Enter":
          e.preventDefault()
          flatItems[selectedIndex]?.action()
          break
        case "Escape":
          onClose()
          break
      }
    },
    [flatItems, selectedIndex, onClose]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Command palette */}
          <motion.div
            className="fixed top-[20%] left-1/2 z-50 w-full max-w-lg"
            initial={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Command palette search"
                />
                <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto p-2">
                {Object.entries(groups).map(([group, items]) => (
                  <div key={group}>
                    <div className="px-2 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {group}
                    </div>
                    {items.map((item) => {
                      const globalIndex = flatItems.indexOf(item)
                      return (
                        <button
                          key={item.id}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                            globalIndex === selectedIndex
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground hover:bg-accent/50"
                          )}
                          onClick={item.action}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                        >
                          <span className="text-muted-foreground">{item.icon}</span>
                          <span className="flex-1 text-left">{item.label}</span>
                          {item.shortcut && (
                            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                              {item.shortcut}
                            </kbd>
                          )}
                          <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>
                      )
                    })}
                  </div>
                ))}

                {flatItems.length === 0 && (
                  <div className="py-8 text-center text-sm text-muted-foreground">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
