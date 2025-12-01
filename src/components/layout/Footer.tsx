import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '1.5rem 2rem',
    marginTop: 'auto'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem'
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} CarDoc - Tous droits réservés</p>
        <nav style={navStyle}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/legal/terms" style={linkStyle}>CGU</Link>
          <Link to="/legal/privacy" style={linkStyle}>Confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
