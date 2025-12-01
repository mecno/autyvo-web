/**
 * ContentBox - Box sémantique pour sections de contenu
 * 
 * Box avec spacings prédéfinis selon les tokens du thème.
 * Variantes:
 * - section: Espacement entre sections (mt: medium, mb: large)
 * - compact: Espacement réduit (mt: small, mb: small)
 * - spacious: Espacement large (mt: large, mb: large)
 * - custom: Permet de spécifier spacing via props
 * 
 * Remplace: <Box sx={{ mt: 3, mb: 4 }}>
 */

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContentBox = styled(Box, {
  shouldForwardProp: (prop) => !['variant', 'spacing'].includes(prop),
})(({ theme, variant = 'section', spacing }) => {
  // Si spacing custom est fourni
  if (spacing) {
    return {
      marginTop: theme.spacing(theme.spacingTokens[spacing.top] || spacing.top || 0),
      marginBottom: theme.spacing(theme.spacingTokens[spacing.bottom] || spacing.bottom || 0),
    };
  }

  // Variantes prédéfinies
  const variantStyles = {
    section: {
      marginTop: theme.spacing(theme.spacingTokens.medium),
      marginBottom: theme.spacing(theme.spacingTokens.large),
    },
    compact: {
      marginTop: theme.spacing(theme.spacingTokens.small),
      marginBottom: theme.spacing(theme.spacingTokens.small),
    },
    spacious: {
      marginTop: theme.spacing(theme.spacingTokens.large),
      marginBottom: theme.spacing(theme.spacingTokens.large),
    },
    none: {
      margin: 0,
    },
  };

  return variantStyles[variant] || variantStyles.section;
});

export default ContentBox;
