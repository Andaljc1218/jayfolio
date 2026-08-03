# Phase 4: Design System

Date: 2026-08-03
Status: Draft — for review

---

## 1. Typography Scale

### Font Family
- **Primary:** System font stack
  - `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Mono:** System mono stack
  - `font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`

### Scale (Tailwind equivalents)

| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| text-xs | 0.75rem (12px) | 400 | 1.5 | Captions, meta, tech stack |
| text-sm | 0.875rem (14px) | 400 | 1.5 | Body secondary, nav links |
| text-base | 1rem (16px) | 400 | 1.625 | Body text, descriptions |
| text-lg | 1.125rem (18px) | 400 | 1.5 | Lead paragraphs |
| text-xl | 1.25rem (20px) | 500 | 1.4 | Card titles, subtitles |
| text-2xl | 1.5rem (24px) | 500 | 1.3 | Section headings |
| text-3xl | 1.875rem (30px) | 600 | 1.2 | Page headings |
| text-4xl | 2.25rem (36px) | 600 | 1.1 | Hero name, major headings |
| text-5xl | 3rem (48px) | 700 | 1.0 | Hero name (desktop) |

### Hierarchy Rules
- Maximum 2 heading levels per section
- Body text never exceeds 18px
- Line length max 680px for readability
- Paragraph spacing: 1.5rem vertical

---

## 2. Color System

### Strict Monochrome

| Token | Value | Use |
|-------|-------|-----|
| gray-50 | #fafafa | Backgrounds (light mode) |
| gray-100 | #f5f5f5 | Borders, dividers |
| gray-200 | #e5e5e5 | Borders, hover states |
| gray-300 | #d4d4d4 | Disabled elements |
| gray-400 | #a3a3a3 | Secondary text, meta |
| gray-500 | #737373 | Tertiary text |
| gray-600 | #525252 | Inverted text on light |
| gray-700 | #404040 | Headings on light |
| gray-800 | #262626 | Body text |
| gray-900 | #171717 | Primary headings |
| gray-950 | #0a0a0a | Highest contrast, near-black |

### Accent Colors
- **None.** No brand accent color.
- Technology logos retain their natural colors inside project cards.
- GitHub charts/screenshots retain natural colors.

### Usage Rules
- Background: gray-50
- Text primary: gray-900
- Text secondary: gray-500
- Text tertiary: gray-400
- Borders: gray-200
- Dividers: gray-100

---

## 3. Spacing Scale

### Base Unit: 4px

| Token | Value | Use |
|-------|-------|-----|
| space-1 | 0.25rem (4px) | Tight gaps |
| space-2 | 0.5rem (8px) | Icon padding, inline gaps |
| space-3 | 0.75rem (12px) | Compact spacing |
| space-4 | 1rem (16px) | Default gap, input padding |
| space-6 | 1.5rem (24px) | Section padding mobile |
| space-8 | 2rem (32px) | Card padding, medium gaps |
| space-12 | 3rem (48px) | Section spacing |
| space-16 | 4rem (64px) | Large section breaks |
| space-24 | 6rem (96px) | Section vertical padding desktop |
| space-32 | 8rem (128px) | Hero bottom spacing |

### Layout Rules
- Max content width: 768px (prose)
- Project cards max-width: 680px
- Container padding mobile: 1.5rem
- Container padding desktop: 8rem horizontal (min 4rem)

---

## 4. Component Patterns

### Container
```
max-w-prose mx-auto px-6 md:px-8 lg:px-0
```
Use for all text-heavy sections.

### Section
```
py-24 md:py-32
```
Vertical rhythm for all sections.

### Heading
```
text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight
```

### Subheading
```
text-lg md:text-xl text-gray-500 font-normal mt-2
```

### Divider
```
border-t border-gray-200 mt-8 mb-12
```

### Link
```
text-gray-500 hover:text-gray-900 underline-offset-4 hover:underline transition-colors
```

### Button (primary)
```
inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors
```

### Button (secondary)
```
inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 transition-colors
```

### Badge
```
inline-flex items-center px-3 py-1 border border-gray-200 text-xs font-medium text-gray-600 rounded-full
```

### Project Card (list variant)
```
border-b border-gray-100 py-8 last:border-0
```

### Project Card (grid variant)
```
border border-gray-100 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all
```

### Timeline Entry
```
flex gap-6
[date — w-32 shrink-0 text-sm mono text-gray-400]
[line — w-px bg-gray-200]
[content — flex-1]
```

---

## 5. Animation Tokens

### Allowed Animations (Framer Motion)
- `fadeIn`: opacity 0 → 1, translateY 10px → 0
- `stagger`: children fade in with 100ms delay
- `hoverLift`: translateY 0 → -2px on hover
- `pageTransition`: fade + slight slide

### Disallowed
- Bouncing
- Spinning
- Scaling > 1.05
- Color shifts
- Glow effects
- Particle effects

### Duration
- Default: 300ms
- Page transition: 400ms
- Stagger: 100ms per child

### Easing
- `easeOut` for entrance
- `easeInOut` for transitions

### prefers-reduced-motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Image Treatment

### Default
- Grayscale: `grayscale(100%)`
- Opacity: `opacity-80`
- Border radius: `rounded-lg` (8px)

### Hover
- Grayscale: `grayscale(0%)`
- Opacity: `opacity-100`
- Transition: `transition-all duration-300`

### Sizing
- Thumbnail: `aspect-video w-full object-cover`
- Profile: `aspect-square w-48 rounded-full`
- Gallery: `aspect-video w-full`

---

## 7. Navigation Pattern

### Desktop
- Position: sticky top-0
- Background: transparent initially, `bg-white/80 backdrop-blur-md border-b border-gray-200` on scroll
- Height: 64px
- Links: text-sm, text-gray-500, hover:text-gray-900
- Active: font-medium text-gray-900

### Mobile
- Hamburger → full-screen overlay
- Background: `bg-white/95 backdrop-blur-md`
- Links: text-2xl, text-gray-900, stacked vertically
- Close: X button top-right

---

## 8. Form Patterns (if contact form is added)

### Input
```
w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent
```

### Label
```
block text-sm font-medium text-gray-700 mb-1.5
```

### Error
```
text-sm text-red-600 mt-1.5
```

---

## 9. Loading & Empty States

### Skeleton
```
animate-pulse bg-gray-200 rounded
```

### Empty
```
text-center py-24 text-gray-400
[No projects found.] ← text-lg
[Check back later.] ← text-sm
```

---

## 10. Print Styles

```css
@media print {
  nav, footer, .no-print { display: none; }
  body { font-size: 12pt; color: black; background: white; }
  a { text-decoration: underline; }
}
```

---

## Approval Needed

1. Approve typography scale and font choices
2. Approve strict monochrome (no accent color)
3. Approve spacing values
4. Approve animation restrictions
5. Confirm no cards for experience/education (timeline only)
