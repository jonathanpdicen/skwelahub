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
    },
  }