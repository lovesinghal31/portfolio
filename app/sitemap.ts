import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/now`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/projects/codepilot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
