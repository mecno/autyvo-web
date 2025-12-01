/**
 * CarDoc - Constantes de l'application
 * 
 * Ce fichier contient toutes les constantes statiques du projet.
 * Ces valeurs ne changent pas selon l'environnement.
 */

// Contacts CarDoc
export const CARDOC_CONTACT_EMAIL = 'contact@cardoc.com';
export const CARDOC_SUPPORT_EMAIL = 'support@cardoc.fr';

// URLs CarDoc
export const CARDOC_WEBSITE = 'https://cardoc.fr';
export const CARDOC_HELP_PAGE = 'https://cardoc.fr/help';

// Informations société
export const COMPANY_INFO = {
  name: 'CarDoc',
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
  // twitter: 'https://twitter.com/cardoc',
  // linkedin: 'https://linkedin.com/company/cardoc',
  // facebook: 'https://facebook.com/cardoc',
};

// Configuration de l'application
export const APP_CONFIG = {
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'en'],
  appVersion: import.meta.env.VITE_APP_VERSION || '0.0.0',
};
