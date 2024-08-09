import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from "eslint-config-prettier";
import tsEslint from 'typescript-eslint'

export default tsEslint.config({
  extends: [js.configs.recommended, ...tsEslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'plugin-prettier': pluginPrettier,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    ...eslintConfigPrettier.rules,
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "PascalCase",
          "snake_case",
          "UPPER_CASE"
        ]
      }
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  },
})
