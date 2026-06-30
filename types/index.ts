export interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  featured: boolean
  techStack: string[]
  features: string[]
  challenges?: string[]
  screenshots: string[]
  links: {
    github?: string
    live?: string
  }
  year: string
  category: string
}

export interface Skill {
  name: string
  category: SkillCategory
  level: "core" | "proficient" | "familiar"
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "AI"
  | "DevOps"
  | "Core CS"

export interface Achievement {
  title: string
  description: string
  metric?: string
  icon: string
}

export interface JourneyMilestone {
  date: string
  title: string
  description: string
  tags?: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface NowItem {
  category: string
  items: { title: string; detail?: string }[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
