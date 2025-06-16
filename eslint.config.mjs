import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
    },
    plugins: {
      prettier: pluginPrettier,
    },
    extends: [js.configs.recommended, prettier],
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
