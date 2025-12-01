import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TermsPage from './TermsPage';

// Mock des traductions CGU avec structure complète
const mockCguTranslations = {
  title: 'Conditions Générales d\'Utilisation',
  subtitle: 'Application et Site Web Autyvo',
  lastUpdate: 'Dernière mise à jour le 5 novembre 2025',
  section1: {
    title: '1. Objet et acceptation',
    content: 'Les présentes CGU régissent l\'accès...'
  },
  section2: {
    title: '2. Editeur',
    content: 'L\'application mobile et le site web Autyvo...',
    contact: 'Contact : support@autyvo.com'
  },
};

// Simuler i18next pour que useTranslation fonctionne
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ 
    t: (key, options) => {
      // Gère les cas avec returnObjects: true
      if (options?.returnObjects) {
        const path = key.replace('cgu:', '');
        return mockCguTranslations[path] || {};
      }
      // Cas simple : renvoie la valeur ou la clé
      const path = key.replace('cgu:', '');
      return mockCguTranslations[path] || key;
    },
    i18n: {
      language: 'fr',
      changeLanguage: vi.fn(),
    },
  }),
}));

describe('TermsPage', () => {
  it('affiche le titre principal', () => {
    render(<TermsPage />);
    
    expect(screen.getByRole('heading', { level: 1, name: /Conditions Générales d'Utilisation/i })).toBeInTheDocument();
  });
});
