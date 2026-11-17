// SPDX-FileCopyrightText: 2022 SAP SE or an SAP affiliate company and CLA-assistant contributors
//
// SPDX-License-Identifier: Apache-2.0

const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
    {
        ignores: [
            'node_modules/**',
            'src/client/assets/js/**',
            'src/client/dist/**',
            'src/tests/acceptance_tests/**/*',
            'output/**'
        ]
    },
    js.configs.recommended,
    {
        linterOptions: {
            // ESLint 5 did not report unused disable directives
            reportUnusedDisableDirectives: 'off'
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2017,
                ...globals.node,
                ...globals.mocha,
                $: 'readonly',
                angular: 'readonly',
                chunk: 'writable',
                config: 'writable',
                filters: 'writable',
                ga: 'readonly',
                io: 'readonly',
                models: 'writable',
                module: 'writable',
                moment: 'readonly',
                server: 'writable',
                Papa: 'writable',
                Clipboard: 'writable'
            }
        },
        rules: {
            'dot-notation': 'error',
            'func-call-spacing': 'error',
            'func-name-matching': 'error',
            'handle-callback-err': 'error',
            'no-confusing-arrow': 'error',
            'no-div-regex': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-empty-function': 'error',
            'no-multiple-empty-lines': 'error',
            'no-native-reassign': 'error',
            'no-path-concat': 'error',
            'no-trailing-spaces': 'error',
            'no-undef': 'error',
            'no-unused-expressions': 'error',
            // ESLint 9 changed the defaults to caughtErrors: 'all' and builtinGlobals: true
            'no-unused-vars': ['error', { caughtErrors: 'none' }],
            'no-redeclare': ['error', { builtinGlobals: false }],
            // added to eslint:recommended after ESLint 5; enabling them needs code changes
            'no-constant-binary-expression': 'off',
            'no-prototype-builtins': 'off',
            'no-unassigned-vars': 'off',
            'no-useless-assignment': 'off',
            'preserve-caught-error': 'off',
            'no-use-before-define': [
                'error',
                {
                    functions: false,
                    variables: false
                }
            ],
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            quotes: [
                1,
                'single'
            ],
            'valid-typeof': 'error',
            'semi-spacing': 'error',
            'space-infix-ops': 'error',
            yoda: [
                'error',
                'never'
            ]
        }
    }
]
