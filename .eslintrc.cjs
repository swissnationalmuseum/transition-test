module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    // Add under other rules
    '@vue/prettier',
    'prettier',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'warn',
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['src/graphql/generated/*.ts'],
      rules: {
        'simple-import-sort/imports': 'off',
        'simple-import-sort/exports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.graphql', '*.gql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
};
