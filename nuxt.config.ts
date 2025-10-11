import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
});
