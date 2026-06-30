import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { fontSans, fontMono } from "@/lib/fonts"
import { constructMetadata } from "@/lib/metadata"
import { siteConfig } from "@/config/site"

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              jobTitle: siteConfig.role,
              description: siteConfig.description,
              sameAs: [
                siteConfig.links.github,
                siteConfig.links.linkedin,
                siteConfig.links.twitter,
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Indore",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
