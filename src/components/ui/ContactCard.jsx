/**
 * ContactCard - Carte de contact stylisée
 * 
 * Box pré-stylisé pour afficher des cartes de contact avec bordure,
 * padding, hover effect et responsive.
 * 
 * Props:
 * - icon: ReactNode - Icône à afficher (Material-UI icon)
 * - title: string - Titre de la carte
 * - description: string - Description
 * - action: ReactNode - Action (Link, Button, etc.)
 * - maxWidth: string | number - Largeur max de la carte (default: '400px')
 * 
 * Remplace: Box complexe avec bordures + hover de HelpPage
 * 
 * Usage:
 * ```jsx
 * <ContactCard
 *   icon={<EmailIcon color="primary" />}
 *   title="Support Email"
 *   description="Contactez notre équipe"
 *   action={<Link href="mailto:...">support@cardoc.fr</Link>}
 * />
 * ```
 */

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionTitle, BodyText } from './Typography';
import FlexBox from './FlexBox';

const StyledCard = styled(Box)(({ theme, maxWidth = '400px' }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxWidth: maxWidth,
  transition: theme.transitions.create(['background-color', 'border-color'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main,
  },
}));

const ContactCard = ({ icon, title, description, action, maxWidth, ...props }) => {
  return (
    <StyledCard maxWidth={maxWidth} {...props}>
      {/* Header avec icône + titre */}
      <FlexBox align="center" gap="small" sx={{ mb: 1 }}>
        {icon}
        <SectionTitle component="h3" gutterBottom={false}>
          {title}
        </SectionTitle>
      </FlexBox>

      {/* Description */}
      {description && (
        <BodyText gutterBottom>
          {description}
        </BodyText>
      )}

      {/* Action (Link, Button, etc.) */}
      {action && (
        <Box>
          {action}
        </Box>
      )}
    </StyledCard>
  );
};

export default ContactCard;
