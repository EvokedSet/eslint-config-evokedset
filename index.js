module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-confusing-arrow': ['error', { allowParens: true }],
    'react/jsx-one-expression-per-line': [0, { allow: 'single-child' }],
    'newline-per-chained-call': 0,
    'max-len': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'react/forbid-prop-types': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'no-underscore-dangle': 0,
  },
};
