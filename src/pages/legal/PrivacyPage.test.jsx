import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import PrivacyPage from './PrivacyPage';

// Mock des traductions Privacy avec structure complète
const mockPrivacyTranslations = {
  title: 'Politique de Confidentialité',
  subtitle: 'Application et Site Web CarDoc',
  lastUpdate: 'Date d\'entrée en vigueur : 05/11/2025',
  preamble: {
    title: 'Préambule',
    content: 'La société CarDoc attache une grande importance...',
    rgpd: 'Cette politique est conforme au RGPD.',
  },
  section1: {
    title: '1. Responsable du Traitement',
    intro: 'Le responsable du traitement...',
    company: 'CarDoc, SAS',
    contact: 'Pour toute question : contact@cardoc.fr',
  },
  section2: {
    title: '2. Données Collectées et Finalités',
    intro: 'CarDoc s\'engage...',
    sectionA: {
      title: 'A. Données collectées lors de l\'inscription',
      intro: 'Selon la méthode...',
      email: {
        title: 'Inscription par E-mail',
        data: 'Données : Adresse e-mail',
      },
      oauth: {
        title: 'Inscription via service tiers',
        data: 'Données : E-mail, Nom, Prénom',
      },
    },
    sectionB: {
      title: 'B. Données collectées lors de l\'utilisation',
      intro: 'Ces données sont...',
      vehicles: {
        title: 'Données relatives aux véhicules',
        data: 'Données : Immatriculation',
      },
      management: {
        title: 'Données de gestion',
        data: 'Données : Documents...',
      },
    },
    sectionC: {
      title: 'C. Données collectées auprès de partenaires',
      intro: 'En utilisant nos services...',
      data: 'Données : Informations administratives',
    },
  },
  section3: {
    title: '3. Destinataires et Partage des Données',
    principles: {
      title: 'CarDoc s\'engage...',
      noSale: 'Non-vente des Données',
    },
    intro: 'Vos données ne sont partagées...',
    hosting: {
      title: 'A. Sous-traitants techniques',
      content: 'Vos données sont stockées...',
    },
    sdk: {
      title: 'B. Fournisseurs de Services',
      intro: 'Nous intégrons des outils...',
      analytics: 'Analyse et Performance',
    },
    legal: {
      title: 'C. Obligations légales',
      content: 'Nous pouvons être amenés...',
    },
  },
  section4: {
    title: '4. Propriété, Hébergement et Transferts',
    ownership: 'Les données vous appartiennent',
  },
  section5: {
    title: '5. Durée de Conservation et Suppression',
    retention: {
      title: 'A. Durée de conservation',
      content: 'Vos données sont conservées...',
    },
    deletion: {
      title: 'B. Suppression du Compte',
      intro: 'Vous gardez le contrôle...',
      process: 'Le processus...',
      anonymization: 'Anonymisation Immédiate',
    },
  },
  section6: {
    title: '6. Vos Droits sur vos Données',
    intro: 'Conformément au RGPD...',
    access: 'Droit d\'accès',
    exercise: 'Pour exercer ces droits...',
  },
  section7: {
    title: '7. Sécurité',
    content: 'CarDoc met en œuvre...',
  },
  section8: {
    title: '8. Modification de la Politique',
    content: 'Nous nous réservons le droit...',
  },
};

// Simuler i18next pour que useTranslation fonctionne
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ 
    t: (key, options) => {
      // Gère les cas avec returnObjects: true
      if (options?.returnObjects) {
        const path = key.replace('privacy:', '');
        const keys = path.split('.');
        let value = mockPrivacyTranslations;
        for (const k of keys) {
          value = value?.[k];
        }
        return value || {};
      }
      
      // Cas simple : renvoie la valeur ou la clé
      const path = key.replace('privacy:', '').replace('common:', '');
      const keys = path.split('.');
      let value = mockPrivacyTranslations;
      for (const k of keys) {
        value = value?.[k];
      }
      
      // Gère les interpolations
      if (typeof value === 'string' && options) {
        return value.replace(/\{\{(\w+)\}\}/g, (_, key) => options[key] || '');
      }
      
      return value || key;
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

describe('PrivacyPage', () => {
  it('affiche le titre principal et sous-titre', () => {
    renderWithTheme(<PrivacyPage />);
    
    expect(screen.getByRole('heading', { level: 1, name: /Politique de Confidentialité/i })).toBeInTheDocument();
    expect(screen.getByText(/Application et Site Web CarDoc/i)).toBeInTheDocument();
    expect(screen.getByText(/Date d'entrée en vigueur/i)).toBeInTheDocument();
  });

  it('utilise les composants sémantiques corrects', () => {
    const { container } = renderWithTheme(<PrivacyPage />);
    
    // Vérifie la structure avec les composants sémantiques
    const paper = container.querySelector('.MuiPaper-root');
    expect(paper).toBeInTheDocument();
    
    const container_element = container.querySelector('.MuiContainer-root');
    expect(container_element).toBeInTheDocument();
  });

  it('affiche toutes les sections principales', () => {
    renderWithTheme(<PrivacyPage />);
    
    // Vérifie que les titres de sections principaux sont présents
    expect(screen.getByText('Préambule')).toBeInTheDocument();
    expect(screen.getByText('1. Responsable du Traitement')).toBeInTheDocument();
    expect(screen.getByText('2. Données Collectées et Finalités')).toBeInTheDocument();
    expect(screen.getByText('3. Destinataires et Partage des Données')).toBeInTheDocument();
    expect(screen.getByText('4. Propriété, Hébergement et Transferts')).toBeInTheDocument();
    expect(screen.getByText('5. Durée de Conservation et Suppression')).toBeInTheDocument();
    expect(screen.getByText('6. Vos Droits sur vos Données')).toBeInTheDocument();
    expect(screen.getByText('7. Sécurité')).toBeInTheDocument();
    expect(screen.getByText('8. Modification de la Politique')).toBeInTheDocument();
  });

  it('utilise les nouveaux composants sémantiques (Paragraph, BulletList)', () => {
    renderWithTheme(<PrivacyPage />);
    
    // Vérifie que le contenu est affiché (provenant des composants Paragraph)
    expect(screen.getByText(/La société CarDoc attache/i)).toBeInTheDocument();
    expect(screen.getByText(/Cette politique est conforme au RGPD/i)).toBeInTheDocument();
  });
});
