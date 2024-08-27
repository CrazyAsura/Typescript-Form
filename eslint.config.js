module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true
    },
    extends: 'standard',
    overrides: [
      {
        env: {
          node: true
        },
        files: [
          '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'no-console': 2,
      'no-useless-catch': 'off',
      'indent': [
        'error',
        4
      ],
      'linebreak-style': [
        'error',
        ((process.platform === 'win32' || process.platform === 'win64') ? 'windows' : 'unix')
      ],
      'quotes': [
        'warn',
        'single',
      ],
      'semi': [
        'error',
        'always'
      ],
      'eol-last': [
        'error',
        'always'
      ]
    }
  }