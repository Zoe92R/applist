# Design system: Motion

Motion for the job application tracker (Applyst). Short and quiet: motion confirms what happened, it never decorates.

This file is the only place the timings are defined. After changing it, update the Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29).

## Timing

| What | Enter | Exit |
| --- | --- | --- |
| Menu, Select, Tooltip | fade + scale from 95%, 100ms `ease-out` | fade, 75ms `ease-in` |
| Modal | overlay fade + dialog fade/scale from 95%, 200ms `ease-out` | 150ms `ease-in` |
| Bottom sheet (mobile) | slide up from below, 250ms `ease-out` | slide down, 200ms `ease-in` |
| Toast | slide down 8px + fade, 200ms `ease-out` | fade, 150ms `ease-in` |
| Hover colors | `transition-colors` (150ms default) | |

## Principles

- **Small is fast, big is slower.** Small surfaces (menus, tooltips) take 100ms; page-covering ones (modals, sheets) take 200 to 250ms.
- **Exits are shorter than entrances.** The user already decided to close it, so don't make them wait.
- **`ease-out` in, `ease-in` out.** Things decelerate into place and accelerate away.
- **Scale from 95%, never from 0.** Anything more reads as bouncy, which doesn't fit a calm, dense tool.
- Only the timings above. Don't add durations per component.

## Reduced motion

Everything respects `prefers-reduced-motion`.

- Slides and scales become a plain fade, or nothing.
- In Tailwind: `motion-safe:` to animate only when allowed, `motion-reduce:` to turn it off.
- The only continuous animations are the loading pulse (`motion-safe:animate-pulse`) and the spinner (`motion-reduce:animate-none`). Both are off under reduced motion.
- No animation is the only way to communicate something. Loading also sets `aria-busy` and a status message.

## Don't

- No decorative or looping animation, no parallax.
- No motion on page load, only on user actions and state changes.
