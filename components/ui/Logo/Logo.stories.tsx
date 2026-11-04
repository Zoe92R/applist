import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "@/components/ui/Logo/Logo";

const meta = {
  title: "UI/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md"] },
  },
} satisfies Meta<typeof Logo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: "sm" } };

export const InAppBar: Story = {
  render: () => (
    <div className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-8">
      <Logo />
    </div>
  ),
};
