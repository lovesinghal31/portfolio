// Central content configuration for the portfolio.
// Edit these arrays/objects to update site content.
import {
  Brain,
  Code2,
  Rocket,
  Sparkles,
  Cpu,
  Workflow,
  Activity,
  Star,
  Github,
  Mail,
  Linkedin,
  PenTool,
  Clock,
  MessageSquareText,
} from 'lucide-react';
import React from 'react';

// --------------- Type Definitions ---------------
export type IconName =
  | 'sparkles'
  | 'layers'
  | 'cpu'
  | 'focus'
  | 'bolt'
  | 'gauge'
  | 'globe'
  | 'braces'
  | 'brain'
  | 'code'
  | 'rocket'
  | 'star'
  | 'github'
  | 'mail'
  | 'linkedin'
  | 'pen'
  | 'clock'
  | 'message';

export interface HeroMosaicItem {
  title: string;
  icon?: IconName;
  span?: string;
  body?: string;
  meta?: string[];
}
export interface Pillar {
  title: string;
  body: string;
}
export interface TimelinePeriod {
  period: string;
  items: string[];
}
export interface FocusItem {
  title: string;
  body: string;
}
export interface ValueCard {
  title: string;
  icon: IconName;
  desc: string;
}
export interface InterestItem {
  title: string;
  body: string;
}
export interface ContactHighlight {
  title: string;
  icon: IconName;
  body: string;
}
export type SocialKey = 'email' | 'linkedin' | 'hashnode' | 'github';
export interface ContactSocial {
  key: SocialKey;
  label: string;
  hrefKey: SocialKey;
  icon: IconName;
}

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
const ICON_COMPONENTS: Record<IconName, IconComponent> = {
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
};

export function getIcon(
  name: IconName,
  className = 'size-3 text-primary'
): React.ReactElement {
  const Comp: IconComponent = ICON_COMPONENTS[name] ?? Sparkles;
  return React.createElement(Comp, { className });
}

export const SITE = {
  name: 'Love Singhal',
  tagline: 'Backend & Full-Stack Developer',
  description:
    'Portfolio of Love Singhal – Backend & Full-Stack Developer passionate about scalable systems, real-time architectures, and secure applications.',
  url: 'https://lovesinghal.me',
  ogImage: '/og.png',
};

export const EDUCATION = [
  {
    school: 'Institute of Engineering & Technology, DAVV, Indore, India',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2024 – 2028',
    details: 'GPA: 7.82',
  },
];

export const EXPERIENCE = [
  {
    role: 'Independent Software Developer — Backend & Full-Stack',
    company: 'Remote',
    period: '2024 – Present',
    details:
      'Developed backend-focused systems emphasizing authentication flows, API design, and data integrity. Executed reusable infrastructure for role-based access control, real-time messaging, and secure media uploads. Designed and maintained relational and NoSQL schemas with validation and query optimization.',
  },
];

export const PROJECTS = [
  {
    title: 'Real-time Chat System',
    description: 'Real-time messaging backend with event-driven architecture.',
    tech: [
      'Next.js',
      'TypeScript',
      'Redis',
      'PostgreSQL',
      'Pusher',
      'NextAuth.js',
    ],
    link: 'https://github.com/lovesinghal31',
    repo: 'https://github.com/lovesinghal31',
    longDescription:
      'Built a real-time messaging backend using an event-driven architecture and Redis caching. Enforced secure access through OAuth-based authentication and role-based authorization.',
  },
  {
    title: 'Jansunwai — Civic Grievance Platform',
    description:
      'Backend-centric grievance redressal system with structured workflows.',
    tech: ['Express.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    link: 'https://github.com/lovesinghal31',
    repo: 'https://github.com/lovesinghal31',
    longDescription:
      'Developed a backend-centric grievance redressal system with structured workflows and normalized PostgreSQL schemas using Prisma ORM.',
  },
  {
    title: 'Media Upload & Processing Platform',
    description:
      'Direct-to-cloud media upload pipeline with secure validation.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Zod'],
    link: 'https://github.com/lovesinghal31',
    repo: 'https://github.com/lovesinghal31',
    longDescription:
      'Applied a secure direct-to-cloud media upload pipeline with JWT-protected metadata APIs and strict schema validation.',
  },
  {
    title: 'Thryve — Mental Health Platform',
    description:
      'Backend modules for authentication and appointment workflows.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://github.com/lovesinghal31',
    repo: 'https://github.com/lovesinghal31',
    longDescription:
      'Contributed backend modules for authentication, screening data, and appointment workflows while enforcing role-based access control.',
  },
];

