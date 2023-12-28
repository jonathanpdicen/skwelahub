module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    plugins: [],
    rules: {
      'no-console': 'off',
      'nuxt/no-cjs-in-config': 'off',
      'vue/no-v-html': 'off',
      'vue/require-prop-types': 'off',
      'comma-dangle': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2, {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 1,
          alignAttributesVertically: true,
          ignores: [],
      }],
    },
  }