"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { useRef, type ReactNode } from "react"
import {
  Home,
  User,
  Code2,
  Layers,
  Mail,
  Sun,
  Moon,
  Search,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface DockItemData {
  icon: ReactNode
  label: string
  href?: string
  onClick?: () => void
}

function DockIcon({
  mouseX,
  item,
}: {
  mouseX: MotionValue<number>
  item: DockItemData
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return 150
    return val - rect.x - rect.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 56, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 })

  const handleClick = () => {
    if (item.onClick) {
      item.onClick()
    } else if (item.href) {
      const el = document.querySelector(item.href)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-xl",
        "bg-secondary/80 text-foreground backdrop-blur-sm",
        "border border-border/50",
        "transition-colors hover:bg-secondary hover:text-primary",
        "group relative"
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={item.label}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick()
      }}
    >
      <div className="flex items-center justify-center [&>svg]:h-[45%] [&>svg]:w-[45%]">
        {item.icon}
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground border border-border shadow-md">
          {item.label}
        </span>
      </div>
    </motion.div>
  )
}

interface DockProps {
  onCommandPalette?: () => void
}

export function Dock({ onCommandPalette }: DockProps) {
  const mouseX = useMotionValue(Infinity)
  const { resolvedTheme, setTheme } = useTheme()

  const items: DockItemData[] = [
    { icon: <Home />, label: "Home", href: "#hero" },
    { icon: <User />, label: "About", href: "#about" },
    { icon: <Code2 />, label: "Projects", href: "#projects" },
    { icon: <Layers />, label: "Skills", href: "#skills" },
    { icon: <Mail />, label: "Contact", href: "#contact" },
    {
      icon: <Search />,
      label: "Search (⌘K)",
      onClick: onCommandPalette,
    },
    {
      icon: resolvedTheme === "dark" ? <Sun /> : <Moon />,
      label: "Toggle Theme",
      onClick: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    },
  ]

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 z-40 hidden md:flex"
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label="Main Navigation Dock"
    >
      <motion.div
        className="flex items-end gap-2 rounded-2xl border border-border/60 bg-background/80 px-3 py-2 backdrop-blur-xl shadow-lg"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item, i) => (
          <DockIcon key={i} mouseX={mouseX} item={item} />
        ))}
      </motion.div>
    </motion.nav>
  )
}
