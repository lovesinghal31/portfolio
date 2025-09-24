## Love Singhal – Portfolio

A modern, animated, type‑safe personal portfolio built with the Next.js 15 App Router and a fully centralized content layer.

### 🧰 Tech Stack
- **Next.js 15** (App Router, async/streaming ready)
- **TypeScript** (strict content typing)
- **Tailwind CSS 4** (design tokens + dark mode variables)
- **Lightweight shadcn-style primitives** (no heavy registry bloat)
- **Framer Motion v12 / motion.dev** for gesture & scroll animations
- **next-themes** for dark/light/system theme
- **Lucide Icons** resolved through a single type‑safe icon resolver

---
## 🚀 Features
| Area | Highlights |
|------|------------|
| Home | Hero mosaic grid with contextual icons, dynamic metrics (auto counts projects, skills, categories), engineering pillars, animated learning timeline, current focus section |
| About | Value cards, interests grid, education & experience, technologies spotlight with icons |
| Projects | Filterable & searchable list, modal with stack badges, action links, contextual icons |
| Skills | Structured skill objects (category, level, description) + animated proficiency meters, filtering & search |
| Timeline | Alternating layout, central spine, connector glow, animated entry, accessible semantic list |
| Contact | Highlight cards + social tiles with icon resolver, smart external targeting |
| Theming | Persistent system / light / dark switching; uses CSS variables for seamless transitions |
| Content Layer | All data (site meta, skills, projects, timeline, etc.) centralized & typed in one file (`data.ts`) |
| Icon System | Single `getIcon(name)` resolver eliminates scattered icon maps |
| Accessibility | Focus states, semantic lists (timeline), reduced motion friendly patterns (extendable) |
| Performance | Minimal dependencies, tree‑shaken icons, server components where possible |

---
## 📦 Quick Start
```bash
npm install
npm run dev
```
Visit: http://localhost:3000

Production build:
```bash
npm run build
npm start
```

---
## 🗂 Content Architecture (`src/lib/data.ts`)
All page + section content is defined in one place and strongly typed. Key exports:

- `SITE` – Name, tagline, description, canonical URL, OG image path
- `EDUCATION`, `EXPERIENCE` – Chronological arrays
- `PROJECTS` – `{ title, description, tech: string[], links, tags? }`
- `SKILLS` – `{ name, category, level (0–100), description }`
- `HERO_MOSAIC` – Iconic hero grid items (label, description, icon, optional meta badges)
- `ENGINEERING_PILLARS` – Core value statements with icons
- `LEARNING_TIMELINE` – Alternating timeline periods `{ year/label, title, body, side(auto) }`
- `CURRENT_FOCUS` – Present focus areas (badge style)
- `ABOUT_VALUE_CARDS` / `ABOUT_INTERESTS` – About page structured sections
- `CONTACT_HIGHLIGHTS` / `CONTACT_SOCIALS` – Cards & social tiles
- `SOCIALS` – Central source for outbound links/email
- `IconName` union + `getIcon()` – Typed icon resolution

### Adding a Skill
```ts
SKILLS.push({
	name: 'Rust',
	category: 'Systems',
	level: 55,
	description: 'Exploring ownership & performance patterns.'
})
```

### Adding a Project
```ts
PROJECTS.push({
	title: 'Dev Dashboard',
	description: 'Unified metrics & deployment insights.',
	tech: ['Next.js', 'tRPC', 'Postgres'],
	links: [{ label: 'GitHub', url: 'https://github.com/you/dev-dashboard' }],
	tags: ['internal', 'observability']
})
```

### Using an Icon
```tsx
import { getIcon } from '@/lib/data'

export function Example() {
	return <div>{getIcon('code', 'size-5 text-primary')}</div>
}
```

---
## 🎨 Theming
Powered by `next-themes` + CSS variables. Toggle stored in `localStorage`; falls back to system preference. Extend in `globals.css` via semantic tokens (`--bg`, `--foreground`, etc.).

---
## ✨ Animations
Framer Motion v12 used for:
- Section fade/slide entrances
- Metric counters (increment on view)
- Timeline card stagger & vertical line glow
- Hover micro‑interactions (cards, icons)

All animation wrappers are optional—remove or gate them via a future `prefers-reduced-motion` hook if needed.

---
## 🔧 Development Scripts
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Run built app |
| `npm run lint` | (If configured) run ESLint |

---
## 🔍 SEO
Metadata composed in `app/layout.tsx` using `SITE`. After deployment:
1. Update `SITE.url` with the live domain.
2. Provide a real `og` image (place in `public/` & update path).
3. (Optional) Add sitemap & robots files.

---
## ☁️ Deployment (Vercel)
1. Push to GitHub.
2. Import repo into Vercel.
3. Ensure build command (`next build`) is auto‑detected.
4. Set any env vars (none required by default).
5. Post‑deploy: update `SITE.url`.

---
## 🧩 Extending / Customization
| Goal | Guidance |
|------|----------|
| Add a new content section | Create a typed interface in `data.ts`, export an array, import in page component |
| Swap icons | Add to `ICON_COMPONENTS` map + extend `IconName` union |
| Add MDX blog | Create `app/blog/` route & integrate `@next/mdx`; reuse layout shell |
| Add analytics | Drop in Vercel Analytics / Plausible in `layout.tsx` |
| Add contact form | Use an edge function / Formspree; add client component in contact page |

---
## 🛡 Accessibility (A11y)
Current considerations:
- Semantic markup for lists & timeline
- Focusable interactive tiles & cards
- Color contrast via Tailwind variables
Potential future improvements:
- Reduced motion hook
- ARIA labels for icon‑only buttons

---
## ⚙️ Architecture Overview
```
app/ (Next.js app router)
	layout.tsx   – Root metadata + providers (theme)
	page.tsx     – Home (hero mosaic, metrics, pillars, timeline, focus)
	about/       – About page (value cards, interests, experience, education)
	projects/    – Projects + modal interactions
	skills/      – SkillsClient (filter + meters)
	contact/     – Contact highlights + socials
lib/
	data.ts      – Central typed content + icon resolver
	utils.ts     – Assorted helpers
public/        – Static assets (svg, favicon, resume placeholder)
```

---
## 🗺 Roadmap
- [ ] Visual polish pass on skill cards (tilt, gradient depth, category accents)
- [ ] Add reduced motion variants
- [ ] Add MDX-powered blog (optional)
- [ ] Generate dynamic Open Graph images
- [ ] Light performance audit (route-level code splitting metrics)

Completed highlights: centralized data layer, icon resolver, animated timeline, hero mosaic expansion, dynamic metrics, structured skills with meters.

---
## 📝 License
Personal & learning use permitted. Attribution appreciated but not required. Not intended as a commercial template marketplace item.

---
Feel free to adapt, fork, and evolve this as your portfolio grows.
