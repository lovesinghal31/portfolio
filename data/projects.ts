import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "CodePilot",
    slug: "codepilot",
    description:
      "An AI-powered code review and analysis tool that helps developers write better software through intelligent feedback and automated architecture insights.",
    longDescription:
      "CodePilot is an AI-powered developer tool designed to streamline code review workflows. It analyzes code quality, identifies architectural patterns, suggests improvements, and provides real-time feedback during development. Built with a focus on developer experience, it integrates seamlessly into existing workflows and provides actionable insights rather than generic warnings.",
    featured: true,
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Ollama",
      "RAG",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    features: [
      "AI-powered code analysis with local LLM support via Ollama",
      "Retrieval-Augmented Generation for context-aware suggestions",
      "Real-time code quality scoring and feedback",
      "Architecture pattern detection and recommendations",
      "Multi-language support with extensible parser system",
      "Dashboard with project-level analytics and trends",
    ],
    challenges: [
      "Designing an efficient RAG pipeline for codebase-aware context retrieval",
      "Optimizing LLM inference latency for real-time feedback loops",
      "Building a scalable analysis queue with BullMQ for concurrent reviews",
      "Creating a flexible parser architecture to support multiple languages",
    ],
    screenshots: [
      "/projects/codepilot/first.png",
      "/projects/codepilot/second.png",
      "/projects/codepilot/third.png",
      "/projects/codepilot/fourth.png",
    ],
    links: {
      github: "https://github.com/lovesinghal31",
    },
    year: "2024",
    category: "Developer Tools",
  },
  {
    title: "Realtime Chat",
    slug: "realtime-chat",
    description:
      "A modern, full-featured real-time messaging application with friend requests, live notifications, and GitHub OAuth — built on WebSockets and Redis.",
    longDescription:
      "A production-ready real-time chat application featuring instant messaging powered by Pusher, a friend request system, live notifications, and GitHub OAuth authentication. Built with Next.js 15 App Router, Upstash Redis for data persistence, and a responsive UI with dark mode support.",
    featured: false,
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Pusher",
      "Upstash Redis",
      "NextAuth.js",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Framer Motion",
    ],
    features: [
      "Real-time messaging with instant delivery via Pusher WebSockets",
      "GitHub OAuth authentication with NextAuth.js",
      "Friend request system — send, accept, and deny requests",
      "Live notifications for new messages and friend requests",
      "Responsive UI with light and dark mode support",
      "Type-safe form validation with Zod and React Hook Form",
    ],
    screenshots: [],
    links: {
      github: "https://github.com/lovesinghal31/realtime-chat-app",
    },
    year: "2025",
    category: "Full Stack",
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const otherProjects = projects.filter((p) => !p.featured)
