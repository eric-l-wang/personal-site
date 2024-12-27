import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_' 
      }]
    },
    // Add this section to ensure the rule is disabled
    overrides: [
      {
        files: ['**/*.tsx', '**/*.ts'],
        rules: {
          'react/no-unescaped-entities': 'off'
        }
      }
    ]
  }),
]

export default eslintConfig