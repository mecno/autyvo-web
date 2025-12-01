import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  const mainStyle: React.CSSProperties = {
    flexGrow: 1
  };

  return (
    <div style={containerStyle}>
      <Header />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
