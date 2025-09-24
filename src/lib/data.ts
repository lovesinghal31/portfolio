// Central content configuration for the portfolio.
// Edit these arrays/objects to update site content.
import { Brain, Code2, Rocket, Sparkles, Cpu, Workflow, Activity, Star, Github, Mail, Linkedin, PenTool, Clock, MessageSquareText } from 'lucide-react'
import React from 'react'

// --------------- Type Definitions ---------------
export type IconName =
  | 'sparkles' | 'layers' | 'cpu' | 'focus' | 'bolt' | 'gauge' | 'globe' | 'braces'
  | 'brain' | 'code' | 'rocket' | 'star' | 'github' | 'mail' | 'linkedin' | 'pen'
  | 'clock' | 'message'

export interface HeroMosaicItem { title: string; icon?: IconName; span?: string; body?: string; meta?: string[] }
export interface Pillar { title: string; body: string }
export interface TimelinePeriod { period: string; items: string[] }
export interface FocusItem { title: string; body: string }
export interface ValueCard { title: string; icon: IconName; desc: string }
export interface InterestItem { title: string; body: string }
export interface ContactHighlight { title: string; icon: IconName; body: string }
export type SocialKey = 'email' | 'linkedin' | 'hashnode' | 'github'
export interface ContactSocial { key: SocialKey; label: string; hrefKey: SocialKey; icon: IconName }

const ICON_COMPONENTS: Record<IconName, React.ComponentType<any>> = {
  sparkles: Sparkles,
  layers: Workflow,
  cpu: Cpu,
  focus: Activity,
  bolt: Star,
  gauge: Activity,
  globe: Github,
  braces: Star,
  brain: Brain,
  code: Code2,
  rocket: Rocket,
  star: Star,
  github: Github,
  mail: Mail,
  linkedin: Linkedin,
  pen: PenTool,
  clock: Clock,
  message: MessageSquareText,
}

export function getIcon(name: IconName, className = 'size-3 text-primary'): React.ReactNode {
  const Comp = ICON_COMPONENTS[name] || Sparkles
  return React.createElement(Comp, { className })
}

export const SITE = {
  name: 'Love Singhal',
  tagline: 'CSE Student & AI Enthusiast',
  description: 'Portfolio of Love Singhal – Computer Science student passionate about AI, problem solving, and building meaningful software.',
  url: 'https://example.com', // TODO: Update to real domain once deployed
  ogImage: '/og.png'
}

export const EDUCATION = [
  {
    school: 'Institute of Engineering and Technology, Indore',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2024 – 2028',
    details: 'Add key achievements, GPA (if desired), relevant coursework.'
  }
]

export const EXPERIENCE = [
  {
    role: 'AI/Software Intern',
    company: 'Company / Organization',
    period: '2024',
    details: 'Short bullet summary of what you did and impact.'
  }
]

export const PROJECTS = [
  {
    title: 'ShopEasy',
    description: 'AI‑assisted e-commerce platform with smart product discovery.',
    tech: ['React', 'MongoDB', 'TailwindCSS'],
    link: 'https://github.com/lovesinghal31/ecomweb',
    repo: 'https://github.com/lovesinghal31/ecomweb',
    longDescription: 'ShopEasy is a modern e-commerce web app that integrates AI powered search & recommendation helpers to reduce user friction while browsing large catalogues. Features include JWT auth, role based admin dashboard, product CRUD, cart + checkout flow, fuzzy AI search suggestions, optimistic UI updates, and responsive mobile-first design. Focused on clean modular React components and scalable MongoDB schema design.'
  },
  {
    title: 'MusicNextjs',
    description: 'Course & instructor portal for a music academy built with Next.js.',
    tech: ['Next.js', 'Accertinity UI', 'TypeScript'],
    link: 'https://github.com/lovesinghal31/musicnextjs',
    repo: 'https://github.com/lovesinghal31/musicnextjs',
    longDescription: 'MusicNextjs provides a performant catalog experience for music learners: dynamic course listing, instructor profiles, search + filtering, and clean semantic layouts. Implemented using Next.js App Router, ISR-ready patterns, strongly typed components with TypeScript, and accessible UI primitives. Emphasis on fast navigation, predictable data contracts, and easily extendable content structures.'
  },
  {
    title: 'SmartJansunwai',
    description: 'Civic complaint platform using AI routing + conversational assistance.',
    tech: ['React', 'MongoDB', 'TailwindCSS', 'AI Chatbot', 'WhatsApp Bot'],
    link: 'https://github.com/lovesinghal31/SmartJansunwai',
    repo: 'https://github.com/lovesinghal31/SmartJansunwai',
    longDescription: 'SmartJansunwai streamlines citizen grievance submission and classification. Incoming complaints are analyzed by an AI classifier to auto-route to the correct department, reducing manual triage. Includes multilingual chatbot assistance, WhatsApp bot integration for low-friction submission, status tracking, admin escalation workflow, and analytics dashboard for resolution metrics. Designed for clarity, transparency, and faster response cycles.'
  },
  {
    title: 'Thryve',
    description: 'Mental health support platform with AI triage & workflow automation.',
    tech: ['React', 'MongoDB', 'TailwindCSS', 'n8n'],
    link: 'https://github.com/lovesinghal31/Thryve',
    repo: 'https://github.com/lovesinghal31/Thryve',
    longDescription: 'Thryve provides always-on institutional mental health assistance: conversational intake assistant, adaptive triage scoring, resource recommendation, anonymous journaling, and escalation routing. Integrates n8n for low-code workflow automations (alerts, follow-ups, referral triggers). Built with a modular React component architecture, secure data handling patterns, and emphasis on empathetic UI microcopy.'
  }
]


