"use client"
import { useMemo, useState } from 'react'
import { SKILLS, SKILL_CATEGORY_ACCENTS } from '../../lib/data'
import { Card, CardContent } from '../../components/ui/card'
import { SkillMeter } from '../../components/skill-meter'
import { motion } from 'motion/react'
import { cn } from '../../lib/utils'
import { Search, Filter, Code2, Box, Database, Wrench, Palette, Cpu, Sparkles } from 'lucide-react'
import { useReducedMotion, motion as m } from 'motion/react'

const categories = Array.from(new Set(SKILLS.map(s => s.category)))

export default function SkillsClient() {
  const [query, setQuery] = useState('')
  const [activeCats, setActiveCats] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('detailed')
  const reduceMotion = useReducedMotion()
  const filtered = useMemo(() => {
    return SKILLS.filter(s => {
      const q = query.toLowerCase()
      const matchesQuery = !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      const matchesCat = activeCats.length === 0 || activeCats.includes(s.category)
      return matchesQuery && matchesCat
    })
  }, [query, activeCats])

  function toggleCat(cat: string) {
    setActiveCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full rounded-md border bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const active = activeCats.includes(cat)
              return (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  className={cn('inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors', active ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent')}
                >
                  <Filter className="size-3" /> {cat}
                </button>
              )
            })}
            {activeCats.length > 0 && (
              <button onClick={() => setActiveCats([])} className="text-xs underline text-muted-foreground hover:text-foreground">Clear</button>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">Showing {filtered.length} of {SKILLS.length} skills.</p>
          <div className="flex items-center gap-2 text-xs" role="group" aria-label="Toggle skill view mode">
            <button
              onClick={() => setViewMode('detailed')}
              aria-pressed={viewMode === 'detailed'}
              className={cn('px-2 py-1 rounded-md border font-medium transition-colors', viewMode === 'detailed' ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent')}
            >Detailed</button>
            <button
              onClick={() => setViewMode('compact')}
              aria-pressed={viewMode === 'compact'}
              className={cn('px-2 py-1 rounded-md border font-medium transition-colors', viewMode === 'compact' ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent')}
            >Compact</button>
          </div>
        </div>
        <CategoryLegend />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((s, i) => {
          const accent = resolveAccent(s.category)
          return (
            <m.div
              key={s.name}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.55, ease: 'easeOut' }}
              className="h-full"
            >
              <TiltCard>
                <Card
                  className={cn(
                    'group relative h-full overflow-hidden border bg-gradient-to-br from-background/80 to-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all',
                    'before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300',
                    'hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_4px_18px_-2px_hsl(var(--primary)/0.25)] hover:before:opacity-100'
                  )}
                  style={{
                    ['--accent-color' as any]: accent.color
                  }}
                >
                  <AccentBorder />
                  <CardContent className="p-5 flex flex-col gap-4 relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span
                          className={cn(
                            'mt-0.5 inline-flex size-9 items-center justify-center rounded-md ring-1 text-primary/90 transition-transform',
                            'bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent-color)/0.25),transparent_70%)] ring-primary/20 group-hover:scale-110'
                          )}
                        >
                          <SkillIcon category={s.category} />
                        </span>
                        <div>
                          <h3 className="font-medium tracking-tight leading-tight text-sm">{s.name}</h3>
                          <span className="text-[10px] uppercase tracking-wide text-muted-foreground/80 flex items-center gap-1">
                            <span className="inline-block size-1.5 rounded-full" style={{ background: accent.color }} />
                            {s.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-primary tabular-nums">{s.level}%</span>
                    </div>
                    <SkillMeter
                      value={s.level}
                      label={`${s.name} proficiency`}
                      gradientClass={accent.meter}
                      animated={!reduceMotion}
                      className={viewMode === 'compact' ? 'hidden' : ''}
                    />
                    <p className={cn('text-xs text-muted-foreground leading-relaxed', viewMode === 'compact' ? 'line-clamp-2' : 'line-clamp-4')}>{s.description}</p>
                  </CardContent>
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_65%_40%,hsl(var(--accent-color)/0.25),transparent_75%)]" />
                </Card>
              </TiltCard>
            </m.div>
          )
        })}
      </div>
    </div>
  )
}

function SkillIcon({ category }: { category: string }) {
  const c = category.toLowerCase()
  if (c.includes('language')) return <Code2 className="size-4" />
  if (c.includes('frontend')) return <Palette className="size-4" />
  if (c.includes('backend')) return <Cpu className="size-4" />
  if (c.includes('database')) return <Database className="size-4" />
  if (c.includes('tools')) return <Wrench className="size-4" />
  if (c.includes('ai') || c.includes('ml')) return <Sparkles className="size-4" />
  return <Box className="size-4" />
}

function resolveAccent(category: string) {
  const key = category.toLowerCase()
  if (key.includes('language')) return { color: SKILL_CATEGORY_ACCENTS.language.color, meter: SKILL_CATEGORY_ACCENTS.language.meter }
  if (key.includes('frontend')) return SKILL_CATEGORY_ACCENTS.frontend
  if (key.includes('backend')) return SKILL_CATEGORY_ACCENTS.backend
  if (key.includes('database')) return SKILL_CATEGORY_ACCENTS.database
  if (key.includes('tools')) return SKILL_CATEGORY_ACCENTS.tools
  if (key.includes('ai') || key.includes('ml')) return SKILL_CATEGORY_ACCENTS.ai
  return SKILL_CATEGORY_ACCENTS.default
}

// Tilt interaction wrapper with reduced-motion fallback
function TiltCard({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return <div>{children}</div>
  return (
    <div
      className="[perspective:1000px] group/t"
    >
      <div
        className="relative transition-transform duration-300 will-change-transform group-hover/t:[transform:rotateX(6deg)_rotateY(-6deg)]"
      >
        {children}
      </div>
    </div>
  )
}

// Subtle animated border using accent color
function AccentBorder() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-lg border border-transparent [mask:linear-gradient(#000,_#000)_content-box,linear-gradient(#000,_#000)] [mask-composite:exclude] before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:[background:linear-gradient(110deg,hsl(var(--accent-color)/0.6),transparent, hsl(var(--accent-color)/0.4))] before:[mask:linear-gradient(#000,#000)] before:content-['']"
    />
  )
}

function CategoryLegend() {
  const entries = Object.entries(SKILL_CATEGORY_ACCENTS).filter(([k]) => k !== 'default')
  return (
    <div className="flex flex-wrap gap-3 items-center pt-1" aria-label="Skill category legend">
      {entries.map(([k, v]) => (
        <span key={k} className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium bg-background/60 backdrop-blur">
          <span className="size-2.5 rounded-full" style={{ background: v.color }} />
          {capitalize(k)}
        </span>
      ))}
    </div>
  )
}

function capitalize(s: string) { return s.charAt(0).toUpperCase() + s.slice(1) }
