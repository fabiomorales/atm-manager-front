import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LOCALE, LOCALES } from './constants';
import ptBR from './messages/pt-BR.json';

export const resources = {
  [LOCALES.BRAZIL]: ptBR,
} as const;

use(initReactI18next).init({
  resources,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: {
    escapeValue: false,
  },
});
