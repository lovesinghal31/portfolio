"use client"

import { useState, useEffect, useCallback } from "react"
import { Dock } from "@/components/dock"
import { CommandPalette } from "@/components/command-palette"
import { SpotlightCursor } from "@/components/spotlight-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  const openCommandPalette = useCallback(() => {
    setCommandPaletteOpen(true)
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // ⌘K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Easter egg: Konami code
  useEffect(() => {
    const konamiCode = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a",
    ]
    let index = 0

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === konamiCode[index]) {
        index++
        if (index === konamiCode.length) {
          index = 0
          document.body.classList.add("konami-active")
          setTimeout(() => document.body.classList.remove("konami-active"), 3000)
        }
      } else {
        index = 0
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Console easter egg
  useEffect(() => {
    console.log(
      `%c
  ╦  ╔═╗╦  ╦╔═╗
  ║  ║ ║╚╗╔╝║╣
  ╩═╝╚═╝ ╚╝ ╚═╝
  `,
      "color: #d1453b; font-weight: bold"
    )
    console.log(
      "%c Hey! 👋 Looking at the source? I appreciate engineers who dig deeper.",
      "color: #7d8590; font-size: 12px"
    )
    console.log(
      "%c Open to opportunities → lovesinghal31@gmail.com",
      "color: #e6edf3; font-size: 11px"
    )
  }, [])

  return (
    <>
      <ScrollProgress />
      <SpotlightCursor />
      {children}
      <Dock onCommandPalette={openCommandPalette} />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  )
}
