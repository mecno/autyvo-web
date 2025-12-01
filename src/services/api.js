/**
 * Configuration API pour les appels backend
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Helper pour les appels fetch avec gestion des erreurs
 * @param {string} endpoint - Endpoint de l'API (ex: '/v1/cardoc/users/me')
 * @param {object} options - Options fetch (method, headers, body, etc.)
 * @returns {Promise<any>} - Réponse JSON ou void pour 204 No Content
 */
export async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  
  // 204 No Content = succès sans body
  if (response.status === 204) {
    return;
  }
  
  // Erreur HTTP
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }
  
  // Succès avec body JSON
  return response.json();
}
