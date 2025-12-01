import { useTranslation } from 'react-i18next';
import { usePartners } from '@/data/partners';
import kivoLogo from '@/assets/images/partners/kivo-logo.jpg';
import frenchTechLogo from '@/assets/images/partners/french-tech-logo.png';
import backcarLogo from '@/assets/images/partners/backcar-logo.png';

// Map des imports statiques (requis par Vite)
const logoMap: Record<string, string> = {
  '/src/assets/images/partners/kivo-logo.jpg': kivoLogo,
  '/src/assets/images/partners/french-tech-logo.png': frenchTechLogo,
  '/src/assets/images/partners/backcar-logo.png': backcarLogo,
};

const TrustSection: React.FC = () => {
  const { t } = useTranslation('landing');
  const partners = usePartners();

  const handlePartnerClick = (url: string, name: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Analytics tracking (optionnel)
    console.log(`Partner clicked: ${name}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-16">
          {t('trust.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <button
              key={partner.id}
              onClick={() => handlePartnerClick(partner.url, partner.name)}
              className="bg-white p-8 rounded-xl shadow-md w-full flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer group"
              aria-label={`Visiter le site de ${partner.name}`}
            >
              <img
                src={logoMap[partner.logo]}
                alt={partner.alt}
                className="w-full h-auto max-h-24 object-contain group-hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
