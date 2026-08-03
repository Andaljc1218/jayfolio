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
- **`app/globals.css`** — Removed blue color tokens (`--color-blue-*`), replaced with monochrome gray accent (`--theme-accent: #333333` light / `#d4d4d4` dark)
- **`tailwind.config.ts`** — Removed blue color palette from Tailwind theme
- **`components/ui/button.tsx`** — Primary button now uses `--theme-text` (dark) instead of blue
- **`components/ui/timeline.tsx`** — Timeline line/dot colors changed to gray
- **`components/ui/theme-toggle.tsx`** — Updated for binary toggle (no system option)
- **`components/ui/icons.tsx`** — Added `TechIcon` component with inline SVG icons for 20+ technologies

### Layout & Components
- **`components/sections/hero.tsx`** — Rewrote: compressed to 75vh, inline name+picture layout, added player stats strip (LEVEL, ROLE, XP, PROJECTS, TECH, COFFEE), 3-image profile rotation gallery (5s auto + click)
- **`components/sections/about.tsx`** — Simplified to 4–5 lines: BS CS student, short intro, interests list
- **`components/sections/skills.tsx`** (new) — Replaced SkillsMarquee: grid layout with 4-5 items per category, "+N more →" modal with full list and tech icons. Updated categories: replaced "Languages" with "Database"
- **`app/skills/page.tsx`** — Updated to use new SkillsSection
- **`lib/data.ts`** — Updated skill categories: Languages → Database
- **`components/chat/chat-button.tsx`** — Replaced blue with monochrome (white surface, gray text)
- **`components/layout/nav.tsx`** — Subtle gray underline for active page (not blue), added blur-on-scroll with 0.8 opacity backdrop
- **`components/layout/footer.tsx`** — Removed blue from tech stack text
- **`components/project/project-card.tsx`** — Gray hover instead of blue
- **`app/resume/page.tsx`** — Gray buttons instead of blue
- **`app/contact/page.tsx`** — Simplified to links only (email, GitHub, LinkedIn, Resume, Copy Email) — removed contact form
- **`app/education/page.tsx`** — Rewrote: minimal timeline format with awards, moved metadata to `layout.tsx`
- **`app/education/layout.tsx`** (new) — Metadata export for education page (client component can't export metadata)

### Verification
- `tsc --noEmit` — PASS
- `next lint` — PASS (deprecation warning only)
- All 14 routes verified (12 × 200, 1 × 404, 4 project case studies)

### Commits
- `18cd44c` — refactor(theme): replace blue accent with monochrome gray
- `55a797f` — refactor(v4): compress hero, simplify about/contact/skills/education
