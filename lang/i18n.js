import en from './en.json';
import th from './th.json';

export default defineI18nConfig(() => ({
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  legacy: false,
  fallbackLocale: 'en',
  missingWarn: false,
  fallbackWarn: false,
  messages: {
    en,
    th,
  },
}));
