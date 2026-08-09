import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // ─────────────────────────────────────────────────────────────
  // Global ignores
  // ─────────────────────────────────────────────────────────────

  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/.expo/**',
      '**/.turbo/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/*.svg',
      'apps/mobile/android/app/.cxx/**',
      'apps/mobile/android/.gradle/**',
      'packages/library/analysis-output/**',
      'packages/database/drizzle/**',
      'pnpm-lock.yaml',
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // JavaScript
  // ─────────────────────────────────────────────────────────────

  js.configs.recommended,

  // ─────────────────────────────────────────────────────────────
  // TypeScript
  // ─────────────────────────────────────────────────────────────

  ...tseslint.configs.recommended,

  // ─────────────────────────────────────────────────────────────
  // Main configuration
  // ─────────────────────────────────────────────────────────────

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],

    plugins: {
      '@next/next': nextPlugin,
      import: importPlugin,
      promise: promisePlugin,
      react,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
      },
    },

    rules: {
      // ==========================================================
      // TYPESCRIPT
      // ==========================================================

      // Biome: correctness.noUnusedImports
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: false,
        },
      ],

      // Biome: style.noParameterAssign
      'no-param-reassign': [
        'error',
        {
          props: true,
        },
      ],

      // Biome: style.noNonNullAssertion
      '@typescript-eslint/no-non-null-assertion': 'off',

      // Biome: style.useImportType
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
        },
      ],

      // Prevent explicit any.
      '@typescript-eslint/no-explicit-any': 'error',

      // Better than allowing empty functions silently.
      '@typescript-eslint/no-empty-function': 'error',

      // Prevent unnecessary type assertions.
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      // Prevent useless type declarations.
      '@typescript-eslint/no-inferrable-types': 'error',

      // ==========================================================
      // CORRECTNESS
      // ==========================================================

      // Biome: noUnusedVariables
      'no-unused-vars': 'off',

      // Biome: noUnreachable
      'no-unreachable': 'error',

      // Biome: noUselessCatchBinding
      'no-useless-catch': 'error',

      // Biome: noUselessReturn
      'no-useless-return': 'error',

      // Biome: noUselessElse
      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],

      // ==========================================================
      // COMPLEXITY
      // ==========================================================

      // Biome: noNestedTernary = off
      'no-nested-ternary': 'off',

      // Biome: noStaticOnlyClass = off
      'no-unnecessary-class': 'off',

      // Biome: noThisInStatic = off
      'no-invalid-this': 'off',

      // Prefer Array.prototype.find().
      // Biome: useArrayFind
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.property.name='filter']",
          message:
            'Prefer Array.prototype.find() when only the first matching element is needed.',
        },
      ],

      // ==========================================================
      // PROMISES
      // ==========================================================

      // Similar purpose to Biome's noFloatingPromises.
      'promise/catch-or-return': [
        'error',
        {
          allowFinally: true,
          allowThen: true,
        },
      ],

      // Similar promise safety checks.
      'promise/no-return-wrap': 'error',
      'promise/always-return': 'error',
      'promise/no-nesting': 'warn',
      'promise/no-new-statics': 'error',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-return-in-finally': 'error',
      'promise/no-multiple-resolved': 'error',
      'promise/no-return-wrap': 'error',

      // ==========================================================
      // IMPORTS
      // ==========================================================

      // Biome: organizeImports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Prevent duplicate imports.
      'import/no-duplicates': 'error',

      // Prevent unresolved imports.
      'import/no-unresolved': 'error',

      // Prevent cycles.
      'import/no-cycle': [
        'error',
        {
          maxDepth: Infinity,
        },
      ],

      // ==========================================================
      // REACT
      // ==========================================================

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // React component naming.
      'react/jsx-pascal-case': 'error',

      // Prevent dangerous JSX.
      'react/no-danger': 'warn',

      // Prevent missing keys.
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],

      // Hooks rules.
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ==========================================================
      // NEXT.JS
      // ==========================================================

      '@next/next/no-html-link-for-pages': 'off',

      '@next/next/no-img-element': 'warn',

      '@next/next/no-unwanted-polyfillio': 'error',

      '@next/next/no-sync-scripts': 'error',

      '@next/next/no-script-component-in-head': 'error',

      '@next/next/no-title-in-document-head': 'error',

      '@next/next/no-document-import-in-page': 'error',

      '@next/next/no-head-import-in-document': 'error',

      '@next/next/no-page-custom-font': 'error',

      // ==========================================================
      // GENERAL STYLE
      // ==========================================================

      // Biome: style.noDefaultExport
      'import/no-default-export': 'error',

      // Biome: style.useBlockStatements = off
      curly: 'off',

      // Prefer const.
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],

      // Prevent var.
      'no-var': 'error',

      // Prevent debugger.
      'no-debugger': 'error',

      // Console is allowed but reported.
      'no-console': 'warn',

      // Prevent unnecessary semicolon.
      'no-extra-semi': 'error',

      // Prevent unreachable code.
      'no-unreachable': 'error',

      // Prevent duplicate case labels.
      'no-duplicate-case': 'error',

      // Prevent duplicate object keys.
      'no-dupe-keys': 'error',

      // Prevent accidental assignments in conditions.
      'no-cond-assign': ['error', 'except-parens'],

      // Prevent confusing arrow syntax.
      'no-confusing-arrow': 'error',

      // ==========================================================
      // COMPLEXITY / CODE QUALITY
      // ==========================================================

      'complexity': [
        'warn',
        {
          max: 15,
        },
      ],

      'max-depth': [
        'warn',
        {
          max: 4,
        },
      ],

      'max-params': [
        'warn',
        {
          max: 5,
        },
      ],

      'max-lines-per-function': [
        'warn',
        {
          max: 150,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // ==========================================================
      // SECURITY / DANGEROUS PATTERNS
      // ==========================================================

      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',

      // ==========================================================
      // SWITCH STATEMENTS
      // ==========================================================

      'default-case-last': 'error',

      // ==========================================================
      // OBJECT / ARRAY SAFETY
      // ==========================================================

      'no-prototype-builtins': 'error',
      'no-array-constructor': 'error',
      'no-new-object': 'error',

      // ==========================================================
      // VARIABLES
      // ==========================================================

      'no-shadow': 'off',

      '@typescript-eslint/no-shadow': 'error',

      // ==========================================================
      // FUNCTIONS
      // ==========================================================

      'func-style': [
        'error',
        'expression',
        {
          allowArrowFunctions: true,
        },
      ],

      // ==========================================================
      // NAMING
      // ==========================================================

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Mobile-specific overrides
  // ─────────────────────────────────────────────────────────────

  {
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}'],

    rules: {
      // React Native doesn't use standard DOM accessibility rules.
      'react/jsx-no-target-blank': 'off',

      // React Native legitimately imports Node-compatible modules
      // in some tooling/runtime contexts.
      'import/no-unresolved': 'off',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // Files where default exports are required/expected
  // ─────────────────────────────────────────────────────────────

  {
    files: [
      '**/*.config.mjs',
      '**/*.config.ts',
      '**/*.d.ts',

      'apps/mobile/app/**/*.tsx',

      'apps/web/src/app/**/error.tsx',
      'apps/web/src/app/**/layout.tsx',
      'apps/web/src/app/**/not-found.tsx',
      'apps/web/src/app/**/page.tsx',
      'apps/web/src/app/**/robots.ts',
      'apps/web/src/app/**/sitemap.ts',

      'apps/web/src/lib/imageLoader.ts',
      'apps/web/src/middleware.ts',
      'apps/web/src/pages/api/**/*.ts',
    ],

    rules: {
      // Next.js/framework files commonly require default exports.
      'import/no-default-export': 'off',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // CSS
  // ─────────────────────────────────────────────────────────────

  {
    files: ['apps/web/src/styles/**/*.css'],

    rules: {},
  },

  // ─────────────────────────────────────────────────────────────
  // Prettier compatibility
  //
  // MUST BE LAST
  // ─────────────────────────────────────────────────────────────

  prettier,
);