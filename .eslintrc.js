module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    globals: {
        JSX: "readonly"
    },
    extends: [
        'plugin:react/recommended',
        // "airbnb",
        "plugin:jsx-a11y/recommended",
        'standard',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect',
        },
        "import/resolver": {
            "typescript": {}
        },
    },
    plugins: [
        'react',
        '@typescript-eslint',
        "jsx-a11y",
        "prettier"
    ],
    rules: {
        'react/prop-types': 'off',
        'react/jsx-curly-brace-presence': 'error',
        // React 17
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/jsx-boolean-value': 'error',
        'prefer-template': "error",
        'jsx-quotes': ["error", "prefer-double"],
        "react/jsx-tag-spacing": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }]
    }
}
