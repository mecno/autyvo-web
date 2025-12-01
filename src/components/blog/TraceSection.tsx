import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Wrench, Calendar, AlertCircle, TrendingUp, Shield, Users, Award, FileText, Download } from 'lucide-react';

// Icon mappings
const BENEFIT_ICONS = [TrendingUp, Shield, Users];
const WHAT_TO_TRACE_ICONS = [Wrench, Calendar, AlertCircle];

interface TraceSectionProps {
  onBack: () => void;
}

function TraceSection({ onBack }: TraceSectionProps) {
  const { t } = useTranslation('trace');

  // Get data from translations
  const benefits = (t('benefits.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    details: string[];
  }>).map((item, index) => ({
    ...item,
    icon: BENEFIT_ICONS[index]
  }));

  const statistics = t('statistics.items', { returnObjects: true }) as Array<{
    icon: string;
    label: string;
    description: string;
  }>;

  const whatToTrace = (t('whatToTrace.items', { returnObjects: true }) as Array<{
    category: string;
    items: string[];
  }>).map((item, index) => ({
    ...item,
    icon: WHAT_TO_TRACE_ICONS[index]
  }));

  const howItWorks = t('howItWorks.steps', { returnObjects: true }) as Array<{
    step: string;
    title: string;
    description: string;
  }>;

  const sources = t('sources.items', { returnObjects: true }) as Array<{
    name: string;
    description: string;
    url: string;
    linkText: string;
  }>;

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
                <p className="text-xl text-gray-300">
                  {t('hero.description')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FileText className="text-brand-primary mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-3">{t('hero.carnetTitle')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('hero.carnetDescription')}
                </p>
                <p className="text-sm text-brand-primary italic border-l-4 border-brand-primary pl-3">
                  {t('hero.carnetNote')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('benefits.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-brand-primary">
                    <Icon className="text-brand-primary mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-brand-secondary mb-3">{benefit.title}</h3>
                    <p className="text-brand-primary font-semibold mb-6 text-sm">{benefit.description}</p>
                    <ul className="space-y-3">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {t('statistics.title')}
            </h2>
            <p className="text-center text-gray-100 mb-12 max-w-3xl mx-auto">
              {t('statistics.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-200">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Trace Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('whatToTrace.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('whatToTrace.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatToTrace.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <Icon className="text-brand-primary mr-3" size={32} />
                      <h3 className="text-xl font-bold text-brand-secondary">{section.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-1" size={16} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-12 text-center">
              {t('howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white p-6 rounded-xl shadow-lg h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-primary text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">
              {t('sources.title')}
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              {sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-brand-secondary">{source.name}</h3>
                    <p className="text-sm text-gray-600">{source.description}</p>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-secondary transition-colors text-sm font-semibold"
                  >
                    {source.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="mx-auto mb-6 text-brand-primary" size={64} />
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

export default TraceSection;
