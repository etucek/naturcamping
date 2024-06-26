// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //ssr: false,
  nitro: {
    static: true
  },
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
