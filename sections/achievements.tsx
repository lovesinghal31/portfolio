"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Award, Code } from "lucide-react"
import { Section } from "@/components/section"
import { Card3D } from "@/components/card-3d"
import { achievements } from "@/data/achievements"
import { staggerContainer, staggerItem } from "@/animations/variants"

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
}

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="achievements" label="Achievements" index="04.">
      <div ref={ref}>
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Notable milestones.
        </motion.h2>
        <motion.p
          className="mb-10 max-w-2xl text-base text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hackathons, competitive programming, and recognition along the way.
        </motion.p>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.2 }}
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.title} variants={staggerItem}>
              <Card3D className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    {iconMap[achievement.icon]}
                  </div>
                  {achievement.metric && (
                    <span className="font-mono text-2xl font-bold text-foreground">
                      {achievement.metric}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold">
                    {achievement.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