export const SKILLS = [
  { name: 'C++', category: 'Language', level: 80, description: 'Strong grasp of STL, memory management, and problem solving (DSA).' },
  { name: 'JavaScript', category: 'Language', level: 85, description: 'Modern ES features, async patterns, frontend app architecture.' },
  { name: 'Java', category: 'Language', level: 60, description: 'Core Java, OOP fundamentals, basic API/service patterns.' },
  { name: 'TypeScript', category: 'Language', level: 75, description: 'Type-safe React components, utility types, API contract modeling.' },
  { name: 'React', category: 'Frontend', level: 80, description: 'Hooks, context patterns, composition, performance tuning.' },
  { name: 'Next.js', category: 'Frontend', level: 78, description: 'App Router, dynamic routing, metadata, server components.' },
  { name: 'Node.js', category: 'Backend', level: 70, description: 'REST APIs, streaming, auth patterns, file & process handling.' },
  { name: 'Express', category: 'Backend', level: 68, description: 'Middleware composition, routing, simple auth & validation.' },
  { name: 'MongoDB', category: 'Database', level: 65, description: 'Schema design, indexing basics, aggregation pipelines.' },
  { name: 'Git', category: 'Tools', level: 75, description: 'Branching strategies, rebasing, clean commits & collaboration.' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 82, description: 'Utility-first design, responsive layouts, design tokens.' },
  { name: 'shadcn/ui', category: 'Frontend', level: 70, description: 'Composable UI primitives, theming, variant patterns.' },
]

// Centralized accent styling for skill categories (color dot + meter gradient)
export const SKILL_CATEGORY_ACCENTS: Record<string, { color: string; meter: string }> = {
  // Use a concrete blue for language to avoid nested hsl() issues with dynamic accent backgrounds
  language: { color: '#3B82F6', meter: 'bg-gradient-to-r from-blue-400/70 to-blue-500' },
  frontend: { color: '#6366F1', meter: 'bg-gradient-to-r from-indigo-400/70 to-indigo-500' },
  backend: { color: '#06B6D4', meter: 'bg-gradient-to-r from-cyan-400/70 to-cyan-500' },
  database: { color: '#F59E0B', meter: 'bg-gradient-to-r from-amber-400/70 to-amber-500' },
  tools: { color: '#8B5CF6', meter: 'bg-gradient-to-r from-violet-400/70 to-violet-500' },
  ai: { color: '#10B981', meter: 'bg-gradient-to-r from-emerald-400/70 to-emerald-500' },
  default: { color: '#64748B', meter: 'bg-gradient-to-r from-slate-400/60 to-slate-500' },
}

export const SOCIALS = {
  email: 'lovesinghal31@gmail.com', 
  linkedin: 'https://www.linkedin.com/in/love-singhal-65abb9333/',
  hashnode: 'https://hashnode.com/@lovesinghal',
  github: 'https://github.com/lovesinghal31',
}

// --- Home Page Content ---

