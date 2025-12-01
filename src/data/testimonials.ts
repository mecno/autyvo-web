/**
 * Configuration des témoignages clients
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: '', // Sera fourni par i18n
    role: '', // Sera fourni par i18n
    quote: '', // Sera fourni par i18n
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    id: 'testimonial-2',
    name: '', // Sera fourni par i18n
    role: '', // Sera fourni par i18n
    quote: '', // Sera fourni par i18n
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

/**
 * Hook pour récupérer la liste des témoignages
 * Les données textuelles viennent de i18n, les avatars de cette config
 */
export const useTestimonials = (): Testimonial[] => {
  return testimonials;
};
