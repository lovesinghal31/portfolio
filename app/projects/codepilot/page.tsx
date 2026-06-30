import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { CodePilotPage } from "./codepilot-page"

export const metadata: Metadata = constructMetadata({
  title: "CodePilot — Case Study | Love Singhal",
  description:
    "An AI-powered code review tool with local LLM inference, RAG pipelines, and real-time analysis. Built with TypeScript, Next.js, Ollama, and PostgreSQL.",
})

export default function Page() {
  return <CodePilotPage />
}
