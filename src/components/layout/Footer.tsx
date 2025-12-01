import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { STORE_LINKS } from '@/constants';
import googlePlayImg from '@/assets/images/stores/google-play.png';
import appStoreImg from '@/assets/images/stores/apple-store.jpg';
import { scrollToElement } from '@/utils/navigation';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToFaq = () => {
    scrollToElement('faq', navigate, location.pathname);
  };

  return (
    <footer id="download" className="bg-brand-secondary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Section À propos */}
          <div>
            <h3 className="text-lg font-bold mb-3">{t('footer.about.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.about.description')}
            </p>
          </div>

          {/* Section Liens Utiles */}
          <div>
            <h4 className="font-semibold mb-3">{t('footer.links.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={scrollToFaq}
                  className="text-gray-300 hover:text-brand-primary transition-colors"
                >
                  {t('footer.links.faq')}
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-brand-primary transition-colors"
                >
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Télécharger */}
          <div>
            <h4 className="font-semibold mb-3">{t('footer.download.title')}</h4>
            <div className="flex flex-col space-y-2">
              <a
                href={STORE_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={googlePlayImg}
                  alt={t('footer.download.googlePlay')}
                  className="h-10"
                />
              </a>
              <a
                href={STORE_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={appStoreImg}
                  alt={t('footer.download.appStore')}
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Section Légale et Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
              <Link
                to="/legal/privacy"
                className="hover:text-brand-primary transition-colors"
              >
                {t('footer.legal.privacy')}
              </Link>
              <Link
                to="/legal/terms"
                className="hover:text-brand-primary transition-colors"
              >
                {t('footer.legal.terms')}
              </Link>
            </div>
            <p className="text-sm text-gray-300">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
