import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/images/logo.png';
import { scrollToElement } from '@/utils/navigation';

const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const scrollToFeatures = () => {
    scrollToElement('gestion-section', navigate, location.pathname);
    setIsMenuOpen(false);
  };

  const scrollToDownload = () => {
    scrollToElement('download', navigate, location.pathname);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={logoImg} alt="AUTYVO" className="h-10" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToFeatures}
              className="text-brand-secondary hover:text-brand-primary transition-colors"
            >
              {t('header.nav.features')}
            </button>
            <Link
              to="/ia"
              className="text-brand-secondary hover:text-brand-primary transition-colors"
            >
              {t('header.nav.technologies')}
            </Link>
            <Link
              to="/pro"
              className="text-brand-secondary hover:text-brand-primary transition-colors"
            >
              {t('header.nav.professionals')}
            </Link>
            <Link
              to="/contact"
              className="text-brand-secondary hover:text-brand-primary transition-colors"
            >
              {t('header.nav.contact')}
            </Link>
            <button
              onClick={scrollToDownload}
              className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              {t('header.cta.download')}
            </button>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-brand-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <button
              onClick={scrollToFeatures}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-2"
            >
              {t('header.nav.features')}
            </button>
            <button
              onClick={() => handleNavigation('/ia')}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-2"
            >
              {t('header.nav.technologies')}
            </button>
            <button
              onClick={() => handleNavigation('/pro')}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-2"
            >
              {t('header.nav.professionals')}
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-2"
            >
              {t('header.nav.contact')}
            </button>
            <button
              onClick={scrollToDownload}
              className="block w-full text-center px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark"
            >
              {t('header.cta.download')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
