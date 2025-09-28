import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        ignores: [
            'dist/**',
            'coverage/**',
            'demo/**',
            'eslint.config.js',
            'vite.config.ts',
        ],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['./tsconfig.json']
            }
        },

        plugins: {
            '@typescript-eslint': tseslint.plugin,
            import: importPlugin,
            prettier: prettierPlugin
        },

        rules: {
            'no-console': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal'],
                    'newlines-between': 'always'
                }
            ],

            'prettier/prettier': 'error'
        }
    }
]
