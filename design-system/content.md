# Design system: Content

Copy for the job application tracker (Applyst). Plain, short, sentence-style. The interface sounds like a calm colleague, not a marketing page.

This file is the only place the copy rules are defined: what the UI says, not how it looks. Visual rules (button variants, Alert and toast styling) live in `states.md` and `typography.md`. After changing this file, update the Applyst design system artifact (https://claude.ai/artifact/Bjx3BUNy8SeLAiwtMUQm29).

## Voice

- Plain and short. Sentence case everywhere, never all caps or title case: "New application", not "New Application".
- One warm line is allowed where the user starts something: the parser title "Your next role awaits!". Nowhere else uses exclamation marks.
- Say what happened or what to do. No blame, no jargon, no "oops".

## Buttons

Verbs or nouns the user recognizes: "New application", "Submit", "Save", "Cancel", "Edit steps", "View".

- Loading swaps the label for the action in progress: "Parsing…", "Saving…".

## Errors

- Say what to do, in one short sentence, inline next to the problem. Never in a toast.
- Field error under the field: "Please choose a date."
- Whole-action error: "Something went wrong. Please try again." The user's input stays in place.
- Failed load: a title, one line of help and a "Try again" button.

## Confirmations

Past tense, two to four words: "Application added", "Process saved".

## Empty states

Title plus one line of guidance and one action.

- Title: "Nothing here yet"
- Guidance: "Add your first application to get started."
- Action: "New application".

## Optional fields

Say so in the label: "Interviewer name (optional)".

## Dates

- Short month and day: "Oct 14".
- Add the year only when it isn't the current year: "Oct 14, 2025".
- Relative words only for Next Step: "Today", and "Overdue · Oct 2" for past steps not marked complete.
- Format with `Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })`, adding `year: 'numeric'` when needed.

## Numbers and counters

- Use thousands separators from 1,000: format with `toLocaleString('en-US')`.
- Counters: "120 / 8,000". From 90% of the limit it also says how many are left: "7,640 / 8,000 · 360 left".
- Counts in headers: "0 applications".
