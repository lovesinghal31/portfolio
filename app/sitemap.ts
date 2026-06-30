import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  return [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/now`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/projects/codepilot`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
