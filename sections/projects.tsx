"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"
import { MagneticButton } from "@/components/magnetic-button"
import { GithubIcon } from "@/components/icons"
import { featuredProject, otherProjects } from "@/data/projects"
import { fadeInUp, staggerContainer, staggerItem } from "@/animations/variants"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="projects" label="Projects" index="03.">
      <div ref={ref}>
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Selected work.
        </motion.h2>
        <motion.p
          className="mb-12 max-w-2xl text-base text-muted-foreground"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Projects where I owned the architecture, built the system, and shipped real software.
        </motion.p>

        {/* Featured project — CodePilot */}
        <motion.div
          className="group relative mb-8 overflow-hidden rounded-xl border border-border bg-card"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-4 right-4 z-10 rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] text-primary border border-primary/20">
            Featured
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="relative aspect-video overflow-hidden bg-muted lg:aspect-auto lg:min-h-[400px]">
              {featuredProject.screenshots[0] && (
                <Image
                  src={featuredProject.screenshots[0]}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 lg:p-10">
              <div>
                <span className="font-mono text-xs text-muted-foreground">
                  {featuredProject.year} · {featuredProject.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {featuredProject.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.techStack.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {featuredProject.techStack.length > 8 && (
                  <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    +{featuredProject.techStack.length - 8}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                {featuredProject.links.github && (
                  <MagneticButton
                    as="a"
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.4 }}
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.slug}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              variants={staggerItem}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year} · {project.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
                  </div>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
