/**
 * Service de gestion des utilisateurs
 */

import { apiFetch, API_BASE_URL } from './api';

// Mode développement : mock l'appel API si le token est "mock-token-for-testing"
const MOCK_MODE = import.meta.env.DEV;

export const userService = {
  /**
   * Supprimer le compte de l'utilisateur connecté
   */
  async deleteAccount(token: string): Promise<void> {
    // Mock pour le développement sans backend
    if (MOCK_MODE && token === 'mock-token-for-testing') {
      console.log('UserService [MOCK]: Simulating account deletion...');
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('UserService [MOCK]: Account deleted successfully');
      return;
    }

    const endpoint = 'v1/cardoc/users/me';
    
    console.log('UserService: Deleting user account at:', `${API_BASE_URL}${endpoint}`);
    
    // Backend retourne 204 No Content pour succès
    await apiFetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    console.log('UserService: User account deleted successfully (204 No Content)');
  }
};
