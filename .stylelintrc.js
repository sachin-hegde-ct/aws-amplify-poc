module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'order/properties-alphabetical-order': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    'scss/at-import-no-partial-leading-underscore': null,
  },
};
