import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = { title: "UI/Button", component: Button } satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: "Button", variant: "primary" } };
export const Secondary: Story = { args: { children: "Button", variant: "secondary" } };
