import type { JourneyMilestone } from "@/types"

export const journey: JourneyMilestone[] = [
  {
    date: "2022",
    title: "Started the CS journey",
    description:
      "Began Computer Science coursework. First exposure to programming through C++ and data structures. Quickly realized that building things was more interesting than just solving textbook problems.",
    tags: ["C++", "Data Structures"],
  },
  {
    date: "2023",
    title: "Discovered web development",
    description:
      "Built first web projects with React and Node.js. Understood the difference between writing code and engineering software. Started learning about APIs, databases, and how systems communicate.",
    tags: ["React", "Node.js", "JavaScript"],
  },
  {
    date: "2023",
    title: "First hackathon — SIH Top 50",
    description:
      "Competed in the Smart India Hackathon and made it to the top 50 nationally. The experience of building under pressure with a team taught more about software delivery than any course.",
    tags: ["Hackathon", "Team Work", "Problem Solving"],
  },
  {
    date: "2024",
    title: "Went deep on backend engineering",
    description:
      "Shifted focus to backend systems — message queues, caching, database optimization, and API design. Built real applications with NestJS, PostgreSQL, and Redis. Started thinking in terms of architecture rather than just features.",
    tags: ["NestJS", "PostgreSQL", "Redis", "System Design"],
  },
  {
    date: "2024",
    title: "Built CodePilot",
    description:
      "Designed and built an AI-powered code review tool from scratch. Integrated local LLMs via Ollama, implemented RAG for context-aware analysis, and built a processing pipeline with BullMQ. The most ambitious project to date.",
    tags: ["AI", "Ollama", "RAG", "Full Stack"],
  },
  {
    date: "2025",
    title: "Shipping production-grade software",
    description:
      "Currently building with TypeScript end-to-end, focusing on developer tooling and scalable architectures. Every project now starts with a design doc, proper error handling, and CI/CD from day one.",
    tags: ["TypeScript", "Architecture", "CI/CD"],
  },
]
