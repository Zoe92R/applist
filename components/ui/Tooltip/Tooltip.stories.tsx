import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { Tooltip } from "@/components/ui/Tooltip/Tooltip";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="px-16 py-12">
        <Story />
      </div>
    ),
  ],
  args: {
    content: "Next page",
    side: "top",
    children: (
      <Button variant="icon" aria-label="Next page">
        <Icon name="chevron-right" className="text-current" />
      </Button>
    ),
  },
  argTypes: {
    content: { control: "text" },
    side: { control: "inline-radio", options: ["top", "bottom"] },
    children: { control: false },
    open: { control: "boolean" },
    onOpenChange: { control: false },
  },
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof meta>;

/** Hover the button, or Tab to it. */
export const IconButton: Story = {};

export const AlwaysOpen: Story = { args: { open: true } };

export const Bottom: Story = { args: { open: true, side: "bottom" } };

/** Shows the full value only when the text is cut off. */
export const TruncatedText: Story = {
  render: function Render() {
    const ref = useRef<HTMLSpanElement>(null);
    const [open, setOpen] = useState(false);
    const text = "Senior Frontend Engineer, Platform";
    return (
      <Tooltip
        content={text}
        open={open}
        onOpenChange={(next) => {
          const el = ref.current;
          setOpen(next && !!el && el.scrollWidth > el.clientWidth);
        }}
      >
        <span ref={ref} className="block w-40 truncate text-sm font-medium text-neutral-900">
          {text}
        </span>
      </Tooltip>
    );
  },
};
