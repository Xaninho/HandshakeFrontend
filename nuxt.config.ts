import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
          {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          },
        ],
    },
    css: [
      '@/assets/css/global.css',
      'mdi/css/materialdesignicons.min.css',
      'vuetify/lib/styles/main.sass'
    ],
    build: {
      transpile: ['vuetify'],
    },
})
