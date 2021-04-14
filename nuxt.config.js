export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'medtechnika',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/v-mask.js', ssr: false },
    { src: '@/plugins/toast.js', ssr: false },
    { src: '@/plugins/persistedState.client.js' },
    { src: "@/plugins/v-click-outside" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],
  loading: {
    color: '#2bbd86',
  },
  env: {
    API_HOST: 'http://med.app-api.space/api'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'vue-sweetalert2/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  router: {
    middleware: ['initUserSpecificDataFromStorage']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
