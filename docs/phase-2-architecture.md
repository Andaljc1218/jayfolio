# Phase 2: Proposed Architecture & Tech Stack

Date: 2026-08-03
Status: Proposed — awaiting approval

---

## 1. Recommended Tech Stack

### Core Framework
**Next.js 15 (App Router)**
- Server Components by default for better performance
- Built-in routing, metadata API, and image optimization
- File-system based routing simplifies project detail pages
- Zero-config TypeScript support

### Language
**TypeScript**
- Type safety across components, props, and data
- Better IDE support and refactoring confidence
- Industry standard for modern React/Next.js projects

### Styling
**Tailwind CSS v4**
- Utility-first approach keeps CSS bundle small
- Design tokens via CSS variables for consistency
- Built-in responsive utilities
- No custom CSS files to manage
- Faster iteration than traditional CSS

**No shadcn/ui**
- Not needed. The portfolio uses minimal UI patterns.
- Adding a component library adds unnecessary complexity and bundle weight.
- Build only what you need.

### Motion
**Framer Motion**
- Only for: page transitions, staggered section reveals, hover elevation
- Not for flashy effects. Subtle fade + translate only.

### Icons
**Lucide React**
- Tree-shakeable, consistent stroke width
- No icon fonts or inline SVGs

### Content
**MDX for project pages**
- Markdown-like authoring for case study content
- Can embed React components if needed later
- Easier to maintain than hardcoded HTML

### Linting & Formatting
**ESLint + Prettier**
- Next.js includes ESLint config
- Prettier for consistent formatting
- Husky + lint-staged optional but recommended

### Deployment
**Vercel**
- Native Next.js support
- Automatic preview deployments
- Edge network for global performance

---

## 2. Project Architecture

### Directory Structure
```
app/
├── layout.tsx          # Root layout with nav + footer
├── page.tsx            # Home / hero
├── about/page.tsx      # About section
├── projects/
│   ├── page.tsx        # Projects listing
│   └── [slug]/page.tsx # Project detail pages
├── experience/page.tsx # Experience timeline
├── education/page.tsx  # Education timeline
├── contact/page.tsx    # Contact info
├── resume/page.tsx     # Resume download/view
├── not-found.tsx       # 404 page
└── globals.css         # Global styles + Tailwind

components/
├── ui/                 # Reusable primitives (Button, Badge, Section, Container)
├── layout/             # Nav, Footer, BackToTop
├── sections/           # Hero, About, Projects, Experience, Education, Contact
├── project/            # ProjectCard, ProjectDetail, TechStack
└── motion/             # FadeIn, Stagger, PageTransition

content/
└── projects/           # MDX files for project case studies

lib/
├── constants.ts        # Site metadata, social links, nav items
├── utils.ts            # Helper functions
└── data.ts             # Static data (experience, education, skills)

public/
├── images/             # Profile, project screenshots
└── resume.pdf          # Downloadable resume
```

### Key Architectural Decisions

**1. Static-first with optional ISR**
- All content is static except project MDX which can use ISR (`generateStaticParams`)
- No database needed. Content lives in MDX files.

**2. No external API dependencies**
- Contact form can use a server action with email service (e.g., Resend) or be removed
- No client-side state management (no Redux, Zustand)

**3. Typography-driven design**
- No card containers. Sections use max-width + whitespace.
- Hierarchy via font size, weight, and color (monochrome scale)

**4. Monochrome color system**
- CSS variables for gray scale only
- No gradients, no neon, no glassmorphism
- Accent color only inside technology logos/screenshots

---

## 3. Design System Tokens (Draft)

### Colors
```css
--gray-50:  #fafafa
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-300: #d4d4d4
--gray-400: #a3a3a3
--gray-500: #737373
--gray-600: #525252
--gray-700: #404040
--gray-800: #262626
--gray-900: #171717
--gray-950: #0a0a0a
```

### Typography
- **Headings:** System font stack (SF Pro, Inter, Segoe UI)
- **Body:** System font stack, 16px base, 1.6 line-height
- **Mono:** System mono for code/tech stack

### Spacing Scale
- Base unit: 4px
- Sections: py-24 to py-32 (96px–128px vertical padding)
- Container max-width: 768px (readable line length)
- Large desktop margins: 8rem–12rem horizontal

---

## 4. Page Blueprint

### Home
- Hero: Name, title, one-line description, scroll indicator
- Selected Work: 3–4 project cards
- Contact CTA

### About
- Short bio paragraph
- Optional profile photo
- Links to resume, GitHub

### Projects
- Grid or list of 3–4 featured projects
- Each card: thumbnail, name, description, tech stack, year, status, links

### Project Detail
- Case study layout: Overview, Problem, Role, Objectives, Features, Tech Stack, Process, Challenges, Lessons Learned, Screenshots, Links

### Experience
- Resume-style timeline
- Date | Position | Company | Location | Responsibilities

### Education
- Same timeline format
- Degree | School | Years | Coursework | Awards

### Contact
- Email, GitHub, LinkedIn, Resume links
- No form (or optional simple form with server action)

### 404
- Minimal: "Page not found" + home link

---

## 5. Build Order

1. Initialize Next.js + TypeScript + Tailwind
2. Set up design tokens and globals.css
3. Build layout: Nav, Footer, Container
4. Build Home page (Hero + Selected Work)
5. Build About page
6. Build Projects listing + Project detail pages (MDX)
7. Build Experience page
8. Build Education page
9. Build Contact page
10. Add motion: page transitions, scroll reveals
11. SEO, metadata, Open Graph, sitemap, robots.txt
12. Performance pass (images, fonts, bundle size)
13. Accessibility pass (WCAG audit)
14. Deploy to Vercel

---

## 6. Alternatives Considered

| Decision | Alternative | Reason for rejection |
|----------|-------------|----------------------|
| Next.js | Astro | Astro is great but Next.js has stronger ecosystem, better MDX support, and more familiar for future full-stack additions |
| Tailwind | Plain CSS | Tailwind enforces consistency and reduces custom CSS debt |
| Framer Motion | CSS animations | Framer Motion provides better scroll-triggered animations and page transitions with less code |
| MDX | Hardcoded TSX | MDX separates content from code, easier to update projects |
| No shadcn/ui | shadcn/ui | Unnecessary complexity for minimal UI needs |

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Content is not ready (missing project details) | Start with placeholder content; iterate |
| MDX learning curve | Use simple Markdown first; add MDX features later |
| Vercel deployment configuration | Use Next.js default; minimal config needed |
| Performance targets (Lighthouse 95+) | Audit early and often; optimize images and fonts |

---

## 8. Approval Needed

1. Confirm project list (4 projects to feature)
2. Confirm no contact form (or decide on form approach)
3. Approve tech stack
4. Approve build order
5. Approve design direction
