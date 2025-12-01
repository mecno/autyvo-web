/**
 * Paragraph - Composant de paragraphe avec espacement standard
 * 
 * Extension de BodyText avec marginBottom par défaut.
 * Utilisé pour les paragraphes de contenu avec espacement cohérent.
 * 
 * Props:
 * - noMargin: boolean - Supprime le marginBottom (default: false)
 * 
 * Remplace: <BodyText sx={{ mb: 2 }}>
 * 
 * Usage:
 * ```jsx
 * <Paragraph>Mon paragraphe avec espacement standard</Paragraph>
 * <Paragraph noMargin>Paragraphe sans marge</Paragraph>
 * <Paragraph spacing="large">Paragraphe avec espacement large</Paragraph>
 * ```
 */

import { styled } from '@mui/material/styles';
import { TypographyProps } from '@mui/material';
import { BodyText } from './Typography';

interface ParagraphProps extends TypographyProps {
  noMargin?: boolean;
}

const Paragraph = styled(BodyText, {
  shouldForwardProp: (prop) => !['noMargin'].includes(prop as string),
})<ParagraphProps>(({ theme, noMargin = false }) => {
  if (noMargin) {
    return { marginBottom: 0 };
  }

  // Pour garder la compatibilité avec sx={{ mb: 2 }}, on utilise spacing(2) = 16px
  return {
    marginBottom: theme.spacing(2),
  };
});

export default Paragraph;
