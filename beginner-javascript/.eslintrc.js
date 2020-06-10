module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-const': 2,
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: [] }],
    'no-use-before-define': ['error', { functions: true, classes: true }],
  },
};
