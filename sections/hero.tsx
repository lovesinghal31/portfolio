"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { Terminal } from "@/components/terminal"
import { GridBackground } from "@/components/grid-background"
import { MagneticButton } from "@/components/magnetic-button"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from "@/animations/variants"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <GridBackground variant="dot" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Left — Content */}
          <div className="flex flex-col gap-8">
            {/* Status badge */}
            <motion.div
              className="flex items-center gap-2 self-start"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {siteConfig.status} · {siteConfig.location}
              </span>
            </motion.div>

            {/* Profile image — mobile only */}
            <motion.div
              className="lg:hidden"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border">
                <Image
                  src="/profile.jpeg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Name */}
            <div>
              <motion.p
                className="mb-2 font-mono text-sm text-primary"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hi, I&apos;m
              </motion.p>
              <AnimatedText
                text="Love Singhal."
                as="h1"
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                delay={0.4}
              />
            </div>

            {/* Tagline */}
            <AnimatedText
              text="Engineering systems that scale."
              as="p"
              className="text-xl text-muted-foreground sm:text-2xl md:text-3xl"
              delay={0.8}
            />

            {/* Role badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 1 }}
            >
              {siteConfig.roles.map((role) => (
                <motion.span
                  key={role}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                  variants={staggerItem}
                  transition={{ duration: 0.4 }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Projects
              </MagneticButton>
              <MagneticButton
                as="a"
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                Resume
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              {[
                { icon: <GithubIcon className="h-5 w-5" />, href: siteConfig.links.github, label: "GitHub" },
                { icon: <LinkedinIcon className="h-5 w-5" />, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: <TwitterIcon className="h-5 w-5" />, href: siteConfig.links.twitter, label: "Twitter" },
              ].map(({ icon, href, label }) => (
                <MagneticButton
                  key={label}
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
                >
                  {icon}
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal + Profile */}
          <motion.div
            className="hidden flex-col gap-6 lg:flex"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-border glow-sm">
                <Image
                  src="/profile.jpeg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Terminal */}
            <Terminal className="w-full" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
