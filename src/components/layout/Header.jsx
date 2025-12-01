import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { FlexBox, AppLogo } from '../ui';

const Header = () => {
  // Utilise uniquement le namespace 'common'
  const { t, i18n } = useTranslation('common');

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language.split('-')[0]; // Gère 'fr-FR' -> 'fr'

  return (
    <AppBar position="static">
      <Toolbar>
        <FlexBox gap="medium" sx={{ flexGrow: 1 }}>
          <AppLogo size="medium" />
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            {t('header.title')}
          </Typography>
        </FlexBox>
        
        <FlexBox gap="small">
          <Button color="inherit" component={Link} to="/">
            {t('home')}
          </Button>
          <Button color="inherit" component={Link} to="/help">
            {t('help')}
          </Button>
          <Button color="inherit" component={Link} to="/cgu">
            {t('cgu')}
          </Button>
          
          <ButtonGroup variant="outlined" size="small">
            <Button 
              onClick={() => setLanguage('fr')}
              variant={currentLang === 'fr' ? 'contained' : 'outlined'}
              sx={{ 
                color: currentLang === 'fr' ? 'primary.contrastText' : 'inherit',
                borderColor: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              FR
            </Button>
            <Button 
              onClick={() => setLanguage('en')}
              variant={currentLang === 'en' ? 'contained' : 'outlined'}
              sx={{ 
                color: currentLang === 'en' ? 'primary.contrastText' : 'inherit',
                borderColor: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              EN
            </Button>
          </ButtonGroup>
        </FlexBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
