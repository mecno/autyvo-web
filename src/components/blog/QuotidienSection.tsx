import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Wrench, Clock, Shield, Calendar, AlertCircle, Download } from 'lucide-react';

// Icon mappings for essentials
const ESSENTIAL_ICONS = [Wrench, Clock, Shield];

interface QuotidienSectionProps {
  onBack: () => void;
}

function QuotidienSection({ onBack }: QuotidienSectionProps) {
  const { t } = useTranslation('quotidien');

  // Get data from translations
  const essentials = (t('essentials.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    frequency: string;
    points: string[];
  }>).map((item, index) => ({
    ...item,
    icon: ESSENTIAL_ICONS[index]
  }));

  const tips = t('tips.items', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    subtitle: string;
    content: string;
    detail: string;
    impact: string;
  }>;

  const checklist = {
    daily: {
      title: t('checklist.daily.title'),
      items: t('checklist.daily.items', { returnObjects: true }) as string[]
    },
    weekly: {
      title: t('checklist.weekly.title'),
      items: t('checklist.weekly.items', { returnObjects: true }) as string[]
    },
    monthly: {
      title: t('checklist.monthly.title'),
      items: t('checklist.monthly.items', { returnObjects: true }) as string[]
    },
    seasonal: {
      title: t('checklist.seasonal.title'),
      items: t('checklist.seasonal.items', { returnObjects: true }) as string[]
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={onBack}
              className="mb-6 text-brand-primary hover:text-white transition-colors flex items-center"
            >
              {t('hero.backButton')}
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Essentials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('essentials.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('essentials.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {essentials.map((essential, index) => {
                const Icon = essential.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-brand-primary">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="text-brand-primary" size={48} />
                      <span className="text-xs font-semibold text-brand-secondary bg-brand-primary/10 px-3 py-1 rounded-full">
                        {essential.frequency}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-secondary mb-2">{essential.title}</h3>
                    <p className="text-brand-primary font-semibold mb-6 text-sm">{essential.description}</p>
                    <ul className="space-y-3">
                      {essential.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('tips.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('tips.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{tip.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-brand-secondary">{tip.title}</h3>
                        <p className="text-sm text-brand-primary font-semibold">{tip.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">{tip.content}</p>
                  <p className="text-gray-600 leading-relaxed mb-3 text-sm italic border-l-4 border-brand-primary pl-3">
                    {tip.detail}
                  </p>
                  <div className="flex justify-end">
                    <span className="bg-brand-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {tip.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('checklist.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('checklist.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-brand-secondary mb-4 flex items-center">
                  <Clock className="mr-2 text-brand-primary" size={24} />
                  {checklist.daily.title}
                </h3>
                <ul className="space-y-2">
                  {checklist.daily.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-brand-secondary mb-4 flex items-center">
                  <Calendar className="mr-2 text-brand-primary" size={24} />
                  {checklist.weekly.title}
                </h3>
                <ul className="space-y-2">
                  {checklist.weekly.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-brand-secondary mb-4 flex items-center">
                  <Wrench className="mr-2 text-brand-primary" size={24} />
                  {checklist.monthly.title}
                </h3>
                <ul className="space-y-2">
                  {checklist.monthly.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-brand-secondary mb-4 flex items-center">
                  <AlertCircle className="mr-2 text-brand-primary" size={24} />
                  {checklist.seasonal.title}
                </h3>
                <ul className="space-y-2">
                  {checklist.seasonal.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('cta.subtitle')}
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 bg-brand-primary text-white rounded-lg text-lg font-semibold hover:bg-brand-primary-dark transition-all transform hover:scale-105 shadow-xl"
            >
              <Download className="mr-2" size={24} />
              {t('cta.button')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default QuotidienSection;
