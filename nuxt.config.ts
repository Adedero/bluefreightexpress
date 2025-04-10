import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Krub:wght@400;500;600;700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
        }
      ],
      meta: [
        { name: 'description', content: 'Next Port Express offers fast and reliable shipping services for your logistics needs. Get your products delivered safely and on time.' },
        { name: 'keywords', content: 'shipping, logistics, fast shipping, reliable shipping, next port, express delivery, international shipping' },
        { name: 'author', content: 'Next Port Express' }
      ]
    }
  },
  compatibilityDate: "2025-04-08",
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  icon: {
    customCollections: [{ prefix: 'my-icon', dir: './assets/icons' }]
  },
  modules: ['@primevue/nuxt-module', '@nuxt/image', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/tailwindcss', 'nuxt-auth-utils','nuxt-nodemailer'],
  nodemailer: {
    from: `"Next Port Express" <${process.env.EMAIL_USER}>`,
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 0) || 587,
    secure: true,
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  },
  pages: true,
  plugins: [
    '~/plugins/mongodb.server'
  ],
  primevue: {
    components: {
      prefix: 'Prime'
    },
    options: {
      ripple: true,
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '{indigo.50}',
              100: '{indigo.100}',
              200: '{indigo.200}',
              300: '{indigo.300}',
              400: '{indigo.400}',
              500: '{indigo.500}',
              600: '{indigo.600}',
              700: '{indigo.700}',
              800: '{indigo.800}',
              900: '{indigo.900}',
              950: '{indigo.950}'
            }
          }
        }),
        options: {
          prefix: 'p',
          darkModeSelector: 'none',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      }
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    editorSupport: true
  }
})