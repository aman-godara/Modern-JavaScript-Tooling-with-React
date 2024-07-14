import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

// TODO: add jest into globals
export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    pluginJs.configs.recommended,
    pluginReactConfig,
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        ignores: ['node_modules', 'dist'],
    },
];