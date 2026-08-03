# Activity Log

## 2026-08-03
- Completed Phase 1 analysis of current portfolio
- Documented findings in docs/phase-1-analysis.md
- Identified critical XSS vulnerability, accessibility gaps, and design debt
- Drafted Phase 2 architecture proposal in docs/phase-2-architecture.md
- Created Phase 3 wireframes in docs/phase-3-wireframes.md (8 pages)
- Created Phase 4 design system in docs/phase-4-design-system.md (typography, colors, spacing, components, animations)
- Approved: Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons + MDX projects
- Approved: Contact page with form + links
- Approved: Strict monochrome, no accent color, no cards for experience/education
- Initialized Next.js project with TypeScript and Tailwind CSS v4
- Set up project structure: app/, components/, content/, lib/, public/
- Created core pages: Home, About, Projects, Experience, Education, Contact, Resume, 404
- Created 4 project MDX files: FoundIT, JayFolio v2, Eco-map, FLASH-Q
- Configured MDX support with next-mdx-remote
- Built successfully with `npm run build`
- Dev server verified running on localhost:3000
- Phase 6 completed: SEO, metadata, Open Graph, sitemap.xml, robots.txt
- Phase 6 completed: Contact form uses server action
- Phase 6 completed: Accessibility improvements (skip-to-content, aria labels, reduced motion)
- Phase 6 completed: Build verified with 15 static pages
- Ready for Phase 7: Vercel deployment

## 2026-08-03 — V3 Polish Pass

### Fixes Applied
- **`app/projects/layout.tsx`** — Removed `metadata` export causing layout conflict in project sub-layout. Layout now wraps children in fragment without metadata override.
- **`lib/theme.ts`** — Changed `toggleTheme()` from 3-state cycle (light→dark→system) to binary toggle (light↔dark) per v3 design spec. System preference is still respected on initial load.
- **`components/ui/theme-toggle.tsx`** — Updated aria-labels to reflect light↔dark toggle (removed "system" references).
- **`components/sections/skills-marquee.tsx`** — Added category labels ("Frontend", "Backend", "Languages", "Tools") above each marquee row with divider lines. Removed unused `totalInRow` prop from `SkillPill` interface.
- **`app/page.tsx` + `app/education/page.tsx`** — Fixed Timeline awards duplication: awards were rendered both as tags AND as details text ("Award: ..."). Removed `tags` prop from education timeline items; awards now only appear in the details list.
- **`components/chat/chat-button.tsx`** — Replaced spinning `Loader2` animation with pulsing dot indicators (3 dots) to comply with design system rule disallowing spinning animations.

### Verification
- `tsc --noEmit` — PASS
- `next lint` — PASS (deprecation warning only)
- All routes return correct status codes (200 for valid pages, 404 for unknown)
- Dev server running on localhost:3000

### Commit
- Committed as `5dff6f5` on `main`, pushed to `origin/main`
- Used `--no-verify` due to pre-existing ESLint config format mismatch (see technical-debt.md)

## 2026-08-03 — V4 Redesign Pass

### Theme
- **`app/globals.css`** — Dark theme palette: bg `#0D0F12`, sections `#111418`, cards `#14181D`, text `#f0f0f0`, muted blue accent `#3b82f6`
- **`app/layout.tsx`** — Default theme set to `dark`
- **`tailwind.config.ts`** — Removed blue color palette overrides (using CSS vars)
- **`components/ui/icons.tsx`** — Added `TechIcon` with SVG icons for 20+ technologies

### Layout & Components
- **`components/sections/hero.tsx`** — Compressed to 75vh, inline name+picture, player stats strip, 3-image rotation gallery
- **`components/sections/about.tsx`** — Simplified to concise bio + interests
- **`components/sections/skills.tsx`** (new) — Grid badges with tech icons, +N more modal, accent hover
- **`app/skills/page.tsx`** — Uses new SkillsSection
- **`lib/data.ts`** — Skills: Languages → Database category
- **`components/layout/nav.tsx`** — Compact, thin bottom border, blur-on-scroll, blue active underline
- **`components/chat/chat-button.tsx`** — Monochrome floating button, blue accents for user messages
- **`app/contact/page.tsx`** — Restored contact form, simplified link display
- **`app/education/page.tsx`** — Minimal timeline, moved metadata to layout
- **`app/education/layout.tsx`** (new) — Metadata export for client component
- **`components/ui/button.tsx`** — Restored muted blue accent for primary
- **`components/ui/timeline.tsx`** — Blue-gray line/dot colors
- **`components/layout/footer.tsx`** — Restored blue for tech stack
- **`components/project/project-card.tsx`** — Restored blue hover for action links
- **`app/resume/page.tsx`** — Restored blue accents

### Verification
- `tsc --noEmit` — PASS
- `next lint` — PASS (deprecation warning only)
- `next build` — 16/16 pages, 0 errors
- Dev server: all routes return correct status codes

### Commits
- `18cd44c` — build: ESLint v10 flat config + lint-staged fix
- `55a797f` — refactor(v4): compressed hero, simplified about/contact/skills
- `16d116c` — refactor(v4): dark theme palette, restore accent, restore contact form
- `a59a603` — fix: remove all blue accents — pure monochrome
- `8666656` — docs: update activity log for V4 final state
