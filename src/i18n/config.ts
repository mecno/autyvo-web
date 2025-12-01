import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import direct des traductions (plus performant que HTTP)
import commonFr from '../locales/fr/common.json';
import commonEn from '../locales/en/common.json';
import cguFr from '../locales/fr/cgu.json';
import cguEn from '../locales/en/cgu.json';
import privacyFr from '../locales/fr/privacy.json';
import privacyEn from '../locales/en/privacy.json';
import deleteAccountFr from '../locales/fr/delete-account.json';
import deleteAccountEn from '../locales/en/delete-account.json';
import landingFr from '../locales/fr/landing.json';
import landingEn from '../locales/en/landing.json';
import iaFr from '../locales/fr/ia.json';
import iaEn from '../locales/en/ia.json';
import blogFr from '../locales/fr/blog.json';
import blogEn from '../locales/en/blog.json';
import quotidienFr from '../locales/fr/quotidien.json';
import quotidienEn from '../locales/en/quotidien.json';
import traceFr from '../locales/fr/trace.json';
import traceEn from '../locales/en/trace.json';
import calendrierFr from '../locales/fr/calendrier.json';
import calendrierEn from '../locales/en/calendrier.json';

// Ressources de traduction
const resources = {
  fr: {
    common: commonFr,
    cgu: cguFr,
    privacy: privacyFr,
    'delete-account': deleteAccountFr,
    landing: landingFr,
    ia: iaFr,
    blog: blogFr,
    quotidien: quotidienFr,
    trace: traceFr,
    calendrier: calendrierFr,
  },
  en: {
    common: commonEn,
    cgu: cguEn,
    privacy: privacyEn,
    'delete-account': deleteAccountEn,
    landing: landingEn,
    ia: iaEn,
    blog: blogEn,
    quotidien: quotidienEn,
    trace: traceEn,
    calendrier: calendrierEn,
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
    ns: ['common', 'cgu', 'privacy', 'delete-account', 'landing', 'ia', 'blog', 'quotidien', 'trace', 'calendrier'], // Liste des namespaces disponibles
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
