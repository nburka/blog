import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      'react/jsx-boolean-value': ['error', 'always'],
      'react/jsx-no-bind': [
        'error',
        { allowArrowFunctions: true, allowFunctions: true }
      ],
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': 'error'
    }
  },
  {
    rules: {
      'constructor-super': 'error',
      curly: 'error',
      'dot-notation': 'error',
      'guard-for-in': 'error',
      'new-parens': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      radix: 'error',
      'use-isnan': 'error',
      'no-shadow': 'error',
      'no-unused-expressions': 'error'
    }
  },
  {
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variableLike', 'memberLike'],
          format: ['camelCase']
        },
        {
          selector: ['property', 'variable'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase']
        },
        {
          // Allow any format in object literals (like this one)
          selector: ['objectLiteralProperty'],
          format: null
        },
        {
          selector: ['function', 'parameter'],
          format: ['camelCase', 'PascalCase']
        },
        { selector: 'typeLike', format: ['PascalCase'] }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            constructors: 'no-public'
          }
        }
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as' }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/unified-signatures': 'error'
    }
  }
];

export default eslintConfig;
