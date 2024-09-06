import { Button } from "./Button";
import feather from "feather-icons";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: (args) => Button(args),
  argTypes: {
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["none", "icon-left", "icon-right"],
    },
    iconName: {
      control: { type: "select" },
      options: Object.keys(feather.icons),
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const IconLeft = {
  args: {
    primary: true,
    label: "Button",
    iconPosition: "icon-left",
    iconName: "phone",
  },
};
