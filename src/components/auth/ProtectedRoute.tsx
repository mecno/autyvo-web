import { useEffect, useRef, PropsWithChildren } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Box, CircularProgress } from '@mui/material';

/**
 * Composant de protection de routes
 * Redirige automatiquement vers Keycloak si l'utilisateur n'est pas authentifié
 */
export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !hasRedirected.current) {
      hasRedirected.current = true;
      // Redirection automatique vers Keycloak si non authentifié
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  // Afficher un loader pendant la vérification de l'authentification
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Si non authentifié, afficher un loader pendant la redirection
  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Si authentifié, afficher le contenu protégé
  return children;
}
