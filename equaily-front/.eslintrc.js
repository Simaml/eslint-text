module.exports = {
    "env": {
        "browser": true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'parser': 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "curly": "error",
        "no-console": "warn",
        "no-debugger": "error",
        "no-alert": "error",
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used' }],
        'react/react-in-jsx-scope': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-no-undef': 'error'
    }
};