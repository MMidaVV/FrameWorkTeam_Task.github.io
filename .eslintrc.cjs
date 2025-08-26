const { rules } = require('eslint-config-prettier');

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'vue/html-indent': 'off'
  },
};
