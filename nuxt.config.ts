// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@t3headless/nuxt-typo3'
  ],
  typo3: {
    i18n: {
      default: 'se',
      locales: ['se', 'en']
    },
    api: {
      baseUrl: 'https://api.naturcamping.nu'
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        path: 'hmr/'
      }
    }
  }
})
