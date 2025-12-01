import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FlexBox } from '../ui';
import { APP_CONFIG } from '../../constants';

const Footer = () => {
  // Utilise uniquement le namespace 'common'
  const { t } = useTranslation('common');

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: (theme) => theme.spacing(theme.spacingTokens.medium), 
        mt: 'auto' 
      }}
    >
      <Container maxWidth="lg">
        <FlexBox justify="space-between">
          <Typography variant="body2">
            © {new Date().getFullYear()} CarDoc Web v{APP_CONFIG.appVersion} - {t('footer.rights')}
          </Typography>
          <FlexBox gap="small">
            <MuiLink 
              component={RouterLink} 
              to="/contact" 
              color="inherit" 
              underline="hover"
            >
              {t('footer.contact')}
            </MuiLink>
            <MuiLink 
              component={RouterLink} 
              to="/legal/terms" 
              color="inherit" 
              underline="hover"
            >
              {t('footer.terms')}
            </MuiLink>
            <MuiLink 
              component={RouterLink} 
              to="/legal/privacy" 
              color="inherit" 
              underline="hover"
            >
              {t('footer.privacy')}
            </MuiLink>
          </FlexBox>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default Footer;
