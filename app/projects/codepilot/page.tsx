import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { CodePilotPage } from "./codepilot-page"
import { SoftwareSourceCodeJsonLd } from "@/components/seo/json-ld"
import { featuredProject } from "@/data/projects"

export const metadata: Metadata = constructMetadata({
  title: "CodePilot — Case Study | Love Singhal",
  description:
    "An AI-powered code review tool with local LLM inference, RAG pipelines, and real-time analysis. Built with TypeScript, Next.js, Ollama, and PostgreSQL.",
  url: "/projects/codepilot",
})

export default function Page() {
  return (
    <>
      <SoftwareSourceCodeJsonLd
        name={featuredProject.title}
        description={featuredProject.description}
        url={`https://lovesinghal.me/projects/${featuredProject.slug}`}
        codeRepository={featuredProject.links.github}
        programmingLanguage={featuredProject.techStack.slice(0, 5)}
        dateCreated={featuredProject.year}
      />
      <CodePilotPage />
    </>
  )
}
