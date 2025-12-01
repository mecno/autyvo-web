/**
 * StrongText - Texte en gras sémantique
 * 
 * Extension de BodyText avec fontWeight: 600 par défaut.
 * Utilisé pour mettre en évidence du texte important.
 * 
 * Props:
 * - Toutes les props de Typography
 * 
 * Remplace: <BodyText sx={{ fontWeight: 600 }}>
 * 
 * Usage:
 * ```jsx
 * <StrongText>Texte important en gras</StrongText>
 * <StrongText sx={{ mb: 2 }}>Texte important avec marge</StrongText>
 * ```
 */

import { styled } from '@mui/material/styles';
import { BodyText } from './Typography';

const StrongText = styled(BodyText)({
  fontWeight: 600,
});

export default StrongText;
