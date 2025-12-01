import { Helmet } from 'react-helmet-async';
import { Book, Calendar, Download, TrendingUp, Lightbulb, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import QuotidienSection from './QuotidienSection';
import TraceSection from './TraceSection';
import CalendrierSection from './CalendrierSection';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: 'Quotidien', icon: Book, description: 'Conseils pratiques pour gérer votre véhicule au quotidien' },
    { name: 'Trace', icon: TrendingUp, description: 'Comprendre la valeur de la traçabilité' },
    { name: 'Calendrier d\'Entretien', icon: Calendar, description: 'Entretien saisonnier et recommandations par période' },
    { name: 'Intelligence', icon: Lightbulb, description: 'Technologies et innovations automobiles' },
    { name: 'Transmission', icon: RefreshCw, description: 'Acheter et vendre en toute confiance' }
  ];

  const articles = [
    {
      title: 'Comment l\'AUTYVO Trace augmente la valeur de votre véhicule',
      category: 'Trace',
      date: '15 Nov 2025',
      excerpt: 'Découvrez comment la transparence documentée peut augmenter la valeur de revente de votre véhicule jusqu\'à 20%.',
      image: 'https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Les 5 entretiens essentiels à ne jamais oublier',
      category: 'Quotidien',
      date: '12 Nov 2025',
      excerpt: 'Un guide complet des entretiens indispensables pour maintenir votre véhicule en parfait état.',
      image: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Préparer sa voiture pour l\'hiver : le checklist complet',
      category: 'Calendrier d\'Entretien',
      date: '08 Nov 2025',
      excerpt: 'Tous les points à vérifier avant l\'arrivée du froid pour rouler en toute sécurité.',
      image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'La révolution de la vérification automatique des véhicules',
      category: 'Intelligence',
      date: '05 Nov 2025',
      excerpt: 'Comment l\'IA et les données officielles transforment le marché de l\'occasion.',
      image: 'https://images.pexels.com/photos/2882674/pexels-photo-2882674.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Vendre sa voiture : les 7 erreurs fatales à éviter',
      category: 'Transmission',
      date: '01 Nov 2025',
      excerpt: 'Les pièges les plus courants lors de la vente d\'un véhicule et comment les éviter.',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Contrôle technique : tout comprendre en 5 minutes',
      category: 'Quotidien',
      date: '28 Oct 2025',
      excerpt: 'Les nouvelles normes, les points de contrôle et comment bien préparer votre véhicule.',
      image: 'https://images.pexels.com/photos/4489750/pexels-photo-4489750.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

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
        <title>Blog Autyvo - Conseils et Actualités Automobile</title>
        <meta name="description" content="Découvrez nos guides complets sur l'entretien automobile, la traçabilité, et la valorisation de votre véhicule." />
      </Helmet>
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#183755] to-[#0d2337] text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog Autyvo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conseils d'experts, guides pratiques et actualités pour prendre soin de votre véhicule et optimiser sa valeur
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Explorez nos Catégories
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Trouvez les informations qui vous intéressent
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
                    <Icon className="text-[#02b197] mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xl font-bold text-[#183755] mb-2 group-hover:text-[#02b197] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 text-[#02b197] font-semibold text-sm group-hover:translate-x-2 transition-transform inline-block">
                      Explorer →
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Articles Récents
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Les dernières publications de nos experts
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
                      <span className="bg-[#02b197] text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                        {article.category}
                      </span>
                      <Calendar size={16} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#183755] mb-3 group-hover:text-[#02b197] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <button 
                      onClick={() => setSelectedCategory(article.category)}
                      className="text-[#02b197] font-semibold hover:text-[#183755] transition-colors"
                    >
                      Lire la suite →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#183755] to-[#0d2337] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Essayez AUTYVO Gratuitement
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Gérez votre véhicule en toute transparence et construisez sa valeur jour après jour
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 bg-[#02b197] text-white rounded-lg text-lg font-semibold hover:bg-[#029d81] transition-all transform hover:scale-105 shadow-xl"
            >
              <Download className="mr-2" size={24} />
              Télécharger GRATUITEMENT AUTYVO
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogPage;
