"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Section } from "@/components/section"
import { staggerContainer, staggerItem, fadeInUp } from "@/animations/variants"

const stats = [
  { label: "Problems Solved", value: "150+" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Years Building", value: "2+" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="about" label="About" index="01.">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Left — Copy */}
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            variants={staggerItem}
          >
            I think in systems,
            <br />
            not screens.
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground"
            variants={staggerItem}
          >
            I am a Computer Science student with a particular interest in what
            happens after the user clicks a button — the API call, the database
            query, the cache hit, the queue processing. The parts of software
            that are invisible but essential.
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground"
            variants={staggerItem}
          >
            My approach to engineering is to understand things deeply before
            building. I spend time reading documentation, studying system
            internals, and tracing code paths before writing a single line.
            This means fewer rewrites, better architecture decisions, and
            software that holds up under real-world conditions.
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground"
            variants={staggerItem}
          >
            When I am not writing code, I am probably reading about how
            databases handle concurrent writes, how message queues manage
            backpressure, or how compilers optimize code paths. The kind of
            problems that don&apos;t have Stack Overflow answers.
          </motion.p>
        </motion.div>

        {/* Right — Stats + Code block */}
        <div className="flex flex-col gap-8">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.3 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-4 text-center"
                variants={staggerItem}
              >
                <span className="text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy code block */}
          <motion.div
            className="overflow-hidden rounded-lg border border-border bg-[#0d1117]"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="font-mono text-xs text-muted-foreground">
                philosophy.ts
              </span>
            </div>
            <pre className="p-4 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-[#ff7b72]">const</span>{" "}
                <span className="text-[#79c0ff]">approach</span>{" "}
                <span className="text-[#ff7b72]">=</span>{" "}
                <span className="text-[#ffa657]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#79c0ff]">understand</span>
                <span className="text-[#e6edf3]">:</span>{" "}
                <span className="text-[#a5d6ff]">&quot;before building&quot;</span>
                <span className="text-[#e6edf3]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#79c0ff]">design</span>
                <span className="text-[#e6edf3]">:</span>{" "}
                <span className="text-[#a5d6ff]">&quot;before coding&quot;</span>
                <span className="text-[#e6edf3]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#79c0ff]">simplify</span>
                <span className="text-[#e6edf3]">:</span>{" "}
                <span className="text-[#a5d6ff]">&quot;before optimizing&quot;</span>
                <span className="text-[#e6edf3]">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#79c0ff]">ship</span>
                <span className="text-[#e6edf3]">:</span>{" "}
                <span className="text-[#a5d6ff]">&quot;before perfecting&quot;</span>
                <span className="text-[#e6edf3]">,</span>
                {"\n"}
                <span className="text-[#ffa657]">{"}"}</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
