import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import love from 'eslint-config-love'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["dist/**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
  },
  {
    rules: {
      "no-console": "off",
      "eol-last": ["error", "always"],
      "semi": ["error", "never"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        },
      ],
      "padded-blocks": [
        "error",
        { "blocks": "never" }
      ]
    }
  }
]
