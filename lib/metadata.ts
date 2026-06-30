import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
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
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@lovesinghal31",
    },
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
