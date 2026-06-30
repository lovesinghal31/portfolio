"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { ClientShell } from "@/components/client-shell"
import { featuredProject } from "@/data/projects"
import { fadeInUp, staggerContainer, staggerItem } from "@/animations/variants"
import { Footer } from "@/sections/footer"

export function CodePilotPage() {
  const project = featuredProject

  return (
    <ClientShell>
      <main className="mx-auto max-w-4xl px-6 py-24 md:px-8 md:py-32">
        {/* Back link */}
        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary border border-primary/20">
              Featured Project
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year} · {project.category}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                <GithubIcon className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Screenshot gallery */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.3 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((src, i) => (
              <motion.div
                key={i}
                className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                variants={staggerItem}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="mr-2 font-mono text-primary">→</span>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering challenges */}
        {project.challenges && (
          <motion.div
            className="mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <h2 className="mb-6 text-2xl font-bold">Engineering Challenges</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="mr-2 font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Architecture overview */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <h2 className="mb-6 text-2xl font-bold">Architecture</h2>
          <div className="overflow-hidden rounded-lg border border-border bg-[#0d1117] p-6">
            <pre className="font-mono text-[12px] leading-relaxed text-[#e6edf3] overflow-x-auto">
              {`┌─────────────┐     ┌──────────────┐     ┌───────────────┐
│   Client    │────▶│  Next.js API │────▶│   BullMQ      │
│  (React)    │     │   Routes     │     │  Job Queue    │
└─────────────┘     └──────────────┘     └───────┬───────┘
                            │                     │
                            ▼                     ▼
                    ┌──────────────┐     ┌───────────────┐
                    │  PostgreSQL  │     │    Ollama      │
                    │  + Prisma    │     │  (Local LLM)   │
                    └──────────────┘     └───────┬───────┘
                                                  │
                                                  ▼
                                         ┌───────────────┐
                                         │  RAG Pipeline  │
                                         │  (Embeddings)  │
                                         └───────────────┘`}
            </pre>
          </div>
        </motion.div>

        {/* Future Roadmap */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <h2 className="mb-6 text-2xl font-bold">Future Roadmap</h2>
          <div className="space-y-3">
            {[
              "VS Code extension for in-editor analysis",
              "Multi-model support (GPT-4, Claude, Gemini)",
              "Team collaboration features and shared reviews",
              "CI/CD integration for automated pipeline checks",
              "Custom rule engine for organization-specific standards",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-dashed border-border p-3"
              >
                <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </ClientShell>
  )
}
