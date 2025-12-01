/**
 * Configuration des partenaires AUTYVO
 */

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  alt: string;
}

export const partners: Partner[] = [
  {
    id: 'kivo',
    name: 'KIVO',
    logo: '/src/assets/images/partners/kivo-logo.jpg',
    url: 'https://incubateur-kivo.fr/',
    alt: 'KIVO - Incubateur',
  },
  {
    id: 'french-tech',
    name: 'La French Tech Nantes',
    logo: '/src/assets/images/partners/french-tech-logo.png',
    url: 'https://lafrenchtech.gouv.fr/fr/',
    alt: 'La French Tech',
  },
  {
    id: 'backcar',
    name: 'Back Car',
    logo: '/src/assets/images/partners/backcar-logo.png',
    url: 'https://www.backcar.fr/',
    alt: 'Back Car',
  },
];

/**
 * Hook pour récupérer la liste des partenaires
 */
export const usePartners = (): Partner[] => {
  return partners;
};
