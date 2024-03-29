module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      "modules": true
    },
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
