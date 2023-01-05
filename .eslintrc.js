module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  root: true,
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],

    'no-underscore-dangle': 0,
    'react/no-did-update-set-state': 0,
    'react/destructuring-assignment': 0,
    'react-redux/prefer-separate-component-file': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-alert': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'jsx-a11y', 'import'],
  env: {
    jest: true,
    browser: true,
  },
};
