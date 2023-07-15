export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'th',
        iso: 'th-TH',
        name: 'Thailand',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    vueI18nLoader: true,
    defaultLocale: 'en',
    vueI18n: './lang/i18n.js',
  },
  build: {
    transpile: ['i18n'],
  },
});
