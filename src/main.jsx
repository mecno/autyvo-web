import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, CircularProgress, Box } from '@mui/material';
import App from './App.jsx';
import theme from './theme';
import './assets/styles/global.css';
import './i18n/config';

// Composant de chargement pendant le chargement des traductions
const LoadingFallback = () => (
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

// Configuration OIDC pour Keycloak
const oidcConfig = {
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
    // Nettoyer l'URL des paramètres OIDC après redirection
    window.history.replaceState({}, document.title, window.location.pathname);
  },
  
  // Options supplémentaires
  automaticSilentRenew: true, // Renouvellement automatique du token
  loadUserInfo: true, // Charger les infos utilisateur depuis l'endpoint userinfo
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider {...oidcConfig}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<LoadingFallback />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
