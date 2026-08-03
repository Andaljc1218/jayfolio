# JayFolio V3 — Design Specification

## Color Tokens

### Dark Theme
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0A0A0A` | Page background |
| `--surface` | `#111111` | Cards, panels |
| `--surface-elevated` | `#1A1A1A` | Hover states, dropdowns |
| `--text-primary` | `#FFFFFF` | Headings, primary text |
| `--text-secondary` | `#A0A0A0` | Body text, descriptions |
| `--text-muted` | `#666666` | Meta text, timestamps |
| `--border` | `#222222` | Borders, dividers |
| `--accent` | `#3B82F6` | Links, CTAs, highlights |
| `--accent-hover` | `#60A5FA` | Hover state for accent |
| `--glow` | `rgba(59, 130, 246, 0.15)` | Subtle glow effects |

### Light Theme
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F6F6F4` | Page background |
| `--surface` | `#FFFFFF` | Cards, panels |
| `--surface-elevated` | `#FAFAF8` | Hover states, dropdowns |
| `--text-primary` | `#181818` | Headings, primary text |
| `--text-secondary` | `#525252` | Body text, descriptions |
| `--text-muted` | `#999999` | Meta text, timestamps |
| `--border` | `#E0E0DC` | Borders, dividers |
| `--accent` | `#2563EB` | Links, CTAs, highlights |
| `--accent-hover` | `#1D4ED8` | Hover state for accent |
| `--glow` | `rgba(37, 99, 235, 0.08)` | Subtle glow effects |

## Typography Scale

| Token | Desktop | Mobile | Weight | Line Height |
|-------|---------|--------|--------|-------------|
| `display-xl` | 72px | 48px | 700 | 1.05 |
| `display-lg` | 48px | 36px | 600 | 1.1 |
| `heading-xl` | 36px | 28px | 600 | 1.15 |
| `heading-lg` | 28px | 22px | 600 | 1.2 |
| `heading-md` | 22px | 18px | 500 | 1.25 |
| `body-lg` | 18px | 16px | 400 | 1.6 |
| `body` | 16px | 15px | 400 | 1.6 |
| `body-sm` | 14px | 13px | 400 | 1.5 |
| `caption` | 12px | 11px | 500 | 1.4 |
| `mono` | 13px | 12px | 400 | 1.5 |

Font family: `Inter` (headings) + `JetBrains Mono` (code/mono)

## Spacing System

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |
| `--space-4xl` | 96px |
| `--space-5xl` | 128px |

## Layout Tokens

| Token | Value |
|-------|-------|
| `--max-width-content` | 1200px |
| `--max-width-prose` | 720px |
| `--nav-height` | 64px |
| `--section-padding-y` | 120px |
| `--section-padding-x` | 48px |
| `--card-radius` | 16px |
| `--btn-radius` | 12px |
| `--transition-fast` | 150ms |
| `--transition-normal` | 300ms |
| `--transition-slow` | 500ms |

## Component Tree

```
RootLayout
├── ThemeProvider
│   ├── Nav
│   │   ├── Logo
│   │   ├── NavLinks
│   │   ├── ThemeToggle
│   │   └── MobileMenu
│   ├── Children (pages)
│   ├── Footer
│   └── ChatButton
│       └── ChatPanel
└── ThemeTransition (wraps theme changes)

Pages:
├── Home (Landing)
│   ├── HeroSection
│   │   ├── ProfileImage
│   │   ├── Headline
│   │   ├── Subtitle
│   │   ├── Description
│   │   ├── CTAButtonGroup
│   │   └── ScrollIndicator
│   └── SkillsMarquee
│
├── About
│   ├── AboutHero
│   ├── WhoIAm
│   ├── CurrentFocus
│   ├── Interests
│   └── Goals
│
├── Projects
│   ├── ProjectsHeader
│   └── ProjectGrid
│       └── ProjectCard[]
│           ├── ProjectImage
│           ├── ProjectTitle
│           ├── ProjectDescription
│           ├── ProjectMeta (year, status, role)
│           ├── TechStackPills
│           └── ProjectActions (Case Study, GitHub, Demo)
│
├── ProjectCaseStudy (projects/[slug])
│   ├── CaseStudyHero
│   ├── Overview
│   ├── Problem
│   ├── Solution
│   ├── KeyFeatures
│   ├── SystemArchitecture
│   ├── TechStackPills
│   ├── DevelopmentProcess
│   ├── Challenges
│   ├── LessonsLearned
│   ├── FutureImprovements
│   ├── Gallery
│   └── CaseStudyNav (prev/next)
│
├── Experience
│   ├── ExperienceHeader
│   └── Timeline
│       └── TimelineItem[]
│           ├── TimelineDate
│           ├── TimelineContent
│           │   ├── Title
│           │   ├── Company
│           │   ├── Location
│           │   └── Responsibilities[]
│
├── Education
│   ├── EducationHeader
│   └── Timeline (mirrors Experience)
│
├── Contact
│   ├── ContactHeader
│   ├── ContactInfo
│   ├── ContactForm
│   └── LargeCTA
│
└── Footer
    ├── Brand
    ├── SocialLinks
    └── Copyright
```

