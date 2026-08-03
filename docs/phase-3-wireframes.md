# Phase 3: Page Wireframes

Date: 2026-08-03
Status: Draft — for review

---

## Wireframe Conventions

- [BOX] = content block
- --- = horizontal rule / divider
- ... = content continues / scrollable area
- Max content width: 768px unless noted
- Desktop margin: 8rem–12rem horizontal
- Mobile: 1.5rem horizontal padding

---

## 1. Home Page

### Desktop

```
[Nav: About | Projects | Experience | Education | Contact]                      [sticky, transparent → solid on scroll]



[BOOT STRAP]

[Name]                          ← text-5xl, font-semibold
[Title — Computer Science Student / Full Stack Developer]  ← text-xl, text-gray-500
[One-line description — 1-2 sentences about building clean web apps]  ← text-base, text-gray-400, max-width: 560px

[↓ Selected Work]               ← text-sm, text-gray-500, animate-bounce subtle



[Selected Work]                 ← text-2xl, font-medium, mt-24
---                             ← border-gray-200, mt-4
[Grid: 2 columns, gap-8]
  [Project Card 1]  [Project Card 2]
  [Project Card 3]  [Project Card 4]

[Each card:]
  [Thumbnail — 16:9, grayscale hover subtle lift]
  [Name — text-lg, font-medium]
  [Description — text-sm, text-gray-500, 1-2 lines]
  [Tech stack — text-xs, text-gray-400, mono]
  [Year | Status]

[Contact CTA]
[↓ Get in Touch]               ← text-center, mt-24, text-gray-500


```

### Mobile

```
[Nav: hamburger → About Projects Experience Education Contact]

[Name]                          ← text-4xl
[Title]                         ← text-lg
[Description]                   ← text-base, px-4

[↓ Selected Work]

[Selected Work]
---
[Stack: 1 column]
  [Project Card]
  [Project Card]
  [Project Card]
  [Project Card]

[Get in Touch]                  ← mt-16
```

---

## 2. About Page

```
[Nav]

[About]                         ← text-4xl, font-semibold, mt-24
---                             ← border-gray-200, mt-4, mb-16

[Two columns on desktop, stacked on mobile]

[Left column (1/3):]
  [Profile Photo — grayscale, rounded-full, 200px]
  [OR placeholder if no photo]

[Right column (2/3):]
  [Short bio — 2-3 paragraphs, text-gray-300, leading-relaxed]
  [No autobiography. Concise, professional.]

  [Resume link →]               ← text-sm, underline, text-gray-400
  [GitHub ↗]                    ← text-sm, text-gray-400


```

---

## 3. Projects Listing Page

```
[Nav]

[Selected Work]                 ← text-4xl, font-semibold, mt-24
---                             ← border-gray-200, mt-4, mb-16

[Filter tabs — optional, only if > 4 projects]
  [All] [Web] [Mobile] [Academic]  ← text-sm, border-b, active:border-black

[Stack: 1 column, max-width: 680px]
  [Project Card]                ← border-b border-gray-100, py-8, last:border-0
    [Left: Thumbnail — 120px, grayscale]
    [Right:]
      [Name — text-lg, font-medium]
      [Description — text-sm, text-gray-500]
      [Tech stack — text-xs, mono, text-gray-400]
      [Year | Status]           ← text-xs, text-gray-400
      [GitHub ↗] [Live Demo ↗]  ← text-sm, underline

  [Project Card]
  [Project Card]
  [Project Card]


```

---

## 4. Project Detail Page (Case Study)

```
[Nav]

[← Back to Projects]            ← text-sm, text-gray-500, mt-8

[Project Name]                  ← text-4xl, font-semibold, mt-4
[Tagline — one sentence]       ← text-lg, text-gray-500, mt-2
[Tech stack — mono, text-sm, text-gray-400]  ← mt-4

---                             ← border-gray-200, mt-8 mb-12

[Content sections — stacked, max-width: 680px]

[Overview]                      ← text-2xl, font-medium, mb-4
[Paragraph — text-gray-300, leading-relaxed]

[Problem / Context]             ← text-2xl, font-medium, mb-4, mt-12
[Paragraph]

[My Role]                       ← text-2xl, font-medium, mb-4, mt-12
[Paragraph]

[Objectives]                    ← text-2xl, font-medium, mb-4, mt-12
[Bullet list — text-gray-300]

[Features]                      ← text-2xl, font-medium, mb-4, mt-12
[Bullet list]

[Tech Stack]                    ← text-2xl, font-medium, mb-4, mt-12
[Badges: React • PostgreSQL • Docker]  ← border, px-3, py-1, text-xs, mono

[Architecture]                  ← text-2xl, font-medium, mb-4, mt-12 (omit if not applicable)
[Diagram placeholder or description]

[Development Process]           ← text-2xl, font-medium, mb-4, mt-12
[Paragraph or timeline]

[Challenges Faced]              ← text-2xl, font-medium, mb-4, mt-12
[Paragraph]

[Lessons Learned]               ← text-2xl, font-medium, mb-4, mt-12
[Paragraph]

[Screenshots / Gallery]         ← text-2xl, font-medium, mb-4, mt-12
[Image grid — 2 columns, grayscale]
[OR placeholder]

[Links]                         ← mt-12, pt-8, border-t border-gray-200
  [GitHub Repository ↗]
  [Live Demo ↗]


```

