// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  icon: {
    customCollections: [
      { prefix: 'my-icon', dir: './assets/icons' }
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    //'@prisma/nuxt'
    '@vueuse/nuxt',
  ],
  pages: true,
  runtimeConfig: {
    databaseUrl: '',
  },
})