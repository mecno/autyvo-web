import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './assets/styles/global.css';
import './i18n/config';

// Composant de chargement pendant le chargement des traductions
const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
  </div>
);

// Configuration OIDC pour Keycloak
const oidcConfig: AuthProviderProps = {
  // URL complète de l'authority Keycloak (avec le realm)
  authority: `${import.meta.env.VITE_KEYCLOAK_URL}/realms/${import.meta.env.VITE_KEYCLOAK_REALM}`,
  
  // Client ID configuré dans Keycloak
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  
  // URL de redirection après authentification
  redirect_uri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URI || window.location.origin,
  
  // Type de réponse OIDC (code = Authorization Code Flow avec PKCE)
  response_type: 'code',
  
  // Scopes demandés
  scope: 'openid profile email',
  
  // Callback après authentification
  onSigninCallback: () => {
    // Récupérer l'URL de destination sauvegardée avant la redirection
    const returnUrl = sessionStorage.getItem('auth_return_url');
    sessionStorage.removeItem('auth_return_url');
    
    // Rediriger vers l'URL d'origine ou nettoyer l'URL actuelle
    if (returnUrl && returnUrl !== '/') {
      window.location.href = returnUrl;
    } else {
      // Nettoyer l'URL des paramètres OIDC après redirection
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  },
  
  // Options supplémentaires
  automaticSilentRenew: true, // Renouvellement automatique du token
  loadUserInfo: true, // Charger les infos utilisateur depuis l'endpoint userinfo
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider {...oidcConfig}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
