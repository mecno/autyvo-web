import { useEffect, useRef, PropsWithChildren } from 'react';
import { useAuth } from '@/hooks/useAuth';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
  </div>
);

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
    return <LoadingSpinner />;
  }

  // Si non authentifié, afficher un loader pendant la redirection
  if (!isAuthenticated) {
    return <LoadingSpinner />;
  }

  // Si authentifié, afficher le contenu protégé
  return children;
}
