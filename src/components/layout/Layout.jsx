import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Le contenu de la page active s'affichera ici */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