export const SKILLS = [
  {
    name: 'TypeScript',
    category: 'Language',
    level: 90,
    description: 'Strong typing, interfaces, generics, and advanced types.',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    level: 90,
    description: 'ES6+, async/await, closures, and functional patterns.',
  },
  {
    name: 'Python',
    category: 'Language',
    level: 80,
    description: 'Scripting, automation, and backend development.',
  },
  {
    name: 'C++',
    category: 'Language',
    level: 75,
    description: 'DSA, memory management, and system programming.',
  },
  {
    name: 'SQL',
    category: 'Language',
    level: 85,
    description: 'Complex queries, joins, and schema design.',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 85,
    description: 'Event loop, streams, and scalable server architecture.',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 85,
    description: 'RESTful APIs, middleware, and routing.',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 80,
    description: 'Relational modeling, indexing, and optimization.',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 80,
    description: 'NoSQL schema design and aggregation pipelines.',
  },
  {
    name: 'Redis',
    category: 'Database',
    level: 75,
    description: 'Caching, Pub/Sub, and real-time data management.',
  },
  {
    name: 'Docker',
    category: 'Tools',
    level: 70,
    description: 'Containerization, multi-stage builds, and compose.',
  },
  {
    name: 'Git',
    category: 'Tools',
    level: 85,
    description: 'Version control, branching strategies, and collaboration.',
  },
  {
    name: 'Prisma',
    category: 'Tools',
    level: 80,
    description: 'Type-safe ORM, schema migration, and relations.',
  },
  {
    name: 'Zod',
    category: 'Tools',
    level: 80,
    description: 'Runtime validation and schema inference.',
  },
];

// Centralized accent styling for skill categories (color dot + meter gradient)
export const SKILL_CATEGORY_ACCENTS: Record<
  string,
  { color: string; meter: string }
> = {
  // Use a concrete blue for language to avoid nested hsl() issues with dynamic accent backgrounds
  language: {
    color: '#3B82F6',
    meter: 'bg-gradient-to-r from-blue-400/70 to-blue-500',
  },
  frontend: {
    color: '#6366F1',
    meter: 'bg-gradient-to-r from-indigo-400/70 to-indigo-500',
  },
  backend: {
    color: '#06B6D4',
    meter: 'bg-gradient-to-r from-cyan-400/70 to-cyan-500',
  },
  database: {
    color: '#F59E0B',
    meter: 'bg-gradient-to-r from-amber-400/70 to-amber-500',
  },
  tools: {
    color: '#8B5CF6',
    meter: 'bg-gradient-to-r from-violet-400/70 to-violet-500',
  },
  ai: {
    color: '#10B981',
    meter: 'bg-gradient-to-r from-emerald-400/70 to-emerald-500',
  },
  default: {
    color: '#64748B',
    meter: 'bg-gradient-to-r from-slate-400/60 to-slate-500',
  },
};

export const SOCIALS = {
  email: 'lovesinghal31@gmail.com',
  linkedin: 'https://linkedin.com/in/lovesinghal31',
  hashnode: 'https://hashnode.com/@lovesinghal',
  github: 'https://github.com/lovesinghal31',
};

// --- Home Page Content ---

export const HERO_MOSAIC: HeroMosaicItem[] = [
  {
    title: 'Backend Systems',
    icon: 'cpu',
    span: 'col-span-2',
    body: 'Architecting scalable, event-driven backend infrastructures.',
    meta: ['Node.js', 'Redis', 'Microservices'],
  },
  {
    title: 'Real-time Ops',
    icon: 'bolt',
    body: 'WebSockets & Pub/Sub for instant data sync.',
    meta: ['Socket.io', 'Pusher'],
  },
  {
    title: 'Data Modeling',
    icon: 'layers',
    body: 'Designing efficient relational & NoSQL schemas.',
    meta: ['SQL', 'MongoDB'],
  },
  {
    title: 'Security First',
    icon: 'focus',
    body: 'Robust auth flows & role-based access control.',
    meta: ['OAuth', 'JWT'],
  },
  {
    title: 'DevOps',
    icon: 'rocket',
    body: 'Containerization & CI/CD workflows.',
    meta: ['Docker', 'GitHub Actions'],
  },
  {
    title: 'API Design',
    icon: 'braces',
    body: 'Clean, type-safe, and documented APIs.',
    meta: ['REST', 'GraphQL'],
  },
  {
    title: 'Open Source',
    icon: 'github',
    body: 'Contributing to and maintaining modular codebases.',
    meta: ['OSS', 'Community'],
  },
];

