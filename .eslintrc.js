module.exports = {
  extends: [
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/flowtype',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'flowtype', 'prettier', 'react'],
  rules: {
    'no-console': 'off',
    'one-var': 'off'
  },
  settings: {
    react: {
      version: '16.9.0'
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
}
