import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Autyvo</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Accueil</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/help" style={linkStyle}>Aide</Link>
        <Link to="/legal/terms" style={linkStyle}>CGU</Link>
        <Link to="/legal/privacy" style={linkStyle}>Confidentialité</Link>
      </nav>
    </header>
  );
};

export default Header;
