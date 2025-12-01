/**
 * Typography Components - Composants typographiques sémantiques
 * 
 * Composants pré-configurés pour une utilisation cohérente.
 * Évite la répétition de variant + props communes.
 */

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * PageTitle - Titre principal de page
 * Remplace: <Typography variant="h3" component="h1" gutterBottom>
 */
export const PageTitle = styled(Typography)(({}) => ({}));
PageTitle.defaultProps = {
  variant: 'h3',
  gutterBottom: true,
};

/**
 * PageSubtitle - Sous-titre de page
 * Remplace: <Typography variant="subtitle1" color="text.secondary" gutterBottom>
 */
export const PageSubtitle = styled(Typography)({});
PageSubtitle.defaultProps = {
  variant: 'subtitle1',
  color: 'text.secondary',
  gutterBottom: true,
};

/**
 * SectionTitle - Titre de section
 * Remplace: <Typography variant="h5" gutterBottom>
 */
export const SectionTitle = styled(Typography)({});
SectionTitle.defaultProps = {
  variant: 'h5',
  gutterBottom: true,
};

/**
 * SectionSubtitle - Sous-titre de section
 * Remplace: <Typography variant="h6" gutterBottom>
 */
export const SectionSubtitle = styled(Typography)({});
SectionSubtitle.defaultProps = {
  variant: 'h6',
  gutterBottom: true,
};

/**
 * BodyText - Texte de corps principal
 * Remplace: <Typography variant="body1">
 */
export const BodyText = styled(Typography)({});
BodyText.defaultProps = {
  variant: 'body1',
};

/**
 * SecondaryText - Texte secondaire
 * Remplace: <Typography variant="body2" color="text.secondary">
 */
export const SecondaryText = styled(Typography)({});
SecondaryText.defaultProps = {
  variant: 'body2',
  color: 'text.secondary',
};

/**
 * CaptionText - Texte d'aide/caption
 * Remplace: <Typography variant="caption" color="text.secondary">
 */
export const CaptionText = styled(Typography)({});
CaptionText.defaultProps = {
  variant: 'caption',
  color: 'text.secondary',
};
