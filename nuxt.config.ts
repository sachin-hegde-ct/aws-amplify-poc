import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['@/assets/sass/main.scss'],
  alias: {
    '@aws-amplify/core': '@aws-amplify/core/lib',
    '@aws-amplify/auth': '@aws-amplify/auth/lib',
    tslib: 'tslib/tslib.es6.js',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/bootstrap.client.ts', '~plugins/amplify-client.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/auth',
    },
    {
      path: '~/components/base',
    },
    {
      path: '~/components/base/form',
    },
    {
      path: '~/components/global',
    },
    {
      path: '~/layouts',
    },
  ],
});
