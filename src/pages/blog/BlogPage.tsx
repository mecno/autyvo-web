import { Helmet } from 'react-helmet-async';
import { Book, Calendar, Download, TrendingUp, Lightbulb, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QuotidienSection from '@/components/blog/QuotidienSection';
import TraceSection from '@/components/blog/TraceSection';
import CalendrierSection from '@/components/blog/CalendrierSection';

// Icon mappings for categories
const CATEGORY_ICONS = [Book, TrendingUp, Calendar, Lightbulb, RefreshCw];

function BlogPage() {
  const { t } = useTranslation('blog');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get categories from translations
  const categories = (t('categories.items', { returnObjects: true }) as Array<{
    name: string;
    description: string;
  }>).map((cat, index) => ({
    ...cat,
    icon: CATEGORY_ICONS[index]
  }));

  // Get articles from translations
  const articles = t('articles.items', { returnObjects: true }) as Array<{
    title: string;
    category: string;
    date: string;
    excerpt: string;
    image: string;
  }>;

  // Afficher la section spécifique si une catégorie est sélectionnée
  if (selectedCategory === 'Quotidien') {
    return <QuotidienSection onBack={() => setSelectedCategory(null)} />;
  }

  if (selectedCategory === 'Trace') {
    return <TraceSection onBack={() => setSelectedCategory(null)} />;
  }

  if (selectedCategory === 'Calendrier d\'Entretien') {
    return <CalendrierSection onBack={() => setSelectedCategory(null)} />;
  }

  // Page d'accueil du blog avec catégories et articles
  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('categories.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {t('categories.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:scale-105 text-left group"
                  >
                    <Icon className="text-brand-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xl font-bold text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 text-brand-primary font-semibold text-sm group-hover:translate-x-2 transition-transform inline-block">
                      {t('categories.explore')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4 text-center">
              {t('articles.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {t('articles.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                        {article.category}
                      </span>
                      <Calendar size={16} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <button 
                      onClick={() => setSelectedCategory(article.category)}
                      className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                    >
                      {t('articles.readMore')}
                    </button>
                  </div>
                </article>
              ))}
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

export default BlogPage;
