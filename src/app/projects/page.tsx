import { PROJECTS, SITE } from '../../lib/data'
import { Metadata } from 'next'
import ProjectsClient from './projects-client'

export const metadata: Metadata = {
  title: `Projects – ${SITE.name}`,
  description: 'Selected software and AI projects.'
}

export default function ProjectsPage() {
  return <ProjectsClient projects={PROJECTS} />
}
