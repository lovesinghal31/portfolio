import type { Skill } from "@/types"

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "core" },
  { name: "Next.js", category: "Frontend", level: "core" },
  { name: "TypeScript", category: "Frontend", level: "core" },
  { name: "JavaScript", category: "Frontend", level: "core" },
  { name: "Tailwind CSS", category: "Frontend", level: "core" },
  { name: "Shadcn UI", category: "Frontend", level: "proficient" },
  { name: "TanStack Query", category: "Frontend", level: "proficient" },
  { name: "Framer Motion", category: "Frontend", level: "proficient" },
  // Backend
  { name: "Node.js", category: "Backend", level: "core" },
  { name: "NestJS", category: "Backend", level: "core" },
  { name: "Express", category: "Backend", level: "core" },
  { name: "Prisma", category: "Backend", level: "core" },
  { name: "Socket.IO", category: "Backend", level: "proficient" },
  { name: "BullMQ", category: "Backend", level: "proficient" },
  { name: "REST APIs", category: "Backend", level: "core" },
  { name: "WebSockets", category: "Backend", level: "proficient" },
  // Databases
  { name: "PostgreSQL", category: "Databases", level: "core" },
  { name: "Redis", category: "Databases", level: "core" },
  { name: "MongoDB", category: "Databases", level: "proficient" },
  { name: "SQL", category: "Databases", level: "core" },
  // AI
  { name: "Ollama", category: "AI", level: "proficient" },
  { name: "RAG", category: "AI", level: "proficient" },
  { name: "LLM Integration", category: "AI", level: "familiar" },
  { name: "Prompt Engineering", category: "AI", level: "proficient" },
  // DevOps
  { name: "Docker", category: "DevOps", level: "proficient" },
  { name: "GitHub Actions", category: "DevOps", level: "proficient" },
  { name: "Turborepo", category: "DevOps", level: "familiar" },
  { name: "Linux", category: "DevOps", level: "proficient" },
  // Core CS
  { name: "C++", category: "Core CS", level: "core" },
  { name: "Java", category: "Core CS", level: "proficient" },
  { name: "Data Structures", category: "Core CS", level: "core" },
  { name: "Algorithms", category: "Core CS", level: "core" },
  { name: "System Design", category: "Core CS", level: "proficient" },
  { name: "OOP", category: "Core CS", level: "core" },
]

export const skillCategories = [
  "Frontend",
  "Backend",
  "Databases",
  "AI",
  "DevOps",
  "Core CS",
] as const

export function getSkillsByCategory(category: string) {
  return skills.filter((s) => s.category === category)
}
