/**
 * Autyvo - Constantes de l'application
 * 
 * Ce fichier contient toutes les constantes statiques du projet.
 * Ces valeurs ne changent pas selon l'environnement.
 */

// Contacts 
export const CONTACT_EMAIL = 'contact@autyvo.com';
export const SUPPORT_EMAIL = 'support@autyvo.com';

// URLs 
export const AUTYVO_WEBSITE = 'https://autyvo.com';
export const AUTYVO_HELP_PAGE = 'https://autyvo.com/help';

// Informations société
export const COMPANY_INFO = {
  name: 'Autyvo',
  legalForm: 'SAS',
  capital: '12 000 €',
  siren: '992 651 349',
  rcs: 'Nantes',
  address: {
    street: '1 rue de la Noé',
    postalCode: '44300',
    city: 'Nantes',
    country: 'France',
  },
};

// URLs réseaux sociaux (si nécessaire plus tard)
export const SOCIAL_LINKS = {
  // twitter: 'https://twitter.com/autyvo',
  // linkedin: 'https://linkedin.com/company/autyvo',
  // facebook: 'https://facebook.com/autyvo',
};

// Configuration de l'application
export const APP_CONFIG = {
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'en'],
  appVersion: import.meta.env.VITE_APP_VERSION || '0.0.0',
};
