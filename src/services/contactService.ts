/**
 * Service de gestion des formulaires de contact
 */

import { apiFetch, API_BASE_URL } from './api';

// Types basés sur le DTO backend
export interface ContactFormData {
  variant: 'contact' | 'demo';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  sector?: string;
  subject?: string;
  message?: string;
  consent: boolean;
  website?: string; // honeypot field
}

// Mode développement : mock l'appel API seulement si API_BASE_URL n'est pas définie
const MOCK_MODE = import.meta.env.DEV && !import.meta.env.VITE_API_BASE_URL;

export const contactService = {
  /**
   * Soumettre une demande de contact
   * @param formData - Données du formulaire de contact
   */
  async submitContactRequest(formData: ContactFormData): Promise<void> {
    // Mock pour le développement sans backend
    if (MOCK_MODE) {
      console.log('ContactService [MOCK]: Simulating contact request submission...');
      console.log('ContactService [MOCK]: Form data:', formData);
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('ContactService [MOCK]: Contact request submitted successfully');
      return;
    }

    const endpoint = 'v1/platform/contact';
    
    console.log('ContactService: Submitting contact request to:', `${API_BASE_URL}${endpoint}`);
    
    // Backend retourne 201 Created pour succès
    await apiFetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    
    console.log('ContactService: Contact request submitted successfully (201 Created)');
  }
};
