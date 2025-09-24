"use client"
import { Button } from '../components/ui/button'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { SITE, SOCIALS, PROJECTS, SKILLS, HERO_MOSAIC, ENGINEERING_PILLARS, LEARNING_TIMELINE, CURRENT_FOCUS, getIcon } from '../lib/data'
import { ArrowRight, Download, Mail, Github, Sparkles, Star, Cpu, Workflow, Activity } from 'lucide-react'
import Link from 'next/link'
import { AnimatedSection } from '../components/animated-section'
import React, { useEffect, useState } from 'react'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <InteractiveBackground />
      <section className="relative max-w-6xl mx-auto px-4 pt-28 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs text-muted-foreground">
            <span>Hi, I&apos;m</span> <span className="font-medium text-foreground">{SITE.name}</span>
          </div>
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/60 text-transparent bg-clip-text leading-tight">
              {SITE.tagline}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {SITE.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="gap-2">
              <a href="/resume.pdf" download>
                <Download className="size-4" /> Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href={SOCIALS.email}>
                <Mail className="size-4" /> Contact Me
              </a>
            </Button>
            <Button variant="ghost" asChild className="gap-1">
              <Link href="/projects">View Projects <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
          <MetricsStrip />
        </motion.div>
      </section>
      <HeroMosaic />

  <EngineeringPillars />
  <LearningTimeline />

      <SkillsPreview />

      <FocusAndLinks />
    </div>
  )
}

// --- Components ---

function InteractiveBackground() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useSpring(0.4, { stiffness: 120, damping: 30 })

  function handleMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const spotlight = useTransform([x, y], ([latestX, latestY]) => {
    return `radial-gradient(600px at ${latestX}px ${latestY}px, hsl(var(--primary)/0.18), transparent 70%)`
  })

  return (
    <motion.div
      onMouseMove={handleMove}
      style={{ background: spotlight, opacity }}
      className="absolute inset-0 transition-colors" aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--primary)/0.08),transparent_40%,hsl(var(--primary)/0.08))] mix-blend-plus-lighter opacity-70" />
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] bg-background/60 backdrop-blur-[2px]" />
    </motion.div>
  )
}

function MetricsStrip() {
  const uniqueDomains = new Set(SKILLS.map(s => s.category)).size
  const metrics = [
    { label: 'Projects', value: PROJECTS.length, icon: Star },
    { label: 'Focused Domains', value: uniqueDomains, icon: Cpu },
    { label: 'Tech Stack Items', value: SKILLS.length, icon: Workflow },
    { label: 'Learning Velocity', value: '∞', icon: Activity }
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
      {metrics.map(m => (
        <div key={m.label} className="relative rounded-lg border bg-card/50 px-3 py-4 flex flex-col gap-1 overflow-hidden group">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground">
            <m.icon className="size-3.5 text-primary" /> {m.label}
          </div>
          <AnimatedCounter value={m.value} className="text-lg font-semibold" />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_65%_35%,hsl(var(--primary)/0.20),transparent_70%)]" />
        </div>
      ))}
    </div>
  )
}

function AnimatedCounter({ value, className }: { value: number | string, className?: string }) {
  const [display, setDisplay] = useState(typeof value === 'number' ? 0 : value)
  useEffect(() => {
    if (typeof value !== 'number') return
    let frame: number
    const start = performance.now()
    const duration = 1400
    const from = 0
    const to = value
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])
  return <div className={className}>{display}</div>
}