## Wireframes — Section by Section

### Hero Section (Desktop)
```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: Logo | About Projects Experience Education Contact  │
│                                    🌙 Theme Toggle]        │
│                                                             │
│  ┌──────────────────────┐  ┌────────────────────────────┐  │
│  │                        │  │                            │  │
│  │   [Profile Image]      │  │  Jaycee Andal              │  │
│  │   320x320, rounded     │  │  Computer Science Student  │  │
│  │   floating animation   │  │  Full Stack Developer      │  │
│  │   grayscale → color    │  │                            │  │
│  │   on hover             │  │  Building clean, scalable  │  │
│  │                        │  │  software that solves      │  │
│  │                        │  │  real-world problems.      │  │
│  │                        │  │                            │  │
│  │                        │  │  [View Projects] [Resume]  │  │
│  │                        │  │                            │  │
│  └────────────────────────┘  └────────────────────────────┘  │
│                                                             │
│         ↓ scroll indicator (animated bounce)                │
└─────────────────────────────────────────────────────────────┘
```

### Hero Section (Mobile)
```
┌─────────────────────────────────┐
│  [Hamburger Menu]  [🌙 Theme]  │
│                                 │
│     [Profile Image]             │
│     200x200, rounded            │
│     floating animation          │
│                                 │
│     Jaycee Andal                │
│     Computer Science Student    │
│     Full Stack Developer        │
│                                 │
│     Building clean, scalable... │
│                                 │
│  [View Projects] [Resume]       │
│                                 │
│       ↓ scroll indicator        │
└─────────────────────────────────┘
```

### About Section
```
┌─────────────────────────────────────────────────────────────┐
│  About Me                                                    │
│  ─────────────────────                                       │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────────┐ │
│  │  Who I Am           │  │  Current Focus               │ │
│  │                     │  │                              │ │
│  │  CS student at      │  │  Full-stack development      │ │
│  │  Batangas State     │  │  Backend systems, web        │ │
│  │  University         │  │  development, building       │ │
│  │  (2023–2027)        │  │  useful applications         │ │
│  │                     │  │                              │ │
│  └─────────────────────┘  └──────────────────────────────┘ │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────────┐ │
│  │  Interests          │  │  Goals                       │ │
│  │                     │  │                              │ │
│  │  Software engineering│  │  Become a software           │ │
│  │  Backend systems     │  │  engineer building scalable  │ │
│  │  Web development     │  │  digital products            │ │
│  │  Learning new tech   │  │                              │ │
│  │  Development tools   │  │                              │ │
│  └─────────────────────┘  └──────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Projects Grid (Desktop)
```
┌─────────────────────────────────────────────────────────────┐
│  Selected Work                                               │
│  ───────────────────                                        │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │  ┌─────────────────┐│  │  ┌─────────────────────────┐│  │
│  │  │  [Screenshot]    ││  │  │  [Screenshot]           ││  │
│  │  │  16:9 aspect     ││  │  │  16:9 aspect            ││  │
│  │  └─────────────────┘│  │  └─────────────────────────┘│  │
│  │  FoundIT            │  │  JayFolio v2                │  │
│  │  Job matching       │  │  Minimal typography-driven   │  │
│  │  platform for       │  │  portfolio                   │  │
│  │  students           │  │                              │  │
│  │                     │  │  2026 · Ongoing              │  │
│  │  [Case Study]       │  │  [Case Study]                │  │
│  │  [GitHub]           │  │  [GitHub]                    │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │  ┌─────────────────┐│  │  ┌─────────────────────────┐│  │
│  │  │  [Screenshot]    ││  │  │  [Screenshot]           ││  │
│  │  └─────────────────┘│  │  └─────────────────────────┘│  │
│  │  EcoMap             │  │  FLASH-Q                     │  │
│  │  Environmental      │  │  Console-based Java          │  │
│  │  waste management   │  │  flashcard quiz system       │  │
│  │                     │  │                              │  │
│  │  2024 · Completed   │  │  2024 · Completed            │  │
│  │  [Case Study]       │  │  [Case Study]                │  │
│  │  [GitHub]           │  │  [GitHub]                    │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Project Card Hover State
```
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐  │ ← Image scales 1.05
│  │                               │  │
│  │  [Screenshot]                 │  │   with ease-out
│  │                               │  │
│  └───────────────────────────────┘  │
│  Project Title                      │ ← Text shifts +2px
│  Description text...                │   y with stagger
│                                     │
│  2026 · Ongoing                     │ ← Meta fades slightly
│  [Case Study]  [GitHub]  [Demo]    │ ← Buttons glow blue
│                                     │   on hover
│  Border: accent color glow          │ ← 1px accent border
│  Shadow: elevated surface           │   appears
└─────────────────────────────────────┘
```

