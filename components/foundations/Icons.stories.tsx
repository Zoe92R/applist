import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, iconNames, type IconName } from "@/components/ui/Icon/Icon";

const usage: Record<IconName, string> = {
  "plus": "New application, Add step",
  "x": "Close, dismiss, remove chip",
  "columns-3": "Fields",
  "chevron-down": "Dropdowns, expand row",
  "chevron-left": "Previous page",
  "chevron-right": "Next page",
  "chevron-up": "Collapse card",
  "arrow-up": "Sort direction",
  "external-link": "View posting",
  "star": "Interest",
  "circle": "Mark step complete",
  "circle-check": "Toast, all steps complete",
  "circle-dashed": "Schedule next step",
  "circle-alert": "Field errors",
  "check": "Selected option, checkbox",
  "search": "Search in dropdowns",
  "list-filter": "Filters",
  "pencil": "Edit steps",
  "trash-2": "Remove step",
  "loader-circle": "Inline loading",
  "user": "Avatar with no name or email",
};


const meta = {
  title: "Foundations/Icons",
  component: Icon,
  tags: ["autodocs"],
  args: { name: "star", size: "md", filled: false },
  argTypes: {
    name: { control: "select", options: iconNames },
    size: { control: "inline-radio", options: ["sm", "md"] },
  },
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Same icon, two props: empty star is neutral-400, filled star is star-500. */
export const Stars: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="star" size="md" className="text-neutral-400" label="Not starred" />
      <Icon name="star" size="md" filled label="Starred" />
    </div>
  ),
};

/** The only filled icons: the pressed star and the "all steps complete" circle-check. */
export const FilledExceptions: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="star" size="md" filled label="Starred" />
      <Icon name="circle-check" size="md" filled label="All steps complete" />
      <Icon name="circle-check" size="md" label="Step complete" />
      <Icon name="circle" size="md" className="text-neutral-400" label="Mark step complete" />
    </div>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
      {iconNames.map((n) => (
        <div
          key={n}
          className="flex flex-col items-center gap-2 rounded-lg bg-white px-3 py-4 shadow-xs ring-1 ring-neutral-900/5"
        >
          <Icon name={n} size="md" />
          <span className="text-xs font-medium text-neutral-900">{n}</span>
          <span className="text-center text-xs text-neutral-500">{usage[n]}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6 text-neutral-600">
      {(["sm", "md"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <Icon name="plus" size={s} />
          <span className="text-xs">{s}</span>
        </div>
      ))}
    </div>
  ),
};
