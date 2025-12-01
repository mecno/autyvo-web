import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Snowflake, Sun, Leaf, Zap, Calendar, AlertCircle, Download } from 'lucide-react';

interface CalendrierSectionProps {
  onBack: () => void;
}

function CalendrierSection({ onBack }: CalendrierSectionProps) {
  const { t } = useTranslation('calendrier');

  // Icon mapping for seasons
  const SEASON_ICONS = [Snowflake, Leaf, Sun, Zap];
  
  // Season color gradients
  const SEASON_COLORS = [
    'from-blue-600 to-blue-800',      // Hiver
    'from-green-500 to-green-700',    // Printemps
    'from-orange-500 to-red-600',     // Été
    'from-yellow-600 to-orange-700'   // Automne
  ];

  // Extract data from translations
  const seasons = (t('seasons.items', { returnObjects: true }) as any[]).map((season, index) => ({
    ...season,
    icon: SEASON_ICONS[index],
    color: SEASON_COLORS[index]
  }));

  const monthlyCalendar = t('monthlyCalendar.months', { returnObjects: true }) as any[];
  const recommendations = t('recommendations.items', { returnObjects: true }) as any[];
  const sourceCategories = t('sources.categories', { returnObjects: true }) as any[];
  const tableHeaders = t('seasons.tableHeaders', { returnObjects: true }) as any;
  const priorityLabels = t('seasons.priorityLabels', { returnObjects: true }) as any;

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
            <p className="text-xl text-gray-300 max-w-4xl">
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Seasons Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('seasons.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('seasons.subtitle')}
            </p>
            <div className="space-y-12">
              {seasons.map((season, index) => {
                const Icon = season.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
                    <div className={`bg-gradient-to-r ${season.color} p-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon size={48} className="mr-4" />
                          <div>
                            <h3 className="text-3xl font-bold">{season.name}</h3>
                            <p className="text-sm opacity-90">{season.period}</p>
                          </div>
                        </div>
                      </div>
                      {season.subtitle && (
                        <p className="mt-3 text-sm opacity-90">{season.subtitle}</p>
                      )}
                    </div>
                    <div className="p-8">
                      <h4 className="text-lg font-bold text-brand-secondary mb-4">Priorités de la Saison</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-brand-secondary">{tableHeaders.defis}</th>
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-brand-secondary">{tableHeaders.actions}</th>
                              <th className="border border-gray-300 px-4 py-2 text-center text-sm font-bold text-brand-secondary">{tableHeaders.priorite}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {season.priorities.map((item: any, idx: number) => (
                              <tr key={idx} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{item.defi}</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{item.action}</td>
                                <td className="border border-gray-300 px-4 py-3 text-center">
                                  <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold ${
                                    item.priority === 'Essentiel' ? 'bg-red-100 text-red-700' :
                                    item.priority === 'Important' ? 'bg-orange-100 text-orange-700' :
                                    'bg-blue-100 text-blue-700'
                                  }`}>
                                    {item.priority === 'Essentiel' ? priorityLabels.essentiel :
                                     item.priority === 'Important' ? priorityLabels.important :
                                     priorityLabels.recommande}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Monthly Calendar Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('monthlyCalendar.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {t('monthlyCalendar.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {monthlyCalendar.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow border-l-4 border-brand-primary">
                  <div className="flex items-center mb-3">
                    <Calendar className="text-brand-primary mr-2" size={20} />
                    <h3 className="font-bold text-brand-secondary">{item.month}</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">{item.focus}</p>
                  <ul className="space-y-2">
                    {item.checks.map((check: string, idx: number) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-brand-primary mr-1">✓</span>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-12 text-center">
              {t('recommendations.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((rec: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{rec.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{rec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-8 text-center">
              {t('sources.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sourceCategories.map((source: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-brand-secondary mb-4">{source.category}</h3>
                  <ul className="space-y-3">
                    {source.links.map((link: any, idx: number) => (
                      <li key={idx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-brand-primary hover:underline block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertCircle className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              {t('cta.subtitle')}
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-primary rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
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

export default CalendrierSection;