function HeroMosaic() {
  const items = HERO_MOSAIC
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-4 -mt-16">
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[150px]">
        {items.map(i => (
          <motion.div
            key={i.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={`relative rounded-xl border bg-card/60 p-4 flex flex-col justify-between overflow-hidden group ${i.span || ''}`}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {i.icon && getIcon(i.icon)}
                <h3 className="text-sm font-medium tracking-tight group-hover:text-primary transition-colors">{i.title}</h3>
              </div>
              {i.body && <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">{i.body}</p>}
              {i.meta && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {i.meta.map(m => (
                    <span key={m} className="rounded-md bg-muted/40 text-[10px] px-1.5 py-0.5 tracking-wide text-muted-foreground group-hover:bg-muted/60 transition-colors">
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary)/0.18),transparent_70%)]" />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}

function EngineeringPillars() {
  const pillars = ENGINEERING_PILLARS
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-4 mt-32 space-y-10">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Engineering Pillars</h2>
        <Button variant="ghost" asChild className="h-8 px-3 text-xs">
          <Link href="/about" className="gap-1">About Me <ArrowRight className="size-4" /></Link>
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map(p => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 250, damping: 22 }}
            className="relative rounded-xl border bg-card/60 p-5 flex flex-col gap-3 overflow-hidden group"
          >
            <h3 className="font-medium text-sm tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.body}</p>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_25%,hsl(var(--primary)/0.18),transparent_70%)]" />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}

function LearningTimeline() {
  const periods = LEARNING_TIMELINE
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-4 mt-32 space-y-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Learning Timeline</h2>
        <span className="text-xs text-muted-foreground">Focused progression of skills & practices</span>
      </div>
      {/* Alternating timeline */}
      <ol
        className="relative grid gap-y-20 md:gap-y-28 md:grid-cols-[1fr_1px_1fr] before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-primary/15 before:to-primary/0 after:absolute after:inset-y-0 after:left-1/2 after:-translate-x-1/2 after:w-[3px] after:bg-gradient-to-b after:from-primary/0 after:via-primary/5 after:to-primary/0 after:blur-[4px]"
      >
        {periods.map((p, idx) => {
          const isLeft = idx % 2 === 0
          return (
            <li
              key={p.period}
              className={[
                'contents', // allow sub-items to participate in grid columns
              ].join(' ')}
            >
              {/* Left column content (for even indexes on md+, otherwise full width) */}
              <div
                className={[
                  'relative md:col-start-1 md:col-end-2 flex',
                  isLeft ? 'justify-end' : 'justify-end md:opacity-0 md:pointer-events-none md:select-none',
                ].join(' ')}
                aria-hidden={!isLeft && true}
              >
                {isLeft && (
                  <TimelineCard period={p.period} stage={idx + 1} items={p.items} side="left" />
                )}
              </div>
              {/* Center marker (vertically aligned with card midline) */}
              <div className="relative md:col-start-2 md:col-end-3 flex md:justify-center items-center">
                <span className="relative block size-5 rounded-full bg-gradient-to-br from-primary/70 via-primary/40 to-primary/20 ring-2 ring-primary/50 shadow-[0_0_0_3px_hsl(var(--background))]">
                  <span className="absolute inset-0 rounded-full bg-primary/30 blur-[6px] animate-pulse [animation-duration:4s]" aria-hidden />
                </span>
              </div>
              {/* Right column content (for odd indexes on md+, otherwise full width) */}
              <div
                className={[
                  'relative md:col-start-3 md:col-end-4 flex',
                  !isLeft ? 'justify-start' : 'justify-start md:opacity-0 md:pointer-events-none md:select-none',
                ].join(' ')}
                aria-hidden={isLeft && true}
              >
                {!isLeft && (
                  <TimelineCard period={p.period} stage={idx + 1} items={p.items} side="right" />
                )}
              </div>
              {/* Mobile single-column card (always after marker, visible only on small screens) */}
              <div className="md:hidden col-span-full -mt-10">
                <TimelineCard period={p.period} stage={idx + 1} items={p.items} side={isLeft ? 'left' : 'right'} mobile />
              </div>
            </li>
          )
        })}
      </ol>
    </AnimatedSection>
  )
}

function TimelineCard({ period, stage, items, side, mobile }: { period: string, stage: number, items: string[], side: 'left' | 'right', mobile?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: mobile ? 0 : side === 'left' ? -32 : 32 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      tabIndex={0}
      className={[
        'group w-full md:w-[min(100%,360px)] space-y-4 rounded-xl border/50 border bg-gradient-to-br from-card/70 via-card/60 to-card/40 backdrop-blur-md p-5 md:p-6 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all relative shadow-sm hover:shadow-md',
        side === 'left' ? 'md:mr-10 md:after:right-[-2.6rem]' : 'md:ml-10 md:after:left-[-2.6rem]',
        !mobile && 'md:after:content-[""] md:after:absolute md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-px md:after:w-14 md:after:bg-gradient-to-r',
        !mobile && side === 'left' && 'md:after:from-primary/50 md:after:to-transparent',
        !mobile && side === 'right' && 'md:after:bg-gradient-to-l md:after:from-primary/50 md:after:to-transparent',
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wide text-primary/90 group-hover:text-primary flex items-center gap-2">
          <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium tracking-tight text-primary/80 group-hover:bg-primary/15 group-hover:text-primary transition-colors">{period}</span>
        </h3>
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground/60 font-medium">Stage {stage}</span>
      </div>
      <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed relative">
        {items.map(i => (
          <li key={i} className="flex gap-2">
            <span className="mt-[3px] inline-block size-1.5 rounded-full bg-primary/60 group-hover:bg-primary" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <div className="h-px w-14 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/30 rounded-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary)/0.25),transparent_70%)]" />
    </motion.div>
  )
}

function SkillsPreview() {
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-4 mt-32 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Stack Snapshot</h2>
        <Button variant="ghost" asChild className="h-8 px-3 text-xs">
          <Link href="/skills" className="gap-1">All Skills <ArrowRight className="size-4" /></Link>
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {SKILLS.slice(0, 18).map(s => (
          <span key={s.name} className="rounded-md border bg-muted/40 px-2 py-1 text-[11px] font-medium tracking-wide hover:bg-muted transition-colors">{s.name}</span>
        ))}
      </div>
    </AnimatedSection>
  )
}

function FocusAndLinks() {
  const focus = CURRENT_FOCUS
  return (
    <AnimatedSection className="max-w-6xl mx-auto px-4 mt-32 mb-40 space-y-12">
      <div className="flex items-center gap-2">
        <Sparkles className="size-4 text-primary" />
        <h2 className="text-2xl font-semibold tracking-tight">Current Focus</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {focus.map(i => (
          <motion.div
            key={i.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="relative rounded-xl border p-6 bg-card/50 flex flex-col gap-3 overflow-hidden group"
          >
            <h3 className="font-medium text-sm tracking-tight group-hover:text-primary transition-colors">{i.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{i.body}</p>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_25%_20%,hsl(var(--primary)/0.18),transparent_70%)]" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 pt-2 text-xs text-muted-foreground">
        <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors"><Github className="size-3" /> GitHub</a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">LinkedIn</a>
        <a href={SOCIALS.hashnode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">Hashnode</a>
      </div>
    </AnimatedSection>
  )
}
