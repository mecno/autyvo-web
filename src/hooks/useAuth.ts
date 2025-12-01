/**
 * Hook d'authentification personnalisé
 * Abstraction pour react-oidc-context qui fournit une API similaire à Auth0
 * Facilite la migration et permet d'ajouter de la logique métier centralisée
 */

import { useAuth as useOidcAuth, User } from 'react-oidc-context';

interface AuthOptions {
  redirect_uri?: string;
  [key: string]: any;
}

interface LogoutOptions {
  post_logout_redirect_uri?: string;
  [key: string]: any;
}

export interface AuthState {
  // ─── État d'authentification ───────────────────────────
  
  /** Indique si l'utilisateur est authentifié */
  isAuthenticated: boolean;
  
  /** Indique si l'authentification est en cours de chargement */
  isLoading: boolean;
  
  /** Profil de l'utilisateur authentifié (claims du token ID) */
  user?: User['profile'];
  
  /** Erreur éventuelle lors de l'authentification */
  error?: Error;

  // ─── Méthodes d'authentification ───────────────────────────
  
  /**
   * Redirige vers la page de login Keycloak
   */
  loginWithRedirect: (options?: AuthOptions) => Promise<void>;
  
  /**
   * Déconnecte l'utilisateur et redirige vers la page de logout Keycloak
   */
  logout: (options?: LogoutOptions) => Promise<void>;
  
  /**
   * Récupère le token d'accès de manière silencieuse
   */
  getAccessTokenSilently: () => Promise<string>;

  /**
   * Rafraîchit le token silencieusement
   */
  refreshToken: () => Promise<void>;

  // ─── Données brutes (au cas où) ────────────────────────────
  
  /**
   * Objet auth complet de react-oidc-context
   */
  _raw: ReturnType<typeof useOidcAuth>;

  /**
   * Token d'accès brut (JWT)
   */
  accessToken?: string;

  /**
   * Token ID brut (JWT)
   */
  idToken?: string;

  /**
   * Scopes accordés
   */
  scopes: string[];
}

/**
 * Hook personnalisé pour l'authentification via Keycloak (OIDC)
 */
export function useAuth(): AuthState {
  const auth = useOidcAuth();

  return {
    // ─── État d'authentification ───────────────────────────────────
    
    /** Indique si l'utilisateur est authentifié */
    isAuthenticated: auth.isAuthenticated,
    
    /** Indique si l'authentification est en cours de chargement */
    isLoading: auth.isLoading,
    
    /** Profil de l'utilisateur authentifié (claims du token ID) */
    user: auth.user?.profile,
    
    /** Erreur éventuelle lors de l'authentification */
    error: auth.error,

    // ─── Méthodes d'authentification ───────────────────────────────
    
    /**
     * Redirige vers la page de login Keycloak
     * @param {Object} options - Options de redirection
     * @returns {Promise<void>}
     */
    loginWithRedirect: async (options: AuthOptions = {}) => {
      try {
        await auth.signinRedirect(options);
      } catch (error) {
        console.error('Erreur lors de la redirection vers le login:', error);
        throw error;
      }
    },
    
    /**
     * Déconnecte l'utilisateur et redirige vers la page de logout Keycloak
     * @param {Object} options - Options de déconnexion
     * @returns {Promise<void>}
     */
    logout: async (options: LogoutOptions = {}) => {
      try {
        await auth.signoutRedirect({
          post_logout_redirect_uri: window.location.origin,
          ...options
        });
      } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        throw error;
      }
    },
    
    /**
     * Récupère le token d'accès de manière silencieuse
     * Compatible avec l'API Auth0 pour faciliter la migration
     * @returns {Promise<string>} Le token d'accès JWT
     */
    getAccessTokenSilently: async () => {
      try {
        // Vérifier si le token existe et est valide
        if (!auth.user?.access_token) {
          throw new Error('Aucun token d\'accès disponible');
        }

        // Vérifier si le token n'est pas expiré
        const expiresAt = auth.user.expires_at;
        if (expiresAt && expiresAt * 1000 < Date.now()) {
          // Token expiré, tenter un refresh silencieux
          await auth.signinSilent();
          return auth.user?.access_token;
        }

        return auth.user.access_token;
      } catch (error) {
        console.error('Erreur lors de la récupération du token:', error);
        throw error;
      }
    },

    /**
     * Rafraîchit le token silencieusement
     * @returns {Promise<void>}
     */
    refreshToken: async () => {
      try {
        await auth.signinSilent();
      } catch (error) {
        console.error('Erreur lors du refresh du token:', error);
        throw error;
      }
    },

    // ─── Données brutes (au cas où) ────────────────────────────────
    
    /**
     * Objet auth complet de react-oidc-context
     * Utilisez ceci si vous avez besoin d'accéder aux fonctionnalités avancées
     */
    _raw: auth,

    /**
     * Token d'accès brut (JWT)
     */
    accessToken: auth.user?.access_token,

    /**
     * Token ID brut (JWT)
     */
    idToken: auth.user?.id_token,

    /**
     * Scopes accordés
     */
    scopes: auth.user?.scope?.split(' ') || [],
  };
}
