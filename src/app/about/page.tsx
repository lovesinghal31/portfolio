import { EDUCATION, EXPERIENCE, SITE, SKILLS, ABOUT_VALUE_CARDS, ABOUT_INTERESTS, getIcon } from '../../lib/data'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { AnimatedSection } from '../../components/animated-section'
import { Brain, Code2, Rocket, Sparkles, GraduationCap, Briefcase, Cpu, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: `About – ${SITE.name}`,
  description: 'About me, background, education, and experience.'
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      <AnimatedSection className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed text-sm md:text-base">
            I'm a Computer Science & Engineering student with a strong interest in practical AI, developer experience, and product-focused engineering. I love taking ambiguous ideas and turning them into clear, minimal, and robust software. Recently I've been exploring AI‑assisted user flows, automation workflows, and ways to improve iteration speed.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_VALUE_CARDS.map(c => {
            return (
              <div key={c.title} className="relative overflow-hidden rounded-xl border bg-card/60 p-5 backdrop-blur-sm group">
                <div className="flex items-start gap-3">
                  <span className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20 text-primary group-hover:scale-110 transition-transform flex items-center justify-center">{getIcon(c.icon, 'size-5')}</span>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm tracking-tight">{c.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_25%,hsl(var(--primary)/0.15),transparent_70%)]" />
              </div>
            )
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="font-semibold text-xl flex items-center gap-2"><GraduationCap className="size-4 text-primary" /> Education</h2>
          {EDUCATION.map(e => (
            <Card key={e.school}>
              <CardHeader>
                <CardTitle className="text-base">{e.school}</CardTitle>
                <CardDescription>{e.degree}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{e.period}</p>
                <p>{e.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-6">
            <h2 className="font-semibold text-xl flex items-center gap-2"><Briefcase className="size-4 text-primary" /> Experience</h2>
          <div className="relative space-y-6 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-border/70">
            {EXPERIENCE.map(e => (
              <div key={e.role} className="relative pl-10">
                <div className="absolute left-0 top-2 size-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="rounded-lg border bg-card/50 p-4 space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                    <span>{e.role}</span>
                    <span className="text-muted-foreground/70">– {e.company}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{e.period}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{e.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-10">
        <h2 className="font-semibold text-xl flex items-center gap-2"><Cpu className="size-4 text-primary" /> Technologies Snapshot</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.slice(0, 12).map(s => (
            <span key={s.name} className="rounded-md border bg-muted/40 px-2 py-1 text-[11px] font-medium tracking-wide hover:bg-muted transition-colors">{s.name}</span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground max-w-3xl">Curious about the full list? Visit the dedicated skills page for interactive filtering and proficiency levels.</p>
      </AnimatedSection>

      <AnimatedSection className="space-y-6">
        <h2 className="font-semibold text-xl flex items-center gap-2"><Compass className="size-4 text-primary" /> Current Interests</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {ABOUT_INTERESTS.map(i => (
            <div key={i.title} className="rounded-lg border p-5 bg-card/50 hover:border-primary/50 transition-colors">
              <h3 className="font-medium text-sm mb-1 tracking-tight">{i.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