### Experience Timeline
```
┌─────────────────────────────────────────────────────────────┐
│  Experience                                                  │
│  ────────────────                                           │
│                                                             │
│  ──────────────── Timeline Line (vertical, left side)       │
│                                                             │
│  2026 – Present    ●  ──────────────────────────────────── │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Software Engineering Intern                           │ │
│  │  MindTech Synergy                                     │ │
│  │  Remote                                                │ │
│  │                                                        │ │
│  │  • Develop web applications with Laravel and PHP      │ │
│  │  • Maintain and optimize backend systems              │ │
│  │  • Collaborate using Git workflows                    │ │
│  │  • Implement new features and bug fixes               │ │
│  │  • Participate in the full software development       │ │
│  │    lifecycle                                          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                             │
│  [Previous experiences would appear above]                  │
└─────────────────────────────────────────────────────────────┘
```

### Skills Marquee
```
┌─────────────────────────────────────────────────────────────┐
│  Skills                                                     │
│  ─────────                                                  │
│                                                             │
│  Frontend                                                   │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐│
│  │React│ │Next │ │Type │ │Tail │ │Fram │ │HTML │ │CSS  ││
│  │     │ │     │ │Script│ │wind │ │eMot │ │     │ │     ││
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘│
│       ← scrolls left →  (alternates direction each row)    │
│                                                             │
│  Backend                                                   │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐│
│  │Lara │ │PHP  │ │Node │ │Express│ │Supa │ │Post │ │MySQL││
│  │del  │ │     │ │.js  │ │       │ │abase│ │greSQL│ │     ││
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘│
│       → scrolls right ←  (pauses on hover)                 │
│                                                             │
│  Languages                                                  │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐│
│  │Java│ │PHP  │ │Type │ │Java│ │SQL  │ │HTML │ │CSS  ││
│  │    │ │     │ │Script│ │Script│ │    │ │     │ │     ││
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘│
│       ← scrolls left →                                     │
│                                                             │
│  Tools                                                      │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐│
│  │Git │ │Gith │ │VS   │ │Dock │ │Post │ │Figm │ │Verc ││
│  │    │ │ub   │ │Code │ │er   │ │man  │ │a    │ │el   ││
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘│
│       → scrolls right ←                                    │
└─────────────────────────────────────────────────────────────┘
```

