import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import cardocLogo from '../../assets/images/logo.png';

/**
 * AppLogo - Logo de l'application avec taille standardisée
 * 
 * @param {Object} props
 * @param {boolean} props.clickable - Si true, le logo est cliquable et redirige vers la home (default: true)
 * @param {'small' | 'medium' | 'large'} props.size - Taille du logo (default: 'medium')
 * @param {Object} props.sx - Styles MUI supplémentaires
 */
const AppLogo = ({ clickable = true, size = 'medium', sx = {}, ...props }) => {
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
