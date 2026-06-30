"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Section } from "@/components/section"
import { Card3D } from "@/components/card-3d"
import { skillCategories, getSkillsByCategory } from "@/data/skills"
import { staggerContainer, staggerItem } from "@/animations/variants"
import { cn } from "@/lib/utils"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Backend")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const categorySkills = getSkillsByCategory(activeCategory)

  return (
    <Section id="skills" label="Skills" index="02.">
      <div ref={ref}>
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Tools I work with.
        </motion.h2>
        <motion.p
          className="mb-10 max-w-2xl text-base text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies I use to build production-grade software. Grouped by domain, sorted by depth of experience.
        </motion.p>

        {/* Category tabs */}
        <motion.div
          className="mb-8 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={cn(
                "rounded-lg px-4 py-2 font-mono text-xs transition-all",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {categorySkills.map((skill) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <Card3D
                className="flex flex-col items-center gap-2 px-4 py-5 text-center"
                containerClassName="h-full"
              >
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[10px]",
                    skill.level === "core"
                      ? "bg-primary/10 text-primary"
                      : skill.level === "proficient"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  {skill.level}
                </span>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
