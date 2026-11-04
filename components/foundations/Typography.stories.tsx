import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo/Logo";
import { titleStyles } from "@/components/ui/Title/Title";

type Style = { name: string; classes: string; sample: ReactNode; use: string; render?: ReactNode };
const styles: Style[] = [
  { name: "Page title", classes: titleStyles.page, sample: "Applications", use: "<Title level=\"page\">. One per page" },
  { name: "Modal title", classes: titleStyles.modal, sample: "Schedule next step", use: "<Title level=\"modal\">. Modals, left-aligned" },
  { name: "Section title", classes: titleStyles.section, sample: "Nothing here yet", use: "<Title level=\"section\">. Empty state, mobile sheet titles, mobile card company name" },
  { name: "Body", classes: "text-sm", sample: "Paste the job description here. Add any extra details you know.", use: "Default UI text, cells, inputs" },
  { name: "Body emphasis", classes: "text-sm font-medium text-neutral-900", sample: "Acme · Frontend Engineer", use: "Company name in table rows, buttons, toast messages" },
  { name: "Secondary", classes: "text-sm text-neutral-600", sample: "Frontend Engineer", use: "Role, descriptions, helper text" },
  { name: "Small", classes: "text-xs", sample: "Oct 14 · Dana Levi", use: "Meta lines, counters, badges, tags" },
  { name: "Label", classes: "text-xs font-medium text-neutral-600", sample: "Next step", use: "Column headers, section and menu labels" },
  { name: "Wordmark", classes: "<Logo>", sample: "Applyst", use: "\"Applyst\" only, in the AppBar and on the sign-in page", render: <Logo /> },
  { name: "Numbers (modifier)", classes: "text-sm tabular-nums", sample: "Oct 4 · Oct 14 · 1–6 of 24", use: "Add tabular-nums to dates and counts in columns" },
];

function TypographyScale() {
  return (
    <div className="rounded-lg bg-white px-6 py-2 shadow-xs ring-1 ring-neutral-900/5">
      {styles.map((s) => (
        <div
          key={s.name}
          className="grid grid-cols-1 items-baseline gap-2 border-b border-neutral-200 py-3 last:border-0 sm:grid-cols-3 sm:gap-6"
        >
          <div>
            <p className="text-xs font-medium text-neutral-900">{s.name}</p>
            <p className="mt-1 font-mono text-xs text-neutral-500">{s.classes}</p>
            <p className="mt-1 text-xs text-neutral-500">{s.use}</p>
          </div>
          {s.render ? (
            <div className="sm:col-span-2">{s.render}</div>
          ) : (
            <p className={`${s.classes} sm:col-span-2`}>{s.sample}</p>
          )}
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: "Foundations/Typography",
  component: TypographyScale,
  parameters: { layout: "padded" },
} satisfies Meta<typeof TypographyScale>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {};
