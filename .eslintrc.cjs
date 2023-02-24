/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    '@vue/eslint-config-typescript',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'indent': 0,
    'comma-dangle': 0,
    'no-shadow': 0,
    'vue/multi-word-component-names':0,
    "linebreak-style":0,
  }
};
