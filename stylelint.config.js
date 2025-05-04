/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-prettier'],
  rules: {
    // catch prettier errors through stylelint
    'prettier/prettier': true,
    // allow longhand, avoid buggy auto-fixing
    'declaration-block-no-redundant-longhand-properties': null
  },
  overrides: [
    {
      files: '**/*.css',
      rules: {
        // extend default kebab-case to include camelCase
        'selector-class-pattern': [
          '^[a-z][a-zA-Z0-9-]+$',
          {
            message: (selector) =>
              `Expected class selector "${selector}" to be camelCase or kebab-case`
          }
        ],
        // override default percentage
        'alpha-value-notation': 'number',
        'declaration-property-value-no-unknown': [true]
      }
    }
  ]
};
