module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'mocha/handle-done-callback': 1,
    'mocha/no-return-and-callback': 1,
    'mocha/no-exclusive-tests': 1,
    'mocha/no-nested-tests': 1,
    'mocha/no-pending-tests': 1,
    'mocha/no-sibling-hooks': 1,
    'func-names': 0,
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  plugins: [
    'import',
    'mocha',
    'chai-friendly',
  ],
};
