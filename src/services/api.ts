/**
 * Configuration API pour les appels backend
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface ApiFetchOptions extends RequestInit {
  headers?: HeadersInit;
}

/**
 * Helper pour les appels fetch avec gestion des erreurs
 */
export async function apiFetch<T = unknown>(endpoint: string, options: ApiFetchOptions = {}): Promise<T | void> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  
  // Succès sans body (204 No Content, 201 Created)
  if (response.status === 204 || response.status === 201) {
    return;
  }
  
  // Erreur HTTP
  if (!response.ok) {
    const error: { message?: string } = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }
  
  // Succès avec body JSON (200, etc.)
  return response.json();
}
