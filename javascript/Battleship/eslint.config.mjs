import config from "eslint-config-standard";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  config,
  prettierConfig, // Ensure prettier settings are applied last
  {
    files: ["**/*.js"], // Applies to all JavaScript files
    languageOptions: {
      sourceType: "module", // Use "module" if you’re using ES6 import/export syntax
      ecmaVersion: "latest", // Supports the latest JavaScript syntax
      globals: { browser: true }, // Adds browser-specific globals
    },
    plugins: ["prettier"], // Adds the Prettier plugin
    rules: {
      "prettier/prettier": "error", // Ensures Prettier issues are flagged as ESLint errors
      semi: ["error", "always"], // Enforce semicolons at the end of statements
      quotes: ["error", "double"], // Enforce double quotes for strings
      "no-unused-vars": "warn", // Warn if there are unused variables
      "no-console": "off", // Allows console.log statements
    },
  },
];
