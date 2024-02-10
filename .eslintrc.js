module.exports = {
    parser: '@babel/eslint-parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      es2020: true
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off'
    }
  };
  