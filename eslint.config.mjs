// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  ...storybook.configs["flat/recommended"],
  {
    plugins: { tailwindcss },
    settings: {
      tailwindcss: { cssConfigPath: "./app/globals.css" },
    },
    rules: {
      "tailwindcss/no-custom-classname": "error",
      // If one key in an object is quoted, quote them all.
      "quote-props": ["error", "consistent"],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^\\.\\.?/",
              message: 'Use the full "@/..." path instead of a relative import.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ["components/ui/cn.ts"],
    rules: { "tailwindcss/no-custom-classname": "off" },
  },
]);

export default eslintConfig;
