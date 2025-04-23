import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import * as tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

const config = [
  {
    ignores: ['**/.next/**', '**/node_modules/**', '**/.nx/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
  prettier,
];

export default config;
