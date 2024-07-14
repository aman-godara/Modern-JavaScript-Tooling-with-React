import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import jest from 'eslint-plugin-jest';

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
    jsxA11y.flatConfigs.recommended,
    jest.configs['flat/recommended'],
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
