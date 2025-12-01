import { Helmet } from 'react-helmet-async';
import { CheckCircle, Wrench, Calendar, AlertCircle, TrendingUp, Shield, Users, Award, FileText, Download } from 'lucide-react';

interface TraceSectionProps {
  onBack: () => void;
}

function TraceSection({ onBack }: TraceSectionProps) {
  const traceContent = {
    hero: {
      title: 'AUTYVO Trace : La Traçabilité qui Renforce la Valeur de Votre Véhicule',
      description: 'Un historique clair et complet augmente la confiance des acheteurs et simplifie la revente. Les principaux acteurs du marché (Argus, AAA Data, La Centrale, Mobilians) rappellent tous que l\'entretien documenté constitue un critère essentiel de valorisation.',
      carnetTitle: 'Votre Carnet Numérique, Toujours Accessible',
      carnetDescription: 'Plus besoin de conserver des factures dans une boîte à gants. AUTYVO centralise vos informations, les horodate et facilite leur vérification lorsque les données proviennent de sources fiables.',
      carnetNote: 'Ces pratiques sont recommandées par la DGCCRF, qui conseille de conserver un historique complet lors d\'une transaction automobile.'
    },
    benefits: [
      {
        icon: TrendingUp,
        title: '1. Valorisation du véhicule',
        description: 'Les guides et experts du marché VO (Argus, La Centrale) soulignent que :',
        details: [
          'Un historique d\'entretien complet renforce la valeur perçue',
          'Il constitue un argument clé lors de la négociation',
          'Il contribue à accélérer la vente'
        ]
      },
      {
        icon: Shield,
        title: '2. Protection & Sécurité',
        description: 'Conserver l\'historique réduit les zones d\'incertitude et simplifie les démarches',
        details: [
          'Horodatage des interventions',
          'Vérification lorsque les données proviennent de documents fiables (factures, CT…)',
          'Constitution d\'un dossier structuré pour tous vos échanges',
          'Recommandé par l\'UFC-Que Choisir et la DGCCRF'
        ]
      },
      {
        icon: Users,
        title: '3. Confiance Acheteur',
        description: 'Selon les études du marché VO (L\'Argus, OVE, AAA Data) :',
        details: [
          'La transparence est un critère prioritaire pour les acheteurs',
          'L\'absence d\'historique génère de la méfiance',
          'Un véhicule documenté se vend plus facilement',
          'AUTYVO facilite cette transparence'
        ]
      }
    ],
    whatToTrace: [
      {
        category: 'Entretiens mécaniques',
        icon: Wrench,
        items: [
          'Révisions périodiques',
          'Vidanges / filtres',
          'Pièces d\'usure (courroie, freins…)',
          'Diagnostics / réparations',
          'Contrôles techniques'
        ]
      },
      {
        category: 'Suivi du quotidien',
        icon: Calendar,
        items: [
          'Pneus',
          'Lavages',
          'Clim',
          'Consommation',
          'Petites interventions'
        ]
      },
      {
        category: 'Événements importants',
        icon: AlertCircle,
        items: [
          'Réparations suite à sinistre',
          'Changement de propriétaire',
          'Modifications',
          'Rappels',
          'Garantie'
        ]
      }
    ],
    statistics: [
      {
        icon: '📈',
        label: 'Meilleure valorisation',
        description: 'quand l\'historique est complet'
      },
      {
        icon: '⚡',
        label: 'Processus de vente',
        description: 'plus fluide'
      },
      {
        icon: '📱',
        label: 'Demande croissante',
        description: 'd\'outils numériques de suivi'
      },
      {
        icon: '✅',
        label: 'Importance pour l\'acheteur',
        description: 'de connaître l\'entretien réel'
      }
    ],
    howItWorks: [
      {
        step: '1',
        title: 'Enregistrez',
        description: 'Capturez vos factures, notes, photos ou interventions directement dans l\'application.'
      },
      {
        step: '2',
        title: 'AUTYVO vérifie et horodate',
        description: 'Les données sont enregistrées à la date réelle et peuvent être vérifiées si elles proviennent de sources fiables.'
      },
      {
        step: '3',
        title: 'Partagez',
        description: 'Générez un dossier clair à transmettre à un professionnel ou à un acheteur.'
      },
      {
        step: '4',
        title: 'Valorisez',
        description: 'Un historique structuré renforce la confiance et facilite la transaction.'
      }
    ],
    sources: [
      {
        name: 'L\'Argus',
        description: 'Comment est calculée la cote',
        url: 'https://www.largus.fr'
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AUTYVO Trace - La Traçabilité Automobile - Blog Autyvo</title>
        <meta name="description" content="Découvrez comment la traçabilité augmente la valeur de votre véhicule et facilite sa revente." />
      </Helmet>
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#183755] to-[#0d2337] text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={onBack}
              className="mb-6 text-[#02b197] hover:text-white transition-colors flex items-center"
            >
              ← Retour aux catégories
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{traceContent.hero.title}</h1>
                <p className="text-xl text-gray-300">
                  {traceContent.hero.description}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FileText className="text-[#02b197] mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-3">{traceContent.hero.carnetTitle}</h3>
                <p className="text-gray-300 mb-4">
                  {traceContent.hero.carnetDescription}
                </p>
                <p className="text-sm text-[#02b197] italic border-l-4 border-[#02b197] pl-3">
                  {traceContent.hero.carnetNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Les 3 Bénéfices Majeurs de la Traçabilité
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Pourquoi documenter l'entretien de votre véhicule change tout
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {traceContent.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-[#02b197]">
                    <Icon className="text-[#02b197] mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-[#183755] mb-3">{benefit.title}</h3>
                    <p className="text-[#02b197] font-semibold mb-6 text-sm">{benefit.description}</p>
                    <ul className="space-y-3">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-1" size={18} />
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

        <section className="py-16 bg-[#02b197] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Tendances Observées sur le Marché de l'Occasion
            </h2>
            <p className="text-center text-gray-100 mb-12 max-w-3xl mx-auto">
              Les tendances constatées par les acteurs institutionnels
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {traceContent.statistics.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-200">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Que Faut-il Tracer ?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Documentez l'intégralité de la vie de votre véhicule pour une valeur maximale
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {traceContent.whatToTrace.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <Icon className="text-[#02b197] mr-3" size={32} />
                      <h3 className="text-xl font-bold text-[#183755]">{section.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-1" size={16} />
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-12 text-center">
              Comment Ça Marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {traceContent.howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-[#183755] to-[#0d2337] text-white p-6 rounded-xl shadow-lg h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#02b197] rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < traceContent.howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#02b197] text-3xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#183755] mb-6 text-center">
              Sources officielles et références
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              {traceContent.sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#183755]">{source.name}</h3>
                    <p className="text-sm text-gray-600">{source.description}</p>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#02b197] hover:text-[#183755] transition-colors text-sm font-semibold"
                  >
                    Voir le site →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#183755] to-[#0d2337] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="mx-auto mb-6 text-[#02b197]" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Commencez à Tracer Dès Aujourd'hui
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Téléchargez AUTYVO gratuitement et construisez l'historique qui valorise votre véhicule
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 bg-[#02b197] text-white rounded-lg text-lg font-semibold hover:bg-[#029d81] transition-all transform hover:scale-105 shadow-xl"
            >
              <Download className="mr-2" size={24} />
              Télécharger GRATUITEMENT
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default TraceSection;
