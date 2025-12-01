/**
 * PagePaper - Paper sémantique pour contenu de page
 * 
 * Paper avec élévation et padding standardisés.
 * Variantes: 
 * - elevated (default): elevation={3}
 * - flat: elevation={0}
 * - outlined: elevation={0} + bordure
 * 
 * Remplace: <Paper elevation={3} sx={{ p: 4 }}>
 */

import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const PagePaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme, variant = 'elevated' }) => {
  const baseStyles = {
    padding: theme.spacing(theme.spacingTokens.large),
    borderRadius: theme.shape.borderRadius,
  };

  const variantStyles = {
    elevated: {
      elevation: 1,
      boxShadow: theme.shadows[3],
    },
    flat: {
      elevation: 0,
      boxShadow: 'none',
    },
    outlined: {
      elevation: 0,
      boxShadow: 'none',
      border: `1px solid ${theme.palette.divider}`,
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
  };
});

// Configuration par défaut
PagePaper.defaultProps = {
  variant: 'elevated',
};

export default PagePaper;
