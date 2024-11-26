import prettierConfig from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier"; // Import the plugin using ES module syntax

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], // Applies to all JavaScript files
    languageOptions: {
      sourceType: "module", // Use "module" for ES6 import/export syntax
      ecmaVersion: "latest", // Supports the latest JavaScript syntax
      globals: { browser: true }, // Adds browser-specific globals (like `window`)
      parserOptions: {
        // You can add parser options here, such as ecmaVersion
        // ecmaVersion: 2020, or any other options
      },
    },
    plugins: {
      prettier: eslintPluginPrettier, // Specify Prettier plugin correctly as an object
    },
    rules: {
      semi: ["error", "always"], // Enforce semicolons at the end of statements
      quotes: ["error", "double"], // Enforce double quotes for strings
      "no-unused-vars": "warn", // Warn if there are unused variables
      "no-console": "off", // Allow the use of console.log statements
      "prettier/prettier": "error", // Ensure Prettier issues are flagged as ESLint errors
    },
  },
  prettierConfig, // Ensure prettier settings are applied last
];
