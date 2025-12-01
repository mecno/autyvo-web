/**
 * Utilitaires de navigation avec scroll
 */

/**
 * Navigue vers un élément avec scroll, gère la navigation inter-pages
 * @param elementId - L'ID de l'élément cible
 * @param navigate - La fonction navigate de React Router
 * @param currentPath - Le chemin actuel (location.pathname)
 * @param targetPath - Le chemin où se trouve l'élément (par défaut '/')
 */
export const scrollToElement = (
  elementId: string,
  navigate: (path: string) => void,
  currentPath: string,
  targetPath: string = '/'
): void => {
  if (currentPath === targetPath) {
    // Déjà sur la bonne page, scroll direct
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Navigation vers la page cible avec hash
    navigate(`${targetPath}#${elementId}`);
  }
};

/**
 * Hook pour gérer le scroll au chargement basé sur le hash de l'URL
 * À utiliser dans le composant de destination (ex: LandingPage)
 */
export const useScrollToHash = (): void => {
  // Utiliser dans un useEffect avec location.hash comme dépendance
  const hash = window.location.hash.slice(1); // Retire le #
  if (hash) {
    // Petit délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
};
