import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  url = "/",
  keywords = siteConfig.keywords,
  type = "website",
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  url?: string
  keywords?: readonly string[] | string[]
  type?: "website" | "article" | "profile"
} = {}): Metadata {
  const fullUrl = url === "/" ? siteConfig.url : `${siteConfig.url}${url}`

  return {
    title,
    description,
    keywords: keywords as string[],
    authors: [
      {
        name: siteConfig.creator,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.creator,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png", // Will be available via manifest/icons
    },
    manifest: "/manifest.json", // Or we can rely on manifest.ts auto-handling by Next.js if we put it in app directory. Let's rely on Next.js auto-detection for manifest, but explicit doesn't hurt.
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
