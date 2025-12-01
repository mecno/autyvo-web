/**
 * BulletItem - Élément de liste à puces sémantique
 * 
 * ListItem pré-configuré avec spacing uniforme et bullet automatique.
 * Compatible avec le pattern existant des pages CGU.
 * 
 * Props:
 * - children: string - Contenu de l'item (le bullet • est ajouté automatiquement)
 * - variant: 'default' | 'indented' - Style de l'item (default: 'default')
 *   - default: pas d'indentation (px: 0)
 *   - indented: avec indentation (pl: 2)
 * - noBullet: boolean - Supprime le bullet automatique (default: false)
 * 
 * Remplace: 
 * <ListItem sx={{ py: 0.5, px: 0 }}>
 *   <ListItemText primary="..." primaryTypographyProps={{ variant: 'body1' }} />
 * </ListItem>
 * 
 * Usage:
 * ```jsx
 * <BulletList>
 *   <BulletItem>Élément simple</BulletItem>
 *   <BulletItem variant="indented">Élément indenté</BulletItem>
 *   <BulletItem noBullet>Sans bullet</BulletItem>
 * </BulletList>
 * ```
 */

import { ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})(({ variant = 'default' }) => {
  const variantStyles = {
    default: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: 0,
      paddingRight: 0,
    },
    indented: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1rem',  // pl: 2 (16px)
      paddingRight: 0,
    },
  };

  return variantStyles[variant] || variantStyles.default;
});

const BulletItem = ({ children, variant = 'default', noBullet = false, ...props }) => {
  // Pour les items indentés, on ajoute le bullet •
  // Pour les items par défaut sans bullet explicite, on passe le texte tel quel
  const displayText = !noBullet && variant === 'indented' 
    ? `• ${children}` 
    : children;

  return (
    <StyledListItem variant={variant} {...props}>
      <ListItemText 
        primary={displayText}
        primaryTypographyProps={{ variant: 'body1' }}
      />
    </StyledListItem>
  );
};

export default BulletItem;
