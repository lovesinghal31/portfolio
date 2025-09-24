"use client"
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Wraps next-themes provider with sensible defaults
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
