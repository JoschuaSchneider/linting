const reactPlugin = require("eslint-plugin-react");
const ignores = require('./common/ignores');

const {recommended, "jsx-runtime": jsxRuntime} = reactPlugin.configs;

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
module.exports = {
  files: ['**/*.tsx', '**/*.jsx'],
  ignores,
  plugins: {react: reactPlugin},
  settings: {
    "react": {
      version: "detect",
    },
  },
  rules: {
    ...recommended.rules,
    ...jsxRuntime.rules,
    'react/prop-types': "off",
    'react/require-default-props': 'off',
    'react/jsx-curly-brace-presence': ["error", "never"],
  },
};
