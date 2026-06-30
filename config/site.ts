export const siteConfig = {
  name: "Love Singhal",
  title: "Love Singhal — Backend Engineer & Full Stack Developer",
  description:
    "Backend engineer building production-grade systems. Computer Science student with a focus on architecture, system design, and developer tooling.",
  url: "https://lovesinghal.me",
  ogImage: "https://lovesinghal.me/og.png",
  links: {
    github: "https://github.com/lovesinghal31",
    linkedin: "https://www.linkedin.com/in/lovesinghal31/",
    twitter: "https://x.com/lovesinghal31",
    email: "lovesinghal31@gmail.com",
  },
  creator: "Love Singhal",
  location: "Indore, India",
  role: "Backend Engineer",
  roles: ["Backend Engineer", "Full Stack Developer", "AI Enthusiast"],
  status: "Computer Science Student",
  resume: "/resume.pdf",
} as const

export type SiteConfig = typeof siteConfig
