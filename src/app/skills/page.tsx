import { SITE } from '../../lib/data'
import { Metadata } from 'next'
import SkillsClient from './skills-client'

export const metadata: Metadata = {
  title: `Skills – ${SITE.name}`,
  description: 'Technologies and tools I work with.'
}

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Tech</h1>
        <p className="text-muted-foreground max-w-3xl">An overview of the languages, frameworks, and tools I use regularly — filter or search to explore. Levels are approximate and focus on practical, project-driven usage.</p>
      </div>
      <SkillsClient />
    </div>
  )
}
