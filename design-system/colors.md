# Design system: Colors

Minimal color palette for the job application tracker (Applyst). Calm, light, dense: slate neutrals, one indigo for action, status color only where status lives. Light theme only.

Values live in `app/globals.css` (`@theme`); this file defines what each token is for. To change a color, edit `globals.css`, then update the Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29). Adding or removing a token means updating this file too.

## Palette

Names are `<role>-<step>` using Tailwind's 50-900 numbering (higher = darker). Only these colors exist, plus `white`; Tailwind's default palette is turned off.

### Neutral (slate): surfaces, borders, text

| Token | Use |
| --- | --- |
| `neutral-50` | Table header, row hover, expanded row, sign-in background |
| `neutral-100` | Tag and Applied-badge fill, skeleton, menu item highlight |
| `neutral-200` | Hairlines: card/table borders, row dividers |
| `neutral-300` | Input outline, dashed empty-field outline |
| `neutral-400` | Non-text edges only: checkbox, empty star (2.6:1, never text) |
| `neutral-500` | Placeholders, counters, dimmed text (4.8:1 on white) |
| `neutral-600` | Secondary text, labels, icons (7.5:1) |
| `neutral-700` | Tag text |
| `neutral-900` | Primary text, titles (17:1) |

### Primary (indigo): action

| Token | Use |
| --- | --- |
| `primary-50` | Soft secondary button fill, avatar fill |
| `primary-100` | Hover/open state of the soft button |
| `primary-200` | Illustration accents only |
| `primary-600` | Primary button, links, focus ring, wordmark (6.3:1) |
| `primary-700` | Primary button hover |

### Status colors

| Token | Use |
| --- | --- |
| `success-50` | Success toast and Offer badge fill |
| `success-700` | Success text and border, complete-step check (5.5:1 on success-50) |
| `success-800` | Hover of the filled complete check |
| `danger-50` | Error banner fill |
| `danger-700` | Error text, invalid field outline (6.5:1) |
| `accent-50` | Rejected badge fill |
| `accent-700` | Rejected badge text (4.9:1 on accent-50) |
| `info-100` | Interviewing badge fill |
| `info-800` | Interviewing badge text (7.2:1) |
| `star-500` | Interest star. Icon only, never a status |

Contrast ratios are against `white` unless noted; recheck them whenever a value changes in `globals.css`.

## Rules

- Page background is `white`.
- Text: `neutral-900` primary, `neutral-600` secondary, `neutral-500` placeholders. Nothing lighter than `neutral-500` for text.
- `primary-600` means "act": one primary button per view, links, focus ring. Don't use indigo for decoration.
- Status color appears only on the status badge (and the mobile card's left edge). Company names stay neutral.
- Every text pair must reach 4.5:1 (3:1 for 24px+ text, control borders and focus rings).
