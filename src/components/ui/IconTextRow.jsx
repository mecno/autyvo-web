/**
 * IconTextRow - FlexBox avec icône + contenu pré-configuré
 * 
 * FlexBox optimisé pour afficher une icône alignée avec du texte.
 * Espacement et alignement pré-configurés.
 * 
 * Props:
 * - icon: ReactNode - Icône Material-UI
 * - children: ReactNode - Contenu à afficher à côté de l'icône
 * - gap: 'xs' | 'small' | 'medium' | 'large' - Espacement (default: 'small')
 * - spacing: 'none' | 'small' | 'medium' - Marge inférieure (default: 'none')
 * 
 * Remplace: <FlexBox align="center" gap="small" sx={{ mb: 1 }}>
 * 
 * Usage:
 * ```jsx
 * <IconTextRow icon={<EmailIcon color="primary" />}>
 *   <SectionTitle>Mon titre</SectionTitle>
 * </IconTextRow>
 * 
 * <IconTextRow icon={<LanguageIcon />} spacing="small">
 *   <BodyText>Texte descriptif</BodyText>
 * </IconTextRow>
 * ```
 */

import { styled } from '@mui/material/styles';
import FlexBox from './FlexBox';

const StyledFlexBox = styled(FlexBox, {
  shouldForwardProp: (prop) => !['spacing'].includes(prop),
})(({ theme, spacing = 'none' }) => {
  const spacingMap = {
    none: 0,
    small: 1,   // mb: 1 (8px)
    medium: 2,  // mb: 2 (16px)
  };

  return {
    marginBottom: theme.spacing(spacingMap[spacing] || 0),
  };
});

const IconTextRow = ({ icon, children, gap = 'small', spacing = 'none', ...props }) => {
  return (
    <StyledFlexBox 
      align="center" 
      gap={gap} 
      spacing={spacing}
      {...props}
    >
      {icon}
      {children}
    </StyledFlexBox>
  );
};

export default IconTextRow;
