import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { fontSans, fontMono } from "@/lib/fonts"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontSans.variable, fontMono.variable)}
    >
      <head>
        <meta name="theme-color" content="#0d1117" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
