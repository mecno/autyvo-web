/**
 * PageContainer - Conteneur de page sémantique
 * 
 * Container avec marges verticales standardisées pour toutes les pages.
 * Remplace: <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
 */

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(theme.spacingTokens.pageVertical),
  marginBottom: theme.spacing(theme.spacingTokens.pageVertical),
}));

// Configuration par défaut
PageContainer.defaultProps = {
  maxWidth: 'lg',
};

export default PageContainer;
