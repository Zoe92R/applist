<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Applyst

Job application tracker: paste a job description, the AI parser structures it, and applications become a working queue sorted by the next step. Next.js, React, Tailwind v4.

## Imports

Always use the full `@/` path (`@/components/ui/cn`), never a relative one (`../cn`, `./Button`). This includes same-folder imports. ESLint enforces it.

Import a component from its own file (`@/components/ui/Tag/Tag`), not from its folder. Don't add single-file `index.ts` re-exports.

## Design system

Token values (colors, fonts) live in `app/globals.css` (`@theme`) and `app/fonts.ts`; everything else is Tailwind's defaults. The rules for using them live in `design-system/*.md` (colors, typography, spacing, motion, content, states). The Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29) is the visual reference and is updated after the code. Don't invent colors, sizes or spacing. If something isn't in the system, ask or pick the nearest existing step.

- **Colors:** only the tokens in `design-system/colors.md`, plus `white`. Tailwind's default palette is off (`bg-neutral-600` works, `bg-slate-600` doesn't). Light theme only.
- **Color meaning:** `primary-600` means "act" (one primary button per view, links, focus ring), never decoration. Status color only on the status badge and the mobile card's left edge.
- **Units:** rem for type, spacing and component sizes; px only for 1px borders and rings, focus rings, shadows. Never override the root font-size.
- **Spacing:** Tailwind default steps from `design-system/spacing.md` (4, 8, 12, 16, 24, 32, 48, 64 px). No arbitrary values like `p-[11px]`.
- **Type** (`design-system/typography.md`): Geist (`font-sans`); Manrope 800 only for the wordmark (`font-display`). Tailwind's size scale only: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-2xl` (and `text-xl` for the wordmark). Page, modal and section titles use `<Title level>` from `components/ui/Title/Title.tsx`, never a hand-styled heading. Label style is sentence case, never all caps. Form fields use `max-sm:text-base` below 640px.
- **Contrast:** every text pair reaches 4.5:1. Nothing lighter than `neutral-500` for text.
- **Focus:** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600` on every interactive element.
- **Icons:** `lucide-react`, outline, `size-4` or `size-5`. Icon-only buttons always carry `aria-label`. No emoji.
- **Motion** (`design-system/motion.md`): short and quiet, only the timings listed there, and everything respects `prefers-reduced-motion`.
- **Copy** (`design-system/content.md`): plain, short, sentence-style. Errors say what to do, inline, never in a toast. Confirmations are past-tense toasts ("Application added").
- **States** (`design-system/states.md`): every list, table and form has a defined empty, loading and error state before it ships.
- **Dates:** "Oct 14"; add the year only when it isn't the current year. Use `Intl.DateTimeFormat('en-US', ...)` and `tabular-nums` in columns.
