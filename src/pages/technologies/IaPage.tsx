import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Brain,
  Sparkles,
  Calendar,
  Bell,
  TrendingUp,
  Shield,
  Zap,
  Target,
  CheckCircle,
  AlertTriangle,
  Clock,
  Database,
  Search,
  Cpu,
  LineChart,
  Activity,
  BadgeCheck
} from 'lucide-react';

// Icon mappings (cannot be stored in JSON)
const FEATURE_ICONS = [
  <Brain className="w-12 h-12" />,
  <Calendar className="w-12 h-12" />,
  <Bell className="w-12 h-12" />,
  <TrendingUp className="w-12 h-12" />
];

const CAPABILITY_ICONS = [
  <Search className="w-8 h-8" />,
  <BadgeCheck className="w-8 h-8" />,
  <Cpu className="w-8 h-8" />,
  <LineChart className="w-8 h-8" />,
  <Shield className="w-8 h-8" />,
  <Activity className="w-8 h-8" />
];

const DIFFERENTIATOR_ICONS = [
  <Zap className="w-12 h-12" />,
  <Database className="w-12 h-12" />,
  <Target className="w-12 h-12" />,
  <Clock className="w-12 h-12" />,
  <Shield className="w-12 h-12" />,
  <CheckCircle className="w-12 h-12" />
];

function IaPage() {
  const { t } = useTranslation('ia');
  const [activeFeature, setActiveFeature] = useState<number>(0);

  // Retrieve structured data from translations
  const features = t('features.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    details: string;
  }>;

  const capabilities = t('capabilities.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const useCases = t('useCases.items', { returnObjects: true }) as Array<{
    title: string;
    icon: string;
    scenario: string;
    aiAction: string;
    benefit: string;
  }>;

  const differentiators = t('differentiators.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const activeDetails = features[activeFeature];

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-brand-secondary text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Brain className="w-20 h-20 md:w-24 md:h-24 text-brand-primary" />
                  <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                {t('features.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer p-8 rounded-xl transition-all transform hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white shadow-2xl'
                      : 'bg-gray-50 text-brand-secondary hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    {FEATURE_ICONS[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                  <p className={`text-sm text-center ${activeFeature === index ? 'text-white/90' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-brand-primary">
                  {FEATURE_ICONS[activeFeature]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                    {activeDetails.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {activeDetails.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                {t('capabilities.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('capabilities.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary mr-4">
                      {CAPABILITY_ICONS[index]}
                    </div>
                    <h3 className="text-xl font-bold text-brand-secondary">{capability.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                {t('useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('useCases.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-brand-primary transition-all">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{useCase.icon}</span>
                    <h3 className="text-2xl font-bold text-brand-secondary">{useCase.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-brand-primary mb-1">📍 SITUATION</p>
                      <p className="text-gray-700">{useCase.scenario}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-brand-primary mb-1">🤖 L'IA INTERVIENT</p>
                      <p className="text-gray-700">{useCase.aiAction}</p>
                    </div>

                    <div className="bg-brand-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-brand-secondary mb-1">✨ BÉNÉFICE</p>
                      <p className="text-brand-secondary font-medium">{useCase.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('differentiators.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('differentiators.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <div className="flex justify-center mb-4">
                    <div className="text-brand-primary">
                      {DIFFERENTIATOR_ICONS[index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl p-12 text-white text-center shadow-2xl">
              <Brain className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-secondary rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Sparkles className="mr-2" size={24} />
                  {t('cta.button')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                {t('disclaimer.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('disclaimer.content')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IaPage;
