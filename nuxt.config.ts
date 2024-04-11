// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/styles/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'upgrade-insecure-requests'
        }
      ]
    }
  },
  imports: {
    dirs: ['components', 'stores']
  },
  modules: ['@vueuse/nuxt', '@pinia/nuxt', 'nuxt-lodash'],
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'] // => _isLodashDate
    ]
  },
  build: {},
  $production: {
    app: {
      baseURL: '/',
      buildAssetsDir: '/static/'
    },
    runtimeConfig: {
      public: {
        serverApi: 'http://115.159.28.38:3001'
      }
    }
  },
  $development: {
    runtimeConfig: {
      public: {
        // serverApi: 'http://localhost:3001'
        serverApi: 'http://115.159.28.38:3001'
      }
    }
  }
})
