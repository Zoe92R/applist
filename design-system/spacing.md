# Design system: Spacing, sizes, radius, shadows

Spacing for the job application tracker (Applyst). Calm, light, dense. No custom spacing, radius or shadow tokens: Tailwind v4 defaults, and only the steps listed here.

Values are Tailwind v4's defaults (nothing is redefined in `app/globals.css`). This file defines which steps to use and where. After changing it, update the Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29).

## Units

- **rem** for type, spacing, component sizes and text container widths. Tailwind v4 is rem-based, so `p-4` is `1rem` (16px) and scales with the user's browser font-size.
- **px** only for things that must stay constant: 1px borders and hairline rings, focus ring widths, shadow offsets, icon strokes.
- Media queries use Tailwind breakpoints (rem based), never raw px.
- Never override the root `font-size` (no `62.5%` trick).

## Spacing scale

One 4px base unit. Pick from these steps, never an in-between value. No arbitrary values like `p-[11px]`.

| Step | px | rem | Typical use |
| --- | --- | --- | --- |
| `1` | 4 | 0.25 | Menu padding (`p-1`), icon-to-text nudges |
| `2` | 8 | 0.5 | Gap inside badges, tags, button icon + label |
| `3` | 12 | 0.75 | Cell padding, compact gaps |
| `4` | 16 | 1 | Default gap, mobile page padding (`px-4`), card padding |
| `6` | 24 | 1.5 | Tablet page padding (`sm:px-6`), gap between sections |
| `8` | 32 | 2 | Desktop page padding (`lg:px-8`, `py-8`), large section gaps |
| `12` | 48 | 3 | Empty-state spacing |
| `16` | 64 | 4 | Large vertical rhythm |

Steps get bigger as values grow (4, 8, 12, 16, then 24, 32, 48): the eye can't tell 40 from 42, but can tell 8 from 12. Dense UI (table cells, badges, rows) lives in `1` to `4`; save `6` and up for gaps between sections.

## Component sizes

Fixed heights use the same Tailwind steps.

| Element | Class | px |
| --- | --- | --- |
| App bar | `h-16` | 64 |
| Buttons and inputs | `h-9` | 36 |
| Small buttons (mobile) | `h-8` | 32 |
| Menu items | `h-8` | 32 |
| Table rows | `h-16` | 64 (truncate with an ellipsis) |
| Icon, small (buttons, menus, badges) | `size-4` | 16 |
| Icon, default (icon-only buttons, toasts, chevron) | `size-5` | 20 |

`size-3.5` (14px) is allowed only for a rare small chip; it is not a named size.

## Page width and breakpoints

- Content sits in `mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8`.
- Below `md` (768px) the table becomes MobileCards and the PageHeader goes compact.
- Below `sm` (640px) modals become fullscreen or bottom sheets, and dropdowns use MenuMobile.

## Radius

| Class | px | Use |
| --- | --- | --- |
| `rounded-sm` | 4 | Checkboxes |
| `rounded-md` | 6 | Badges, tags, menu items |
| `rounded-lg` | 8 | Buttons, inputs, cards, menus, toasts |
| `rounded-xl` | 12 | Modals |
| `rounded-full` | | Avatar, star button |

## Edges and shadows

- Cards: `shadow-xs ring-1 ring-neutral-900/5` (a hairline ring, not a border).
- Buttons and inputs: `shadow-xs`.
- Floating menus and toasts: `shadow-lg ring-1 ring-neutral-900/5`.
- Modals: `shadow-xl`.
- Overlay: `bg-neutral-900/20`.

## Rules

- If you reach for a value that isn't here, the design is probably wrong, not the scale.
- Break the scale only for optical alignment (1 to 2px nudge) or fixed-size assets, and say why in a comment.
- Line height comes from the type style, not the spacing scale (see `typography.md`).
