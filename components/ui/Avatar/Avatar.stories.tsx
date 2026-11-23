import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "@/components/ui/Avatar/Avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "Zoya Rumin" },
  argTypes: {
    name: { control: "text" },
    email: { control: "text" },
    size: { control: "inline-radio", options: ["default", "small"] },
  },
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FullName: Story = {};

export const FirstNameOnly: Story = { args: { name: "Zoya" } };

/** No name: the first letter of the email. */
export const EmailFallback: Story = {
  args: { name: undefined, email: "zoya.rumin@gmail.com" },
};

/** No name and no email: a generic user icon. */
export const NoNameOrEmail: Story = {
  args: { name: undefined, email: undefined },
};

/** Both sizes side by side: 36px (app bar) and 28px (mobile app bar, compact lists). */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="Zoya Rumin" size="small" />
      <Avatar name="Zoya Rumin" />
    </div>
  ),
};

/** Inside a labeled button (e.g. the account menu trigger): the button's label names the person. The button only needs `group`; the fill follows its hover and open state. */
export const InButton: Story = {
  render: () => (
    <button
      type="button"
      aria-label="Account menu for Zoya Rumin"
      aria-haspopup="menu"
      aria-expanded={false}
      className="group cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <Avatar name="Zoya Rumin" />
    </button>
  ),
};
