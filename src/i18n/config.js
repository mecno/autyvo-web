import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  // Charge les traductions via HTTP (lazy loading)
  .use(HttpApi)
  // Détecte la langue du navigateur
  .use(LanguageDetector)
  // Passe l'instance i18n à react-i18next
  .use(initReactI18next)
  // Initialise i18next
  .init({
    fallbackLng: 'fr', // Français par défaut
    debug: false,
    
    // Définition des namespaces
    ns: ['common', 'cgu', 'help', 'privacy', 'delete-account'], // Liste des namespaces disponibles
    defaultNS: 'common', // Namespace par défaut
    
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    },
    
    detection: {
      // Ordre de détection de la langue
      order: ['localStorage', 'navigator'],
      // Cache la langue sélectionnée
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    
    backend: {
      // Chemin vers les fichiers de traduction par namespace
      // {{lng}} = langue (fr, en), {{ns}} = namespace (common, cgu, help)
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
