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
import { ReactNode } from 'react';
import FlexBox from './FlexBox';

interface StyledFlexBoxProps {
  spacing?: 'none' | 'small' | 'medium';
}

const StyledFlexBox = styled(FlexBox, {
  shouldForwardProp: (prop) => !['spacing'].includes(prop as string),
})<StyledFlexBoxProps>(({ theme, spacing = 'none' }) => {
  const spacingMap = {
    none: 0,
    small: 1,   // mb: 1 (8px)
    medium: 2,  // mb: 2 (16px)
  };

  return {
    marginBottom: theme.spacing(spacingMap[spacing] || 0),
  };
});

interface IconTextRowProps {
  icon: ReactNode;
  children: ReactNode;
  gap?: 'xs' | 'small' | 'medium' | 'large' | number;
  spacing?: 'none' | 'small' | 'medium';
  [key: string]: any;
}

const IconTextRow = ({ icon, children, gap = 'small', spacing = 'none', ...props }: IconTextRowProps) => {
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
