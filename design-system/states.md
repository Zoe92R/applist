# Design system: States

How every screen and control looks when it isn't in its default, filled-in state. Missing states are what make a UI feel unfinished, so each one has a defined look.

This file defines how each state looks; colors come from `colors.md`, sizes from `spacing.md`. Once a pattern is built as a component in `components/ui/`, the component is the reference for its classes. After changing this file, update the Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29).

## Quick reference

| State | Pattern | Where |
| --- | --- | --- |
| Empty | EmptyState card | No applications |
| Loading, first load | Skeleton rows | Table |
| Loading, short wait | Spinner (`size-4` or `size-6`) | Small areas |
| Loading, action | Button with `aria-busy`, spinner, "Parsing…" | Parser Submit |
| Loading, inline save | Spinner + "Saving…", then "Saved" hint | Inline edits |
| Error, field | Message under the field, outlined in `danger-700` | Forms |
| Error, whole action | Alert (`role="alert"`) | Modals, failed load |
| Success | Toast (`role="status"`) | After a modal closes |
| Disabled | Resting look at 50% opacity, `cursor-not-allowed` | Buttons, inputs |
| Hover | One shade darker | Buttons, rows, menu items |
| Focus | Primary outline ring | Every interactive element |

## Empty

Replaces the table card when there are no applications.

- The fanned-cards illustration, "Nothing here yet" (`text-base font-medium`), one line of guidance (`text-sm text-neutral-600`) and a **secondary** "New application" button.
- Centered in the same card as the table: `flex flex-col items-center p-8 text-center`.
- The page header keeps its primary button, reads "0 applications" and hides Fields.
- The empty-state button is secondary so it doesn't compete with the primary one in the header.

## Loading

| Pattern | Classes | Use |
| --- | --- | --- |
| Skeleton rows | `block h-2.5 rounded-full bg-neutral-100 motion-safe:animate-pulse`, bars matching the real row layout | First load of the table. Header and labels render normally. |
| Spinner | `size-4` or `size-6 animate-spin rounded-full border-2 border-neutral-200 border-t-primary-600` | Short waits in a small area |
| Button loading | `aria-busy="true"`, white spinner, label swaps to "Parsing…" | Parser Submit |
| Inline status | `text-sm text-neutral-600` spinner + "Saving…", then a "Saved" hint | Inline saves |

- The table sets `aria-busy="true"` and a hidden `role="status"` announces "Loading applications…".

## Error

- **Field error:** `aria-invalid="true"` on the control, a `danger-700` outline, and a `role="alert"` line under the group: `flex items-center gap-2 text-sm text-danger-700`.
- **Whole-action error:** Alert, `flex items-start gap-3 rounded-lg bg-danger-50 p-3 text-sm ring-1 ring-danger-700/20`, with a `circle-alert` icon in `text-danger-700` and `role="alert"`.
  - Short, in a modal above the footer.
  - With title and action, in place of the table card when applications fail to load: title in `font-medium text-danger-700`, a line of help in `text-neutral-700`, and a small tertiary "Try again" button tinted `text-danger-700 hover:bg-danger-700/10`.
- There is no success or info Alert variant in v1.
- Don't disable Save or Submit to signal validation. Show the error instead.

## Success

- A toast after a modal closes successfully: white card, `flex w-72 items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm shadow-lg ring-1 ring-neutral-900/5`, a `text-success-700` check-circle icon (`size-5`) and the message in `font-medium text-neutral-900`.
- `role="status"`, top-center, auto-dismiss after a few seconds.
- Inline saves show a brief "Saved" hint (`text-xs text-success-700`) after blur instead of a toast.

## Disabled

- Buttons: the resting look at 50% opacity with `disabled:cursor-not-allowed disabled:opacity-50`. Used for pagination arrows at the first or last page.
- Textarea while parsing: `readOnly`, not `disabled`, so focus stays in the modal. Same look: `read-only:bg-neutral-50 read-only:text-neutral-500`.
- Cancel and Submit in the parser modal are never `disabled` while loading. They use `aria-busy` and ignore clicks.

## Hover

Button hovers live in `components/ui/Button.tsx`.

| Element | Hover |
| --- | --- |
| Table row | `bg-neutral-50` |
| Menu item | `bg-neutral-100`, a rounded row inside the menu's `p-1` padding |

Every hover uses `transition-colors`.

## Focus

`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600` on every interactive element. Inputs use `focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600`. Never remove the focus ring without replacing it.

## Counter state

The textarea counter ("120 / 8,000", `text-xs text-neutral-500 tabular-nums`) turns `font-medium text-accent-700` from 90% of the limit.

## Rules

- Every list, table and form has a defined empty, loading and error state before it ships.
- Never rely on color alone. Errors also have text.
