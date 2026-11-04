# Design system: Typography

Type for the job application tracker (Applyst). Calm, light, dense: one sans family, Tailwind's own size scale, nothing custom.

Font loading lives in `app/fonts.ts` and the `--font-sans` / `--font-display` tokens in `app/globals.css`; sizes, weights and line heights are Tailwind's defaults. This file defines which of them to use and where. After changing it, update the Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29).

## Fonts

| Role | Font | Class | Use |
| --- | --- | --- | --- |
| Sans | Geist | `font-sans` | Everything, the same on every device |
| Display | Manrope 800 | `font-display` | The wordmark "Applyst" only |

Both are Google Fonts, loaded in `app/fonts.ts`.

Geist has tabular numbers: use `tabular-nums` for dates and counts in table columns.

## Scale

Tailwind's default size scale, and only these. No arbitrary sizes like `text-[13px]`.

Titles always use the `Title` component (`components/ui/Title/Title.tsx`), which sets the size, weight, color and heading tag. The wordmark always uses the `Logo` component (`components/ui/Logo/Logo.tsx`). Their classes live in those files: never style an `h1`, `h2` or the wordmark by hand.

| Style | Use with | px | Use |
| --- | --- | --- | --- |
| Page title | `<Title level="page">` | 24 | One per page |
| Modal title | `<Title level="modal">` | 18 | Modals (left-aligned) |
| Section title | `<Title level="section">` | 16 | Empty state, mobile sheet titles, mobile card company name |
| Body | `text-sm` | 14 | Default UI text, cells, inputs |
| Body emphasis | `text-sm font-medium text-neutral-900` | 14 | Company name in table rows, buttons, toast messages |
| Secondary | `text-sm text-neutral-600` | 14 | Role, descriptions, helper text |
| Small | `text-xs` | 12 | Meta lines, counters, badges, tags |
| Label | `text-xs font-medium text-neutral-600` | 12 | Column headers, section labels, menu labels |
| Wordmark | `<Logo>` | 20 | "Applyst" only, in the AppBar and on the sign-in page |

## Weights

- `font-normal` is the default; `font-medium` for titles, buttons, labels and emphasis.
- `font-extrabold` only on the wordmark.
- No bold (`font-bold`) and no italics in the UI.

## Line height

Unitless, from the Tailwind size class (`text-sm` brings its own). Don't set line height with spacing steps or px values.

## Forms on mobile

Below 640px, form fields use `max-sm:text-base` (16px) so iOS doesn't zoom into them.

## Rules

- Text color and contrast: see `colors.md`. Sentence case: see `content.md`.
