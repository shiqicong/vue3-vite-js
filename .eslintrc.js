module.exports = {
  root: true,

  env: {
    node: true,
  },

  parser: 'vue-eslint-parser',

  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "eslint.autoFixOnSave": true,
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3,
        "allowFirstLine": true
      },
      "multiline": {
        "max": 3,
        "allowFirstLine": false
      }
    }],
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always'
      }
    ],
    indent: [
      'error',
      4
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    quotes: [
      'error',
      'single'
    ],
    'arrow-spacing': 'error',
    'no-const-assign': 'error',
    'no-multiple-template-root': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-boolean-default': 'warn',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-dupe-keys': 'error'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],

  'extends': [
    // 'plugin:vue3/essential',
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    'prettier'
  ]
};
