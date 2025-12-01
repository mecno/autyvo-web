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
    
    backend: {
      // Chemin vers les fichiers de traduction par namespace
      // {{lng}} = langue (fr, en), {{ns}} = namespace (common, cgu, help)
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
