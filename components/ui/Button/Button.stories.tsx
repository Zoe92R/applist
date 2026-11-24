import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, buttonSizes, buttonVariants } from "@/components/ui/Button/Button";
import { Icon as UiIcon } from "@/components/ui/Icon/Icon";


const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button" },
  argTypes: {
    children: { control: "text" },
    variant: { control: "select", options: Object.keys(buttonVariants) },
    size: { control: "inline-radio", options: Object.keys(buttonSizes) },
    icon: { control: "select", options: [undefined, "plus", "columns-3", "search", "pencil", "trash-2"] },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", children: "Save" },
};
export const Secondary: Story = {
  args: { variant: "secondary", children: "Fields" },
};
export const Tertiary: Story = {
  args: { variant: "tertiary", children: "Cancel" },
};
export const Link: Story = {
  args: { variant: "link", children: "View" },
};
export const Icon: Story = {
  args: { "variant": "icon", "aria-label": "Close", "children": <UiIcon name="x" size="md" className="text-current" /> },
};
export const WithIcon: Story = {
  args: { variant: "primary", icon: "plus", children: "New application" },
};
export const Loading: Story = {
  args: { variant: "primary", loading: true, children: "Parsing…" },
};
export const Disabled: Story = {
  args: { variant: "secondary", disabled: true, children: "Disabled" },
};
export const Small: Story = {
  args: { variant: "secondary", size: "small", icon: "plus", children: "New" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button icon="plus">New application</Button>
        <Button variant="secondary">Fields</Button>
        <Button variant="tertiary">Cancel</Button>
        <Button variant="link">View</Button>
        <Button variant="icon" aria-label="Close">
          <UiIcon name="x" size="md" className="text-current" />
        </Button>
        <Button loading>Parsing…</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="small" icon="plus">New</Button>
        <Button size="small" variant="secondary">Fields</Button>
        <Button size="small" variant="tertiary">Cancel</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button disabled>Save</Button>
        <Button variant="secondary" disabled>Fields</Button>
        <Button variant="tertiary" disabled>Cancel</Button>
        <Button variant="link" disabled>View</Button>
        <Button variant="icon" aria-label="Close" disabled>
          <UiIcon name="x" size="md" className="text-current" />
        </Button>
      </div>
    </div>
  ),
};
