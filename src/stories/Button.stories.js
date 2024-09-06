import { Button } from "./Button";
import feather from "feather-icons";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: (args) => Button(args),
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["none", "left", "right"],
    },
    iconName: {
      control: { type: "select" },
      options: Object.keys(feather.icons),
    },
    link: { control: "text" },
    onClick: { action: "onClick" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    variant: "primary",
    label: "Button",
    size: "medium",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    label: "Button",
    size: "medium",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Medium = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const WithLink = {
  args: {
    size: "medium",
    label: "Button",
    link: "https://example.com",
  },
};

export const IconLeft = {
  args: {
    primary: true,
    label: "Button",
    iconPosition: "left",
    iconName: "phone",
  },
};

export const IconRight = {
  args: {
    primary: true,
    label: "Button",
    iconPosition: "right",
    iconName: "phone",
  },
};

export const Example = {
  args: {
    label: "Show more",
    size: "medium",
    iconPosition: "right",
    iconName: "plus",
  },
};
