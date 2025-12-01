/**
 * Autyvo - Constantes de l'application
 * 
 * Ce fichier contient toutes les constantes statiques du projet.
 * Ces valeurs ne changent pas selon l'environnement.
 */

// Nom du produit
export const PRODUCT_NAME = 'Autyvo';

// Contacts 
export const CONTACT_EMAIL = 'contact@autyvo.com';
export const SUPPORT_EMAIL = 'support@autyvo.com';

// URLs 
export const AUTYVO_WEBSITE = 'https://autyvo.com';
export const AUTYVO_HELP_PAGE = 'https://autyvo.com/help';

// URLs des stores
export const STORE_LINKS = {
  googlePlay: 'https://play.google.com/store/apps/details?id=com.autyvo.app',
  appStore: 'https://apps.apple.com/app/autyvo/id123456789',
};

// Entité légale (éditeur)
export const LEGAL_ENTITY = {
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

// Informations société (pour compatibilité - à supprimer progressivement)
export const COMPANY_INFO = LEGAL_ENTITY;

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
