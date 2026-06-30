"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Section } from "@/components/section"
import { journey } from "@/data/journey"
import { staggerContainer, staggerItem } from "@/animations/variants"

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="journey" label="Engineering Journey" index="05.">
      <div ref={ref}>
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          How I got here.
        </motion.h2>
        <motion.p
          className="mb-12 max-w-2xl text-base text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Not a timeline. A trajectory of growth — from first programs to production systems.
        </motion.p>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-8" />

          <div className="flex flex-col gap-8">
            {journey.map((milestone, i) => (
              <motion.div
                key={i}
                className="relative pl-12 md:pl-20"
                variants={staggerItem}
              >
                {/* Dot */}
                <div className="absolute left-[11px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-[27px]" />

                {/* Content */}
                <div className="rounded-lg border border-border bg-card p-5">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">
                      {milestone.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                  {milestone.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
