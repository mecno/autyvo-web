import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import direct des traductions (plus performant que HTTP)
import commonFr from '../locales/fr/common.json';
import commonEn from '../locales/en/common.json';
import cguFr from '../locales/fr/cgu.json';
import cguEn from '../locales/en/cgu.json';
import helpFr from '../locales/fr/help.json';
import helpEn from '../locales/en/help.json';
import privacyFr from '../locales/fr/privacy.json';
import privacyEn from '../locales/en/privacy.json';
import deleteAccountFr from '../locales/fr/delete-account.json';
import deleteAccountEn from '../locales/en/delete-account.json';

// Ressources de traduction
const resources = {
  fr: {
    common: commonFr,
    cgu: cguFr,
    help: helpFr,
    privacy: privacyFr,
    'delete-account': deleteAccountFr,
  },
  en: {
    common: commonEn,
    cgu: cguEn,
    help: helpEn,
    privacy: privacyEn,
    'delete-account': deleteAccountEn,
  },
};

i18n
  // Détecte la langue du navigateur
  .use(LanguageDetector)
  // Passe l'instance i18n à react-i18next
  .use(initReactI18next)
  // Initialise i18next
  .init({
    resources, // Traductions importées directement
    fallbackLng: 'fr', // Français par défaut
    debug: false,
    
    // Définition des namespaces
    ns: ['common', 'cgu', 'help', 'privacy', 'delete-account'], // Liste des namespaces disponibles
    defaultNS: 'common', // Namespace par défaut
    
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    },
    
    detection: {
      // L'ORDRE EST CRUCIAL :
      // 1. 'querystring' : Regarde l'URL en premier (?lng=en ou ?hl=en)
      // 2. 'localStorage' : Si rien dans l'URL, regarde la mémoire
      // 3. 'navigator' : Sinon, utilise la langue du navigateur
      order: ['querystring', 'localStorage', 'navigator'],
      
      // Paramètres acceptés dans l'URL pour définir la langue
      // 'lng' est le standard i18next, 'hl' est utilisé par Google/mobiles
      lookupQuerystring: 'lng',
      
      // Cache la langue détectée pour les prochaines pages
      // Si l'user arrive avec ?lng=en, on met à jour le localStorage immédiatement
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
  });

export default i18n;
