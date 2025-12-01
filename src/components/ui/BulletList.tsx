/**
 * BulletList - Composant de liste à puces sémantique
 * 
 * List sans padding avec espacement supérieur standard.
 * Utilisé avec BulletItem pour créer des listes à puces cohérentes.
 * 
 * Props:
 * - spacing: 'none' | 'small' | 'medium' - Espacement supérieur (default: 'small')
 * - dense: boolean - Liste compacte (default: false)
 * 
 * Remplace: <List sx={{ mt: 1 }}>
 * 
 * Usage:
 * ```jsx
 * <BulletList>
 *   <BulletItem>Premier élément</BulletItem>
 *   <BulletItem>Deuxième élément</BulletItem>
 * </BulletList>
 * ```
 */

import { List, ListProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BulletListProps extends ListProps {
  spacing?: 'none' | 'small' | 'medium';
}

const BulletList = styled(List, {
  shouldForwardProp: (prop) => !['spacing'].includes(prop as string),
})<BulletListProps>(({ theme, spacing = 'small' }) => {
  const spacingMap = {
    none: 0,
    small: 1,    // mt: 1 (8px) - correspond au pattern existant
    medium: 2,   // mt: 2 (16px)
  };

  return {
    padding: 0,
    marginTop: theme.spacing(spacingMap[spacing] || spacingMap.small),
    marginBottom: 0,
  };
});

export default BulletList;
