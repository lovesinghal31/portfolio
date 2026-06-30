"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { charReveal } from "@/animations/variants"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "p",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10%" })

  const words = text.split(" ")

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => {
            const totalIndex =
              words.slice(0, wordIndex).join(" ").length + charIndex
            return (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                variants={charReveal}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 0.4,
                  delay: delay + totalIndex * 0.02,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {char}
              </motion.span>
            )
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  )
}