### Contact Section
```
┌─────────────────────────────────────────────────────────────┐
│  Get in Touch                                                │
│  ────────────────                                           │
│                                                             │
│  ┌─────────────────────────┐  ┌──────────────────────────┐ │
│  │  Let's Build Something  │  │  [Name]                  │ │
│  │  Together               │  │  [Email]                 │ │
│  │                         │  │  [Message]                │ │
│  │  I'm always open to     │  │  [Send Message]          │ │
│  │  discussing new         │  │                          │ │
│  │  projects, creative     │  │                          │ │
│  │  ideas, or opportunities│  │                          │ │
│  │  to be part of your     │  │                          │ │
│  │  vision.                │  │                          │ │
│  │                         │  │                          │ │
│  │  ✉ jayceeja12@gmail.com │  │                          │ │
│  │  🐙 github.com/...      │  │                          │ │
│  │  🔗 linkedin.com/...    │  │                          │ │
│  │  📄 Download Resume     │  │                          │ │
│  └─────────────────────────┘  └──────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Chat with Jaja
```
┌─────────────────────────────────────────────────────────────┐
│  [Floating Button: "Chat with Jaja"]  (bottom-right)        │
│                                                             │
│  When opened:                                               │
│  ┌─────────────────────────────────────────┐                │
│  │  Chat with Jaja          [✕]           │                │
│  │  ─────────────────────────────────────  │                │
│  │  Hi! I'm Jaja.                         │                │
│  │  Ask me about:                         │                │
│  │  [Projects] [Experience] [Education]   │                │
│  │  [Tech Stack] [Resume] [Contact]       │                │
│  │                                         │                │
│  │  💡 Suggested Questions:               │                │
│  │  "Tell me about FoundIT"               │                │
│  │  "What technologies do you use?"       │                │
│  │  "Can I download your resume?"         │                │
│  │  "How can I contact you?"              │                │
│  │                                         │                │
│  │  ─────────────────────────────────────  │                │
│  │  [Type your question...]  [Send →]     │                │
│  └─────────────────────────────────────────┘                │
└─────────────────────────────────────────────────────────────┘
```

## Animation Plan

### Hero
| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Profile image | Fade in + scale 0.95→1 + float | On load | 800ms | ease-out |
| Headline | Fade in + slide up 20px | On load (200ms delay) | 600ms | ease-out |
| Subtitle | Fade in + slide up | On load (400ms delay) | 600ms | ease-out |
| Description | Fade in | On load (600ms delay) | 600ms | ease-out |
| CTA buttons | Fade in + slide up | On load (800ms delay) | 600ms | ease-out |
| Scroll indicator | Bounce (infinite) | After load | — | ease-in-out |

### About
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section title | Fade in + slide up | On scroll into view | 500ms |
| Content blocks | Fade in + slide up (stagger 100ms) | On scroll into view | 500ms |

### Projects
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section title | Fade in + slide up | On scroll into view | 500ms |
| Cards | Fade in + scale 0.98→1 (stagger 100ms) | On scroll into view | 500ms |
| Card hover | Lift 4px + border glow + image zoom 1.05 | On hover | 300ms ease-out |
| Card hover | Button color shift to accent | On hover | 200ms |

### Experience/Education Timeline
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Timeline line | Scale X 0→1 | On scroll into view | 800ms |
| Timeline items | Fade in + slide left (odd) / right (even) | On scroll into view | 500ms (stagger 150ms) |

### Skills Marquee
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Each row | Infinite horizontal scroll | Always | 30s linear |
| Row direction | Alternates (left, right, left, right) | — | — |
| Hover | Animation pauses | On hover | — |

### Chat
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Chat panel | Fade in + scale 0.95→1 + slide up | On click | 300ms ease-out |
| Message | Fade in + slide up | On send | 300ms |
| Typing indicator | Pulse | While loading | — |

### Theme Switch
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Background | Color crossfade | On toggle | 400ms ease |
| Text | Color crossfade | On toggle | 400ms ease |
| Cards | Background + border color crossfade | On toggle | 400ms ease |

## Responsive Breakpoints

| Breakpoint | Width | Nav | Hero | Projects | Skills |
|------------|-------|-----|------|----------|--------|
| Desktop | ≥1024px | Horizontal | Side-by-side | 2-col grid | Full width |
| Tablet | 768–1023px | Horizontal | Side-by-side (stacked) | 2-col grid | Full width |
| Mobile | <768px | Hamburger | Stacked (image top) | 1-col | Full width |

## Page Transitions

- Between pages: fade opacity 0→1 over 300ms
- Within page: sections reveal on scroll using IntersectionObserver
- No full-page loading spinner (instant transitions)

## Interactive Elements

### Buttons
- Primary CTA: solid accent background, white text, 12px border-radius
- Secondary: transparent with accent border, accent text
- Hover: scale 1.02, shadow increase, color shift
- Active: scale 0.98
- Focus: visible outline 2px accent

### Nav Links
- Default: muted color
- Hover: accent color
- Active section: accent color + underline
- Transition: 200ms color change

### Project Cards
- Default: subtle border, no shadow
- Hover: lift 4px, accent border glow, shadow elevation
- Image: scale 1.05 on hover
- Buttons: accent background on hover

## Footer
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Jaycee Andal · Designed & Developed by Jaycee Andal       │
│  Built with Next.js · TypeScript · Tailwind CSS · Framer   │
│  [GitHub] [LinkedIn] [Email]                               │
│  © 2026                                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```