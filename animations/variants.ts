import type { Variants, Transition } from "framer-motion"

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export const charReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
}

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export const springTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
}

export const slowTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94],
}
