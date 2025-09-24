"use client"
import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { AnimatedSection } from '../../components/animated-section'
import { DialogRoot, DialogContent, DialogTitle, DialogDescription } from '../../components/ui/dialog'
import { Github, Globe, Search, Filter, X, Boxes, Brain, ShoppingCart, Music2, Workflow, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'

interface ProjectsClientProps {
  projects: Array<{
    title: string
    description: string
    tech: string[]
    link?: string
    repo?: string
    longDescription?: string
  }>
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<ProjectsClientProps['projects'][number] | null>(null)
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])

  function onSelect(p: ProjectsClientProps['projects'][number]) {
    setActive(p)
    setOpen(true)
  }

  const allTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach(p => p.tech.forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [projects])

  function toggleTag(tag: string) {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const q = query.toLowerCase().trim()
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || (p.longDescription?.toLowerCase().includes(q))
      const matchesTags = activeTags.length === 0 || activeTags.every(t => p.tech.includes(t))
      return matchesQuery && matchesTags
    })
  }, [projects, query, activeTags])

  return (
    <DialogRoot open={open} onOpenChange={(o) => { if(!o) { setOpen(false); setActive(null) } else setOpen(o) }}>
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <AnimatedSection className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base">Explore selected builds. Filter by tech stack or search for keywords. Each project emphasizes clean architecture, DX, and practical problem solving.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search projects (title, description, stack...)"
                  className="w-full pl-9 pr-3 py-2 rounded-md bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                {query && (
                  <button aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" onClick={() => setQuery('')}>
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Filter className="size-4" /> <span>{activeTags.length ? `${activeTags.length} tag${activeTags.length>1?'s':''} active` : 'No filters'}</span>
                {activeTags.length > 0 && (
                  <button onClick={() => setActiveTags([])} className="ml-1 rounded-md px-2 py-1 bg-muted/60 hover:bg-muted text-foreground/80 text-[10px] uppercase tracking-wide">Reset</button>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => {
                const active = activeTags.includes(tag)
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium tracking-wide border transition-colors ${active ? 'bg-primary text-primary-foreground border-primary' : 'hover:border-primary/50 bg-muted/40 border-muted'} `}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <AnimatedSection key={p.title} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="h-full"
              >
                <Card
                  onClick={() => onSelect(p)}
                  className="relative h-full flex flex-col cursor-pointer group border-border/60 hover:border-primary/50 transition-colors overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_70%)]" />
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 group-hover:text-primary transition-colors line-clamp-1">
                        <ProjectIcon title={p.title} />
                        {p.title}
                      </span>
                    </CardTitle>
                    <CardDescription className="line-clamp-3 min-h-[3.75rem]">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1">
                      {p.tech.slice(0,5).map(t => (
                        <Badge key={t} variant="secondary" className="text-[10px] py-0.5">{t}</Badge>
                      ))}
                      {p.tech.length > 5 && (
                        <span className="text-[10px] px-1 rounded bg-muted text-muted-foreground">+{p.tech.length - 5}</span>
                      )}
                    </div>
                    <div className="mt-auto text-[11px] font-medium text-primary/70 group-hover:text-primary flex items-center gap-1">
                      View details <span aria-hidden>→</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-sm text-muted-foreground py-12 text-center border rounded-md">
              No projects match your search/filter.
            </div>
          )}
        </div>
      </div>
      {active && (
        <DialogContent title={active.title} className="max-w-xl">
          <DialogTitle className="flex items-center gap-2">
            <ProjectIcon title={active.title} />
            {active.title}
          </DialogTitle>
          <DialogDescription>{active.description}</DialogDescription>
          {active.longDescription && (
            <div className="mt-4 text-sm leading-relaxed text-foreground/90 space-y-3">
              {active.longDescription.split(/\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {active.tech.map(t => (
              <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground uppercase tracking-wide">{t}</span>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {active.repo && (
              <a
                href={active.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github className="size-4" /> View Source on GitHub
              </a>
            )}
            {active.link && (
              <a
                href={active.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Globe className="size-4" /> Live / Showcase Link
              </a>
            )}
          </div>
        </DialogContent>
      )}
    </DialogRoot>
  )
}

function ProjectIcon({ title }: { title: string }) {
  const t = title.toLowerCase()
  if (t.includes('shop') || t.includes('ecom')) return <ShoppingCart className="size-4 text-primary/80" />
  if (t.includes('music')) return <Music2 className="size-4 text-primary/80" />
  if (t.includes('smart') || t.includes('ai')) return <Brain className="size-4 text-primary/80" />
  if (t.includes('thryve') || t.includes('workflow')) return <Workflow className="size-4 text-primary/80" />
  if (t.includes('secure') || t.includes('auth')) return <ShieldCheck className="size-4 text-primary/80" />
  return <Boxes className="size-4 text-primary/80" />
}
