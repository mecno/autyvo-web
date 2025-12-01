/**
 * ExternalLink - Lien externe pré-stylisé
 * 
 * Link Material-UI avec styles cohérents pour les liens externes.
 * Inclut automatiquement target="_blank" et rel="noopener noreferrer".
 * 
 * Props:
 * - href: string - URL de destination (required)
 * - children: ReactNode - Contenu du lien (required)
 * - variant: 'primary' | 'secondary' | 'default' - Style du lien (default: 'primary')
 * - weight: 'normal' | 'medium' | 'bold' - Poids de la police (default: 'medium')
 * 
 * Remplace: <Link href="..." target="_blank" rel="..." color="primary" sx={{ fontWeight: 500 }}>
 * 
 * Usage:
 * ```jsx
 * <ExternalLink href="https://cardoc.fr">
 *   Visitez notre site
 * </ExternalLink>
 * 
 * <ExternalLink href="mailto:support@cardoc.fr" variant="secondary">
 *   support@cardoc.fr
 * </ExternalLink>
 * ```
 */

import { Link, LinkProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface StyledLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary' | 'default';
  weight?: 'normal' | 'medium' | 'bold';
}

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => !['variant', 'weight'].includes(prop as string),
})<StyledLinkProps>(({ theme, variant = 'primary', weight = 'medium' }) => {
  const variantStyles = {
    primary: {
      color: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.secondary.main,
    },
    default: {
      color: 'inherit',
    },
  };

  const weightMap = {
    normal: 400,
    medium: 500,
    bold: 600,
  };

  return {
    ...variantStyles[variant],
    fontWeight: weightMap[weight] || weightMap.medium,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  };
});

interface ExternalLinkProps extends Omit<LinkProps, 'variant'> {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'default';
  weight?: 'normal' | 'medium' | 'bold';
}

const ExternalLink = ({ 
  href, 
  children, 
  variant = 'primary', 
  weight = 'medium',
  ...props 
}: ExternalLinkProps) => {
  // Détecte si c'est un lien mailto
  const isMailto = href?.startsWith('mailto:');
  
  return (
    <StyledLink
      href={href}
      variant={variant}
      weight={weight}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noopener noreferrer'}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default ExternalLink;
