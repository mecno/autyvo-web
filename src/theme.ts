import { createTheme } from '@mui/material/styles';

// Étendre le type Theme de Material-UI pour inclure nos tokens personnalisés
declare module '@mui/material/styles' {
  interface Theme {
    spacingTokens: typeof SPACING;
    categories: typeof COLORS.categories;
  }
  interface ThemeOptions {
    spacingTokens?: typeof SPACING;
    categories?: typeof COLORS.categories;
  }
}

// 🎨 Design Tokens - Valeurs sémantiques centralisées
const SPACING = {
  xs: 1,      // 8px - Espacement minimal
  small: 2,   // 16px - Espacement réduit
  medium: 3,  // 24px - Espacement standard
  large: 4,   // 32px - Espacement élargi
  xl: 6,      // 48px - Espacement très large
  pageVertical: 4,   // Marge verticale des pages
  pageHorizontal: 2, // Marge horizontale des pages
};

// 🎨 Palette de couleurs CarDoc (Brand Identity)
const COLORS = {
  brand: {
    primary: {
      main: '#02B197',
      light: '#04D4B4',
      dark: '#018F7A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#183755',
      light: '#2A4D6E',
      dark: '#0D2133',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#FFCC00',
      light: '#FFD633',
      dark: '#CCA300',
      contrastText: '#000000',
    },
  },
  status: {
    success: '#02B197',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  background: {
    default: '#F8F9FA',
    paper: '#FFFFFF',
  },
  // Couleurs de catégories pour la future gestion de voitures
  categories: {
    income: '#10B981',
    fuel: '#F97316',
    maintenance: '#FFCC00',
    technicalInspection: '#3B82F6',
    photo: '#8B5CF6',
    charging: '#06B6D4',
    toll: '#64748B',
    parking: '#6366F1',
    insurance: '#1E40AF',
    taxes: '#DC2626',
    cleaning: '#0891B2',
    leasing: '#059669',
    fines: '#EF4444',
    drivingLessons: '#EA580C',
    accidentReport: '#DC2626',
    vehicleRegistration: '#1E3A8A',
    other: '#6B7280',
  },
};

// Création du thème de base
let theme = createTheme({
  // 1. Palette de couleurs CarDoc
  palette: {
    primary: {
      main: COLORS.brand.primary.main,
      light: COLORS.brand.primary.light,
      dark: COLORS.brand.primary.dark,
      contrastText: COLORS.brand.primary.contrastText,
    },
    secondary: {
      main: COLORS.brand.secondary.main,
      light: COLORS.brand.secondary.light,
      dark: COLORS.brand.secondary.dark,
      contrastText: COLORS.brand.secondary.contrastText,
    },
    success: {
      main: COLORS.status.success,
      contrastText: '#FFFFFF',
    },
    error: {
      main: COLORS.status.error,
      contrastText: '#FFFFFF',
    },
    warning: {
      main: COLORS.status.warning,
      contrastText: '#000000',
    },
    info: {
      main: COLORS.status.info,
      contrastText: '#FFFFFF',
    },
    background: COLORS.background,
    text: {
      primary: '#1A1A1A',
      secondary: '#4A5568',
      disabled: '#A0AEC0',
    },
  },

  // 2. Typographie CarDoc (inspirée de l'app React Native)
  typography: {
    // Police principale : Inter (via Google Fonts)
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    
    // Tailles de police alignées avec React Native (convertis en rem: px/16)
    fontSize: 14, // Base font size (14px)
    
    // Headings
    h1: {
      fontSize: '1.5rem',      // 24px (5xl)
      fontWeight: 700,         // bold
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '1.375rem',    // 22px (4xl)
      fontWeight: 700,         // bold
      lineHeight: 1.35,
    },
    h3: {
      fontSize: '1.25rem',     // 20px (3xl)
      fontWeight: 600,         // semiBold
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.125rem',    // 18px (2xl)
      fontWeight: 600,         // semiBold
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.0625rem',   // 17px (xl)
      fontWeight: 600,         // semiBold
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',        // 16px (lg)
      fontWeight: 500,         // medium
      lineHeight: 1.5,
    },
    
    // Body text
    body1: {
      fontSize: '0.875rem',    // 14px (base/md)
      fontWeight: 400,         // regular
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',   // 13px (sm)
      fontWeight: 400,         // regular
      lineHeight: 1.6,
    },
    
    // Subtitles
    subtitle1: {
      fontSize: '1rem',        // 16px (lg)
      fontWeight: 500,         // medium
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',    // 14px (md)
      fontWeight: 500,         // medium
      lineHeight: 1.57,
    },
    
    // UI elements
    button: {
      fontSize: '0.875rem',    // 14px (base)
      fontWeight: 500,         // medium
      textTransform: 'none',
      lineHeight: 1.75,
    },
    caption: {
      fontSize: '0.75rem',     // 12px (xs)
      fontWeight: 400,         // regular
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem',     // 12px (xs)
      fontWeight: 600,         // semiBold
      textTransform: 'uppercase',
      lineHeight: 2.66,
    },
  },

  // 3. Espacements personnalisés (accessible via theme.spacingTokens)
  spacingTokens: SPACING,

  // 4. Couleurs de catégories CarDoc (pour la gestion de voitures)
  categories: COLORS.categories,

  // 5. Breakpoints (optionnel - valeurs par défaut MUI)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  // 6. Bordures et ombres
  shape: {
    borderRadius: 8, // Coins arrondis par défaut
  },
});

// 7. Personnalisation des composants avec le thème CarDoc
theme = createTheme(theme, {
  components: {
    // Container - Marges de page standardisées
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(SPACING.pageVertical),
          marginBottom: theme.spacing(SPACING.pageVertical),
        },
      },
    },

    // Paper - Cartes avec élévation et padding
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: theme.spacing(SPACING.large),
          borderRadius: theme.shape.borderRadius,
        },
      },
    },

    // AppBar - Header avec couleur primaire CarDoc
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.brand.primary.main,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },

    // Button - Styles des boutons CarDoc
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Pas de majuscules forcées
          fontWeight: 500,
          borderRadius: theme.shape.borderRadius,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(2, 177, 151, 0.2)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(2, 177, 151, 0.3)',
          },
        },
      },
    },

    // ButtonGroup - Groupe de boutons (pour le sélecteur de langue)
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    // TextField - Champs de formulaire
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: COLORS.brand.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: COLORS.brand.primary.main,
            },
          },
        },
      },
    },

    // Link - Liens avec couleur primaire
    MuiLink: {
      styleOverrides: {
        root: {
          color: COLORS.brand.primary.main,
          '&:hover': {
            color: COLORS.brand.primary.dark,
          },
        },
      },
    },

    // Chip - Pour les futures catégories
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius / 2,
        },
      },
    },
  },
});

export default theme;
