import { SOCIALS, SITE, CONTACT_HIGHLIGHTS, CONTACT_SOCIALS, getIcon } from '../../lib/data'
import { Metadata } from 'next'
import { AnimatedSection } from '../../components/animated-section'
import { Mail, Linkedin, Github, PenTool, Clock, MessageSquareText, Sparkles } from 'lucide-react'
import CopyEmail from '../../components/copy-email'

export const metadata: Metadata = {
  title: `Contact – ${SITE.name}`,
  description: 'Get in touch or find me on the web.'
}


export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <AnimatedSection>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
        <p className="text-muted-foreground max-w-2xl">I'm always open to discussing new ideas, collaborations, or interesting problems in AI, web engineering, and product building.</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-3">
        {CONTACT_HIGHLIGHTS.map(h => (
          <div key={h.title} className="rounded-xl border p-6 bg-card/50 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {getIcon(h.icon, 'size-5 text-primary')}
              <h2 className="font-medium">{h.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
          </div>
        ))}
      </AnimatedSection>

      <AnimatedSection className="rounded-xl border p-6 flex flex-col gap-4 bg-gradient-to-br from-background to-muted/30">
        <div className="flex items-center gap-3">
          <Mail className="size-5 text-primary" />
          <h2 className="font-semibold">Direct Email</h2>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground break-all">{SOCIALS.email}</p>
          <CopyEmail email={SOCIALS.email} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {CONTACT_SOCIALS.map(s => {
          const href = SOCIALS[s.hrefKey]
          return (
            <a
              key={s.label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group rounded-lg border p-6 flex flex-col items-center gap-3 hover:bg-accent/60 transition-colors relative overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_35%_25%,hsl(var(--primary)/0.20),transparent_70%)]" />
              {getIcon(s.icon, 'size-6 text-primary group-hover:scale-110 transition-transform relative')}
              <span className="font-medium relative">{s.label}</span>
            </a>
          )
        })}
      </AnimatedSection>
      <AnimatedSection className="text-center pt-4">
        <p className="text-sm text-muted-foreground">Not sure how to start? Just send a quick hello with what you’re building or learning.</p>
      </AnimatedSection>
    </div>
  )
}
