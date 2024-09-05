/** @type { import('@storybook/web-components-vite').StorybookConfig } */
// import autoStoryGenerator from "@takuma-ru/auto-story-generator";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};

export default config;
