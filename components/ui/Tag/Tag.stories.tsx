import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag, TagList, TagOverflow } from "@/components/ui/Tag/Tag";

const stack = ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"];

const meta = {
  title: "UI/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "React" },
  argTypes: {
    size: { control: "inline-radio", options: ["default", "small"] },
  },
} satisfies Meta<typeof Tag>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: "small" } };

/** Hover "+3" to see the hidden tags. */
export const Overflow: Story = {
  render: () => <TagOverflow tags={["Node.js", "PostgreSQL", "AWS"]} />,
};

/** A table cell: the first two tags, then "+3". */
export const List: Story = {
  render: () => <TagList tags={stack} max={2} />,
};

/** Fits by width: drag the box's corner to resize it, and tags move into "+N". */
export const ListFitsWidth: Story = {
  render: () => (
    <div className="w-80 resize-x overflow-hidden rounded-md border border-neutral-300 p-2">
      <TagList tags={stack} />
    </div>
  ),
};

/** Mobile card: small tags wrap instead of overflowing. */
export const ListSmallWrapping: Story = {
  render: () => (
    <div className="w-48">
      <TagList tags={stack} size="small" wrap />
    </div>
  ),
};