export const HERO_MOSAIC: HeroMosaicItem[] = [
  { title: 'AI Flow Experiments', icon: 'sparkles', span: 'col-span-2', body: 'Prototyping ways AI augments rather than replaces user intent.', meta: ['LLMs', 'UX', 'RAG'] },
  { title: 'Design Systems', icon: 'layers', body: 'Composable primitives & tokens.', meta: ['Tokens', 'Accessibility'] },
  { title: 'Automation', icon: 'cpu', body: 'Scripting repetitive dev tasks.', meta: ['CLI', 'Scripts'] },
  { title: 'Clarity First', icon: 'focus', body: 'Readable abstractions & intent mapping.', meta: ['Refactor'] },
  { title: 'Rapid Iteration', icon: 'bolt', body: 'Short feedback loops & instrumentation.', meta: ['Observability'] },
  { title: 'Perf Profiling', icon: 'gauge', body: 'Tracing and measuring critical paths.', meta: ['Metrics'] },
  { title: 'Edge Delivery', icon: 'globe', body: 'Latency-focused deployment strategies.', meta: ['CDN', 'Regions'] },
  { title: 'Type Safety', icon: 'braces', body: 'Modeling domain intent in TypeScript.', meta: ['TS'] },
]

export const ENGINEERING_PILLARS: Pillar[] = [
  { title: 'Reliability', body: 'Designing predictable flows, defensive boundaries, and graceful degradation.' },
  { title: 'Performance', body: 'Keeping payloads lean, rendering paths intentional, and measuring instead of guessing.' },
  { title: 'Accessibility', body: 'Inclusive semantics, keyboard reachability, contrast, motion preference awareness.' },
  { title: 'Composability', body: 'Primitive-first mindset: small interoperable building blocks over monoliths.' },
  { title: 'Automation', body: 'Eliminating toil with scripts & workflow engines to free cognitive budget.' },
  { title: 'Clarity', body: 'Readable naming, explicit data contracts, consistent UI/UX language.' },
]

export const LEARNING_TIMELINE: TimelinePeriod[] = [
  { period: 'Now', items: ['Refining AI UX patterns', 'Exploring retrieval workflows', 'Improving component ergonomics'] },
  { period: '2024', items: ['Shipped multi-project React apps', 'Deepened TypeScript modeling', 'Adopted App Router patterns'] },
  { period: '2023', items: ['Strengthened DSA foundations', 'Built first full-stack MERN prototypes'] },
]

export const CURRENT_FOCUS: FocusItem[] = [
  { title: 'AI-Driven UX', body: 'Integrating model-backed suggestions & classification to streamline flows without overwhelming users.' },
  { title: 'Automation & Tooling', body: 'Building internal primitives & scripts that reduce repetition and accelerate iteration loops.' },
  { title: 'Performance & Clarity', body: 'Refining data boundaries, reducing re-renders, and keeping abstractions sharp.' }
]

// --- About Page Content ---

export const ABOUT_VALUE_CARDS: ValueCard[] = [
  { title: 'AI & ML Exploration', icon: 'brain', desc: 'Experimenting with model-assisted UX patterns.' },
  { title: 'Full‑Stack Projects', icon: 'code', desc: 'Designing end-to-end flows & scalable data models.' },
  { title: 'Rapid Iteration', icon: 'rocket', desc: 'Balancing speed with clarity & maintainability.' },
  { title: 'Craft & Curiosity', icon: 'sparkles', desc: 'Constantly refining abstractions & tooling.' },
]

export const ABOUT_INTERESTS: InterestItem[] = [
  { title: 'AI‑Assisted Workflows', body: 'Designing flows where AI reduces friction instead of replacing user intent—classification, summarization, and guided input.' },
  { title: 'Developer Tooling', body: 'Improving iteration loops: codegen scaffolds, content schemas, and small primitives that compound over time.' },
  { title: 'System Clarity', body: 'Emphasis on predictable data boundaries, small components, and refactor-friendly abstraction layering.' },
  { title: 'Product Thinking', body: 'Shaping technical decisions around user value, maintainability, and long-term adaptability.' },
]

// --- Contact Page Content ---

export const CONTACT_HIGHLIGHTS: ContactHighlight[] = [
  { title: 'Response Window', icon: 'clock', body: 'I usually reply within 24–48 hours. Weekends may take a little longer.' },
  { title: 'Preferred Topics', icon: 'message', body: 'AI side projects, open-source contributions, performance optimizations, user-centric product design, or internship opportunities.' },
  { title: 'Currently Exploring', icon: 'sparkles', body: 'Agentic AI workflows, better DX tooling in React/Next.js, and sustainable UI patterns.' },
]

export const CONTACT_SOCIALS: ContactSocial[] = [
  { key: 'email', label: 'Email', hrefKey: 'email', icon: 'mail' },
  { key: 'linkedin', label: 'LinkedIn', hrefKey: 'linkedin', icon: 'linkedin' },
  { key: 'hashnode', label: 'Hashnode', hrefKey: 'hashnode', icon: 'pen' },
  { key: 'github', label: 'GitHub', hrefKey: 'github', icon: 'github' },
]
