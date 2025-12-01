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
  
  // 204 No Content = succès sans body
  if (response.status === 204) {
    return;
  }
  
  // Erreur HTTP
  if (!response.ok) {
    const error: { message?: string } = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }
  
  // Succès avec body JSON
  return response.json();
}
