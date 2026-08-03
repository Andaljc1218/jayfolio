# Technical Debt

## Pre-existing Issues

### 1. ESLint Config Mismatch
- **File:** `.eslintrc.json` (legacy), new `eslint.config.mjs` (flat config)
- **Description:** ESLint v10 is installed but project previously only had `.eslintrc.json` (legacy format). ESLint v10 requires `eslint.config.mjs` (flat config). Created minimal flat config using `@next/eslint-plugin-next` which provides `@next/next/*` rules.
- **Impact:** Pre-commit hook (husky+linter) now works. ESLint runs on `.js`/`.jsx` files. For `.ts`/`.tsx` files, only Prettier runs in the pre-commit hook (TypeScript ESLint parser not installed).
- **Fix:** Created `eslint.config.mjs` with browser/node globals + `@next/eslint-plugin-next` core-web-vitals config. Updated `lint-staged` in `package.json` to separate JS (eslint+prettier) from TS (prettier only) staging.
- **Long-term fix:** Install `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` for full ESLint TypeScript support.
- **Priority:** Resolved (mitigated)
- **Date:** 2026-08-03

### 2. Commit Granularity
- **File:** Git history
- **Description:** Session-level fixes were committed as a single commit instead of separate atomic commits per concern.
- **Impact:** Harder to revert individual fixes. Violates COMMIT_WORKFLOW.md §4.
- **Fix:** Follow atomic commit pattern in future sessions. Do not amend the existing commit (shared branch).
- **Priority:** Low
- **Date:** 2026-08-03

## Active Work Items

### 1. Projects Layout CSS Class Leftover
- **File:** `app/projects/layout.tsx`
- **Description:** Earlier version referenced `className="projects-layout"` and an imported CSS file. The CSS file was removed but the className may persist in git history. Current version uses a bare fragment `<>`.
- **Status:** Resolved (current code is clean)
- **Priority:** Resolved

### 2. ChatButton Icons from lucide-react
- **File:** `components/chat/chat-button.tsx`
- **Description:** Still imports `MessageCircle`, `X`, `Send` from `lucide-react`. The project has custom inline SVG icons for GitHub/LinkedIn (per v3 spec). Simple UI icons (send, close, message circle) are acceptable as lucide since they don't need natural color treatment.
- **Status:** Acceptable
- **Priority:** Low

### 3. MDX Frontmatter Unused
- **File:** `content/projects/*.mdx`
- **Description:** MDX files contain frontmatter (title, description, tech, etc.) that is parsed but not consumed — the page component (`app/projects/[slug]/page.tsx`) reads all project data from `lib/data.ts` instead.
- **Impact:** Frontmatter is redundant. If `lib/data.ts` is updated without updating MDX frontmatter, they diverge.
- **Fix:** Either use frontmatter as the source of truth, or remove it from MDX files.
- **Priority:** Low
- **Date:** 2026-08-03
