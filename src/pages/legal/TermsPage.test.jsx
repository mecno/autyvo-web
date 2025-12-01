import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import TermsPage from './TermsPage';

// Mock des traductions CGU avec structure complète
const mockCguTranslations = {
  title: 'Conditions Générales d\'Utilisation',
  subtitle: 'Application et Site Web CarDoc',
  lastUpdate: 'Dernière mise à jour le 5 novembre 2025',
  section1: {
    title: '1. Objet et acceptation',
    content: 'Les présentes CGU régissent l\'accès...'
  },
  section2: {
    title: '2. Editeur',
    content: 'L\'application mobile et le site web CarDoc...',
    contact: 'Contact : support@cardoc.fr'
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

// Wrapper pour fournir le Thème MUI
const renderWithTheme = (ui) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('TermsPage', () => {
  it('affiche le titre principal et sous-titre', () => {
    renderWithTheme(<TermsPage />);
    
    expect(screen.getByRole('heading', { level: 1, name: /Conditions Générales/i })).toBeInTheDocument();
    expect(screen.getByText(/Application et Site Web CarDoc/i)).toBeInTheDocument();
    expect(screen.getByText(/Dernière mise à jour/i)).toBeInTheDocument();
  });

  it('utilise les composants sémantiques corrects', () => {
    const { container } = renderWithTheme(<TermsPage />);
    
    // Vérifie la structure avec les composants sémantiques
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toBeInTheDocument();
    
    const container_element = container.querySelector('.MuiContainer-root');
    expect(container_element).toBeInTheDocument();
  });

  it('affiche les sections structurées', () => {
    renderWithTheme(<TermsPage />);
    
    // Vérifie que les titres de sections sont présents
    expect(screen.getByText('1. Objet et acceptation')).toBeInTheDocument();
    expect(screen.getByText('2. Editeur')).toBeInTheDocument();
  });

  it('affiche le contenu des sections', () => {
    renderWithTheme(<TermsPage />);
    
    // Vérifie que le contenu est affiché
    expect(screen.getByText(/Les présentes CGU régissent/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact : support@cardoc.fr/i)).toBeInTheDocument();
  });
});
