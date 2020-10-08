module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  env: {
    node: true,
    es6: true,
  },
  globals: {
    expect: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    
  }
}
  