import type { Preview } from "@storybook/react";

import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#181C1C",
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