---

## 5. Experience Page

```
[Nav]

[Experience]                    ← text-4xl, font-semibold, mt-24
---                             ← border-gray-200, mt-4, mb-16

[Timeline — vertical line on left]

[Entry 1]
  [2024 — Present]             ← text-sm, mono, text-gray-500, w-32
  |
  [Software Engineer Intern]    ← text-lg, font-medium
  [Company Name]                ← text-base, text-gray-400
  [Location]                    ← text-sm, text-gray-500
  |
  [Responsibilities:]
  [• Built X using Y]          ← text-sm, text-gray-300, list-disc, ml-4
  [• Improved Z by N%]
  [• Collaborated with team on W]

[Entry 2]
  [2023 — 2024]
  |
  [Web Developer]
  [Company / Freelance]
  [Location]
  |
  [Responsibilities: ...]

[Entry 3 — if applicable]


```

### Mobile

```
[Nav]

[Experience]
---

[Entry 1]
  [2024 — Present]
  [Software Engineer Intern]
  [Company]
  [Location]
  [Responsibilities: ...]

[Entry 2]
  [2023 — 2024]
  [Web Developer]
  ...
```

---

## 6. Education Page

```
[Nav]

[Education]                     ← text-4xl, font-semibold, mt-24
---                             ← border-gray-200, mt-4, mb-16

[Timeline — same format as Experience]

[Entry 1]
  [2022 — 2026]
  |
  [BS Computer Science]         ← text-lg, font-medium
  [University Name]             ← text-base, text-gray-400
  [Location]                    ← text-sm, text-gray-500
  |
  [Relevant Coursework:]
  [• Data Structures]           ← text-sm, text-gray-300
  [• Web Development]
  [• Database Systems]
  |
  [Awards:]
  [• Dean's List — 2023]       ← text-sm, text-gray-400


```

---

## 7. Contact Page

```
[Nav]

[Contact]                       ← text-4xl, font-semibold, mt-24
---                             ← border-gray-200, mt-4, mb-16

[Two columns on desktop, stacked on mobile]

[Left:]
  [Get in touch]                ← text-2xl, font-medium
  [Paragraph — open to opportunities, collaborations]  ← text-gray-300

[Right:]
  [Email]                       ← text-lg, underline, text-gray-300
  [GitHub ↗]                    ← text-lg, text-gray-400
  [LinkedIn ↗]                  ← text-lg, text-gray-400
  [Resume ↗]                    ← text-lg, text-gray-400


```

---

## 8. 404 Page

```
[Nav]

[404]                           ← text-6xl, font-light, text-gray-200, mt-24
[Page not found]                ← text-2xl, font-medium, mt-4
[The page you're looking for doesn't exist or has been moved.]  ← text-gray-500, mt-2

[← Back to Home]               ← text-sm, underline, mt-8


```

---

## 9. Global Layout Elements

### Navigation (Desktop)
```
[← spacer — 8rem]  [About | Projects | Experience | Education | Contact]  [← spacer — 8rem]
                         ↑ text-sm, mono, text-gray-400
                         ↑ hover:text-black
                         ↑ active:font-medium
```

### Navigation (Mobile)
```
[← spacer — 1.5rem]  [Hamburger]  [← spacer — 1.5rem]
[Click → full-screen overlay]
  [About]
  [Projects]
  [Experience]
  [Education]
  [Contact]
```

### Footer
```
---                             ← border-gray-200, mt-24
[Designed & Developed by Jaja.] ← text-xs, text-gray-500, text-center
[Built with Next.js, TypeScript, Tailwind]  ← text-xs, text-gray-400
[© 2026]                       ← text-xs, text-gray-400


```

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Layout changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, hamburger nav, reduced spacing |
| Tablet | 768px – 1024px | Single column, full nav, medium spacing |
| Desktop | 1024px – 1440px | Two-column where applicable, large margins |
| Ultrawide | > 1440px | Max content 768px, margins increase to 12rem |

---

## 11. Interaction States

### Buttons / Links
- Default: text-gray-400
- Hover: text-black, subtle underline or lift
- Active: font-medium
- Focus: ring-2 ring-gray-300, outline-none

### Project Cards
- Default: border-b or border border-gray-100
- Hover: translateY(-2px), shadow-sm, image brightness change

### Images
- Default: grayscale, opacity-80
- Hover: grayscale-0, opacity-100, transition 300ms

### Nav
- Transparent at top (bg-transparent, text-white if hero is dark)
- Solid on scroll (bg-white/80 backdrop-blur, border-b border-gray-200)
- Active link: font-medium, text-black

---

## 12. Accessibility Notes

- All interactive elements have focus states
- Skip-to-content link hidden until focused
- Images have alt text
- Color contrast meets WCAG AA (gray-400 on white = 4.5:1 minimum)
- prefers-reduced-motion: disable all animations
- Semantic HTML: nav, main, section, article, h1-h6
- aria-labels on icon-only buttons

---

## Approval Needed

1. Confirm page list (8 pages above)
2. Approve layout direction (typography-driven, no cards)
3. Approve contact approach (links only, no form)
4. Approve project detail case study structure
5. Confirm no dark mode (strictly light/minimal per vision)
