import { Box, BoxProps } from '@mui/material';
import { Link } from 'react-router-dom';
import cardocLogo from '../../assets/images/logo.png';

interface AppLogoProps extends Omit<BoxProps, 'size'> {
  clickable?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/**
 * AppLogo - Logo de l'application avec taille standardisée
 */
const AppLogo = ({ clickable = true, size = 'medium', sx = {}, ...props }: AppLogoProps) => {
  const sizeMap = {
    small: 32,
    medium: 40,
    large: 56,
  };

  const logoHeight = sizeMap[size] || sizeMap.medium;

  const logoImage = (
    <img 
      src={cardocLogo} 
      alt="CarDoc Logo" 
      style={{ 
        height: `${logoHeight}px`,
        display: 'block'
      }} 
    />
  );

  if (!clickable) {
    return <Box sx={sx} {...props}>{logoImage}</Box>;
  }

  return (
    <Box 
      component={Link} 
      to="/" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        textDecoration: 'none',
        '&:hover': { opacity: 0.9 },
        transition: 'opacity 0.2s',
        ...sx
      }}
      {...props}
    >
      {logoImage}
    </Box>
  );
};

export default AppLogo;
