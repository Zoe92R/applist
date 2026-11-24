import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProcessList } from "@/components/ui/ProcessList/ProcessList";
import { MAX_PROCESS_STEPS } from "@/lib/applications";

const meta = {
  title: "UI/ProcessList",
  component: ProcessList,
  tags: ["autodocs"],
  args: {
    steps: [
      { name: "HR screen", done: true },
      { name: "Tech interview", done: true },
      { name: "Home task", done: false },
      { name: "Final interview", done: false },
    ],
  },
} satisfies Meta<typeof ProcessList>;
export default meta;

type Story = StoryObj<typeof meta>;

/** Two steps done; "Home task" is current. */
export const Default: Story = {};

export const NotStarted: Story = {
  args: {
    steps: [
      { name: "HR screen", done: false },
      { name: "Tech interview", done: false },
      { name: "Final interview", done: false },
    ],
  },
};

/** Every step done: no current step. */
export const AllDone: Story = {
  args: {
    steps: [
      { name: "HR screen", done: true },
      { name: "Tech interview", done: true },
      { name: "Final interview", done: true },
    ],
  },
};

/** The maximum number of steps (MAX_PROCESS_STEPS). */
export const Full: Story = {
  args: {
    steps: [
      "HR screen",
      "Hiring manager",
      "Tech interview",
      "Home task",
      "System design",
      "Team fit",
      "Final interview",
      "Offer call",
    ]
      .slice(0, MAX_PROCESS_STEPS)
      .map((name, i) => ({ name, done: i < 3 })),
  },
};
