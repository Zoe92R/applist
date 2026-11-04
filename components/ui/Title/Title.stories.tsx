import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Title, titleStyles } from "@/components/ui/Title/Title";

const meta = {
  title: "UI/Title",
  component: Title,
  tags: ["autodocs"],
  args: { level: "page", children: "Applications" },
  argTypes: {
    level: { control: "inline-radio", options: Object.keys(titleStyles) },
  },
} satisfies Meta<typeof Title>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {};

export const Modal: Story = { args: { level: "modal", children: "Schedule next step" } };

export const Section: Story = { args: { level: "section", children: "Nothing here yet" } };

export const AllLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title level="page">Applications</Title>
      <Title level="modal">Schedule next step</Title>
      <Title level="section">Nothing here yet</Title>
    </div>
  ),
};