export const ENGINEERING_PILLARS: Pillar[] = [
  {
    title: 'Reliability',
    body: 'Designing predictable flows, defensive boundaries, and graceful degradation.',
  },
  {
    title: 'Performance',
    body: 'Keeping payloads lean, rendering paths intentional, and measuring instead of guessing.',
  },
  {
    title: 'Accessibility',
    body: 'Inclusive semantics, keyboard reachability, contrast, motion preference awareness.',
  },
  {
    title: 'Composability',
    body: 'Primitive-first mindset: small interoperable building blocks over monoliths.',
  },
  {
    title: 'Automation',
    body: 'Eliminating toil with scripts & workflow engines to free cognitive budget.',
  },
  {
    title: 'Clarity',
    body: 'Readable naming, explicit data contracts, consistent UI/UX language.',
  },
];

export const LEARNING_TIMELINE: TimelinePeriod[] = [
  {
    period: 'Now',
    items: [
      'Refining AI UX patterns',
      'Exploring retrieval workflows',
      'Improving component ergonomics',
    ],
  },
  {
    period: '2024',
    items: [
      'Shipped multi-project React apps',
      'Deepened TypeScript modeling',
      'Adopted App Router patterns',
    ],
  },
  {
    period: '2023',
    items: [
      'Strengthened DSA foundations',
      'Built first full-stack MERN prototypes',
    ],
  },
];

export const CURRENT_FOCUS: FocusItem[] = [
  {
    title: 'AI-Driven UX',
    body: 'Integrating model-backed suggestions & classification to streamline flows without overwhelming users.',
  },
  {
    title: 'Automation & Tooling',
    body: 'Building internal primitives & scripts that reduce repetition and accelerate iteration loops.',
  },
  {
    title: 'Performance & Clarity',
    body: 'Refining data boundaries, reducing re-renders, and keeping abstractions sharp.',
  },
];

// --- About Page Content ---

export const ABOUT_VALUE_CARDS: ValueCard[] = [
  {
    title: 'AI & ML Exploration',
    icon: 'brain',
    desc: 'Experimenting with model-assisted UX patterns.',
  },
  {
    title: 'Full‑Stack Projects',
    icon: 'code',
    desc: 'Designing end-to-end flows & scalable data models.',
  },
  {
    title: 'Rapid Iteration',
    icon: 'rocket',
    desc: 'Balancing speed with clarity & maintainability.',
  },
  {
    title: 'Craft & Curiosity',
    icon: 'sparkles',
    desc: 'Constantly refining abstractions & tooling.',
  },
];

export const ABOUT_INTERESTS: InterestItem[] = [
  {
    title: 'Open Source Readiness',
    body: 'Comfortable navigating large codebases and understanding existing architecture through documentation and source code.',
  },
  {
    title: 'Modular Architecture',
    body: 'Experienced in writing modular, maintainable code with clear separation of concerns and defensive validation.',
  },
  {
    title: 'Asynchronous Collaboration',
    body: 'Familiar with asynchronous collaboration via issues, pull requests, and technical discussions.',
  },
  {
    title: 'System Design',
    body: 'Passionate about designing scalable systems, optimizing database queries, and ensuring data integrity.',
  },
];

// --- Contact Page Content ---

export const CONTACT_HIGHLIGHTS: ContactHighlight[] = [
  {
    title: 'Response Window',
    icon: 'clock',
    body: 'I usually reply within 24–48 hours. Weekends may take a little longer.',
  },
  {
    title: 'Preferred Topics',
    icon: 'message',
    body: 'AI side projects, open-source contributions, performance optimizations, user-centric product design, or internship opportunities.',
  },
  {
    title: 'Currently Exploring',
    icon: 'sparkles',
    body: 'Agentic AI workflows, better DX tooling in React/Next.js, and sustainable UI patterns.',
  },
];

export const CONTACT_SOCIALS: ContactSocial[] = [
  { key: 'email', label: 'Email', hrefKey: 'email', icon: 'mail' },
  { key: 'linkedin', label: 'LinkedIn', hrefKey: 'linkedin', icon: 'linkedin' },
  { key: 'hashnode', label: 'Hashnode', hrefKey: 'hashnode', icon: 'pen' },
  { key: 'github', label: 'GitHub', hrefKey: 'github', icon: 'github' },
];
