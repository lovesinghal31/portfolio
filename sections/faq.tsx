"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { faqItems } from "@/data/faq"
import { staggerContainer, staggerItem } from "@/animations/variants"
import { cn } from "@/lib/utils"

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-sm font-medium sm:text-base">{question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq" label="FAQ" index="07.">
      <div ref={ref}>
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Common questions.
        </motion.h2>
        <motion.p
          className="mb-10 max-w-2xl text-base text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Things people usually ask. Answered honestly.
        </motion.p>

        <motion.div
          className="rounded-xl border border-border bg-card px-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.2 }}
        >
          {faqItems.map((item, i) => (
            <motion.div key={i} variants={staggerItem}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
