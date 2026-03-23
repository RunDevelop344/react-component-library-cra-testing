// src/components/Label/Label.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = Story<typeof Label>;

export const Default: Story = {
  args: {
    text: "Default Label",
    color: "black",
    fontSize: "16px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    color: "black",
    fontSize: "16px",
    disabled: true,
  },
};
