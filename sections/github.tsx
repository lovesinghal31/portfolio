"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Section } from "@/components/section"
import { MagneticButton } from "@/components/magnetic-button"
import { siteConfig } from "@/config/site"
import { fadeInUp, staggerContainer, staggerItem } from "@/animations/variants"

const stats = [
  { label: "Repositories", value: "20+" },
  { label: "Languages", value: "6+" },
  { label: "Contributions", value: "500+" },
]

const topLanguages = [
  { name: "TypeScript", percentage: 45, color: "#3178c6" },
  { name: "JavaScript", percentage: 20, color: "#f1e05a" },
  { name: "C++", percentage: 15, color: "#f34b7d" },
  { name: "Java", percentage: 10, color: "#b07219" },
  { name: "CSS", percentage: 5, color: "#563d7c" },
  { name: "Other", percentage: 5, color: "#6b7280" },
]

export function GithubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="github" label="Open Source" index="06.">
      <div ref={ref}>
        <div className="mb-10 flex items-start justify-between">
          <div>
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Building in the open.
            </motion.h2>
            <motion.p
              className="max-w-2xl text-base text-muted-foreground"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              Most of my work lives on GitHub. Open source by default.
            </motion.p>
          </div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton
              as="a"
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50 sm:inline-flex"
            >
              View Profile
              <ExternalLink className="h-3.5 w-3.5" />
            </MagneticButton>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.2 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-5 text-center"
                variants={staggerItem}
              >
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Top languages */}
          <motion.div
            className="rounded-lg border border-border bg-card p-6"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Top Languages
            </h3>

            {/* Language bar */}
            <div className="mb-4 flex h-3 overflow-hidden rounded-full">
              {topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="transition-all duration-500"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-2">
              {topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {lang.name}{" "}
                    <span className="text-foreground">{lang.percentage}%</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contribution graph placeholder */}
        <motion.div
          className="mt-6 overflow-hidden rounded-lg border border-border bg-card p-6"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contribution Activity
          </h3>
          {/* CSS contribution graph */}
          <div className="flex gap-[3px] overflow-x-auto pb-2">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const intensity = Math.random()
                  let bg = "bg-secondary"
                  if (intensity > 0.8) bg = "bg-primary"
                  else if (intensity > 0.6) bg = "bg-primary/60"
                  else if (intensity > 0.4) bg = "bg-primary/30"
                  else if (intensity > 0.2) bg = "bg-primary/10"
                  return (
                    <div
                      key={dayIndex}
                      className={`h-[10px] w-[10px] rounded-[2px] ${bg}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
