"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"
import { MagneticButton } from "@/components/magnetic-button"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { fadeInUp, staggerContainer, staggerItem } from "@/animations/variants"

const socialLinks = [
  { name: "Email", href: `mailto:${siteConfig.links.email}`, icon: <Mail className="h-5 w-5" />, label: siteConfig.links.email },
  { name: "GitHub", href: siteConfig.links.github, icon: <GithubIcon className="h-5 w-5" />, label: "lovesinghal31" },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: <LinkedinIcon className="h-5 w-5" />, label: "lovesinghal31" },
  { name: "Twitter", href: siteConfig.links.twitter, icon: <TwitterIcon className="h-5 w-5" />, label: "lovesinghal31" },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="contact" label="Contact" index="08.">
      <div ref={ref} className="text-center">
        <motion.h2
          className="mx-auto mb-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Let&apos;s build something together.
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-lg text-base text-muted-foreground"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          Open to backend and full-stack internship roles, freelance projects,
          and interesting technical conversations.
        </motion.p>

        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <MagneticButton
            as="a"
            href={`mailto:${siteConfig.links.email}`}
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-5 w-5" />
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.3 }}
        >
          {socialLinks.map(({ name, href, icon, label }) => (
            <motion.a
              key={name}
              href={href}
              target={name !== "Email" ? "_blank" : undefined}
              rel={name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-card/80"
              variants={staggerItem}
            >
              <span className="text-muted-foreground transition-colors group-hover:text-primary">
                {icon}
              </span>
              <span className="text-sm font-medium">{name}</span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-8"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Download Resume (PDF)
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
