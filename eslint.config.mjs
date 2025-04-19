import eslint from '@eslint/js';
import TSESLintParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const directoryName = dirname(fileName);

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  prettier,
  [
    {
      languageOptions: {
        parser: TSESLintParser,
        parserOptions: {
          project: './tsconfig.json',
          tsconfigRootDir: directoryName,
          sourceType: 'module',
          ecmaVersion: 2021,
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          es6: true,
          jest: true,
          node: true,
          browser: true,
          commonjs: true,
          serviceworker: true,
          es2021: true,
        },
      },
      plugins: {
        react,
        import: importPlugin,
        'react-hooks': reactHooks,
      },
      rules: {
        ...react.configs.recommended.rules,
        'no-extra-boolean-cast': 'off',
        'no-console': 2,
        'react/prop-types': 0,
        'react/no-unknown-property': 0,
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        '@/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
        ],
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-duplicate-enum-values': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can'],
          },
          {
            selector: 'memberLike',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
            suffix: ['Type', 'Props'],
          },
          {
            selector: 'class',
            format: ['PascalCase'],
            suffix: ['Class'],
            filter: {
              regex: '(ErrorGraphql)',
              match: true,
            },
          },
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
            suffix: ['Type', 'Props'],
            filter: {
              regex: '(Store)$',
              match: false,
            },
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
            suffix: ['Enum'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            suffix: ['Interface', 'Props'],
            filter: {
              regex: '(ProcessEnv)$',
              match: false,
            },
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-floating-promises': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
      },

      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
    {
      ignores: [
        'eslint.config.js',

        // Dependencies
        '*/node_modules/*',
        '*/.pnp',
        '.pnp.js',

        // Testing
        '*/coverage',
        '*/e2e/custom-apps/*',

        // Production
        '*/build/*',

        // Misc
        '.DS_Store',
        '*.pem',

        // Debug
        'npm-debug.log*',
        'yarn-debug.log*',
        'yarn-error.log*',
      ],
    },
  ],
);