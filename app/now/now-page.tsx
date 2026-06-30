"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { ClientShell } from "@/components/client-shell"
import { nowItems } from "@/data/now"
import { fadeInUp, staggerContainer, staggerItem } from "@/animations/variants"
import { Footer } from "@/sections/footer"

const categoryIcons: Record<string, string> = {
  Building: "🔨",
  Learning: "📚",
  Reading: "📖",
  "Current Stack": "⚙️",
  Goals: "🎯",
}

export function NowPage() {
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
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What I&apos;m doing now.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A snapshot of what I am currently focused on. Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              nownownow.com
            </a>
            .
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="font-mono text-xs">
              Last updated: June 2026
            </span>
          </div>
        </motion.div>

        {/* Now items */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.3 }}
        >
          {nowItems.map((section) => (
            <motion.div
              key={section.category}
              className="rounded-xl border border-border bg-card p-6"
              variants={staggerItem}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-lg">
                  {categoryIcons[section.category] || "📌"}
                </span>
                <h2 className="text-base font-semibold">{section.category}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <span className="text-sm font-medium text-foreground">
                      {item.title}
                    </span>
                    {item.detail && (
                      <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                        {item.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </ClientShell>
  )
}
