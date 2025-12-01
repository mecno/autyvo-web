import { Helmet } from 'react-helmet-async';
import { CheckCircle, Wrench, Clock, Shield, Calendar, AlertCircle, Download } from 'lucide-react';

interface QuotidienSectionProps {
  onBack: () => void;
}

function QuotidienSection({ onBack }: QuotidienSectionProps) {
  const quotidienContent = {
    hero: {
      title: 'Gestion Quotidienne de Votre Véhicule : Préserver Valeur et Performance',
      description: 'Maîtrisez les gestes essentiels d\'entretien pour garantir la sécurité, l\'efficacité et maintenir la valeur de revente de votre automobile (selon les directives des constructeurs automobiles et organismes de sécurité).'
    },
    essentials: [
      {
        icon: Wrench,
        title: 'Contrôles Hebdomadaires',
        description: 'Sécurité Active et Efficacité énergétique',
        frequency: 'Chaque semaine',
        points: [
          'Pression des Pneus : Vérification à froid (y compris la roue de secours)',
          'Niveau d\'Huile Moteur : À contrôler moteur froid sur sol plat',
          'Feux et Signalisation : Clignotants, feux de stop, feux de croisement et de route (Sécurité Routière)'
        ]
      },
      {
        icon: Clock,
        title: 'Entretien Mensuel',
        description: 'Visibilité et Fiabilité des Systèmes',
        frequency: 'Chaque mois',
        points: [
          'Niveaux de Fluides : Liquide de refroidissement et Liquide Lave-glace',
          'Essuie-glaces : État du caoutchouc et efficacité de balayage',
          'Freinage : Inspection visuelle des disques et plaquettes (usure)',
          'Batterie : Propreté et serrage des cosses'
        ]
      },
      {
        icon: Shield,
        title: 'Maintenance Préventive',
        description: 'Longévité Mécanique et Maintien de la Garantie',
        frequency: 'Au Kilométrage/Annuellement',
        points: [
          'Suivi du Carnet : Respecter scrupuleusement les intervalles prescrits par le constructeur',
          'Remplacement des Pièces d\'Usure : Courroie, bougies, filtres, etc. (prévention des pannes coûteuses)',
          'Traçabilité : Documenter chaque intervention pour maintenir la garantie'
        ]
      }
    ],
    tips: [
      {
        icon: '📉',
        title: 'Éco-conduite et Maîtrise de la Consommation',
        subtitle: 'Réduction de Consommation (ADEME)',
        content: 'Adoptez une conduite souple, sans accélérations ni freinages brusques, et maintenez une vitesse constante. L\'anticipation des ralentissements est la clé de l\'éco-conduite.',
        detail: 'Des pneus sous-gonflés augmentent la consommation jusqu\'à 2,4% et réduisent la tenue de route (ACEA). Vérifiez la pression régulièrement à froid en vous référant à l\'étiquette constructeur.',
        impact: 'Jusqu\'à 2,4% d\'économie'
      },
      {
        icon: '⚙️',
        title: 'Longévité du Moteur et Lubrification',
        subtitle: 'Démarrage à Froid',
        content: 'Laissez le moteur tourner au ralenti quelques instants avant de partir et évitez les régimes élevés tant que l\'huile n\'a pas atteint sa température de fonctionnement optimale (généralement après 5 à 10 minutes).',
        detail: 'Utilisez impérativement l\'huile moteur homologuée spécifiée dans le manuel du véhicule. Le respect des intervalles de vidange est le facteur numéro un pour la préservation du moteur.',
        impact: 'Longévité moteur optimale'
      },
      {
        icon: '✨',
        title: 'Protection de la Carrosserie et Valeur de Revente',
        subtitle: 'Prévention de la Corrosion',
        content: 'Lavez régulièrement le véhicule pour éliminer le sel (hiver) et la pollution. Appliquez une cire protectrice biannuelle pour sceller le vernis contre les agressions extérieures (UV, produits chimiques).',
        detail: 'Réparez les éclats de peinture ou les impacts de gravillons sans délai excessif. L\'exposition du métal nu à l\'humidité conduit très rapidement à la formation et à la propagation de la rouille.',
        impact: 'Valeur préservée'
      },
      {
        icon: '📱',
        title: 'L\'Atout AUTYVO : La Traçabilité',
        subtitle: 'Transparence Totale',
        content: 'En enregistrant chaque plein, chaque lavage, et chaque intervention, vous construisez un historique d\'entretien numérique complet et certifié.',
        detail: 'Cette traçabilité détaillée augmente la confiance de l\'acheteur et peut justifier un prix de revente supérieur (un historique complet est souvent un argument de négociation majeur).',
        impact: 'Prix de revente supérieur'
      }
    ],
    checklist: {
      daily: ['Vérification visuelle (pneus, fuites)', 'Contrôle des feux'],
      weekly: ['Niveaux d\'huile moteur', 'Pression des pneus', 'Liquide lave-glace'],
      monthly: ['Liquide de refroidissement', 'État des essuie-glaces et du freinage'],
      seasonal: ['Changement de pneus été/hiver', 'Inspection et recharge de la climatisation', 'Contrôle de l\'antigel']
    }
  };

  return (
    <>
      <Helmet>
        <title>Gestion Quotidienne de Votre Véhicule - Blog Autyvo</title>
        <meta name="description" content="Conseils d'entretien quotidien pour préserver la valeur et les performances de votre automobile." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{quotidienContent.hero.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {quotidienContent.hero.description}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Les 3 Piliers de l'Entretien Régulier
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              L'entretien préventif est structuré par la fréquence et l'importance des contrôles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quotidienContent.essentials.map((essential, index) => {
                const Icon = essential.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-[#02b197]">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="text-[#02b197]" size={48} />
                      <span className="text-xs font-semibold text-[#183755] bg-[#02b197]/10 px-3 py-1 rounded-full">
                        {essential.frequency}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#183755] mb-2">{essential.title}</h3>
                    <p className="text-[#02b197] font-semibold mb-6 text-sm">{essential.description}</p>
                    <ul className="space-y-3">
                      {essential.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-1" size={18} />
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Conseils d'Optimisation Pratiques
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Basés sur l'expertise ADEME, ACEA et constructeurs automobiles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotidienContent.tips.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{tip.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-[#183755]">{tip.title}</h3>
                        <p className="text-sm text-[#02b197] font-semibold">{tip.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">{tip.content}</p>
                  <p className="text-gray-600 leading-relaxed mb-3 text-sm italic border-l-4 border-[#02b197] pl-3">
                    {tip.detail}
                  </p>
                  <div className="flex justify-end">
                    <span className="bg-[#02b197] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {tip.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Votre Checklist Synthétique d'Entretien
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Un calendrier simple et efficace pour ne rien oublier
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-[#183755] mb-4 flex items-center">
                  <Clock className="mr-2 text-[#02b197]" size={24} />
                  Quotidien
                </h3>
                <ul className="space-y-2">
                  {quotidienContent.checklist.daily.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-[#183755] mb-4 flex items-center">
                  <Calendar className="mr-2 text-[#02b197]" size={24} />
                  Hebdomadaire
                </h3>
                <ul className="space-y-2">
                  {quotidienContent.checklist.weekly.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-[#183755] mb-4 flex items-center">
                  <Wrench className="mr-2 text-[#02b197]" size={24} />
                  Mensuel
                </h3>
                <ul className="space-y-2">
                  {quotidienContent.checklist.monthly.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-[#183755] mb-4 flex items-center">
                  <AlertCircle className="mr-2 text-[#02b197]" size={24} />
                  Saisonnier
                </h3>
                <ul className="space-y-2">
                  {quotidienContent.checklist.seasonal.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="text-[#02b197] mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#183755] to-[#0d2337] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tracez Chaque Entretien avec AUTYVO
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              L'application qui vous aide à ne rien oublier et à valoriser votre véhicule
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

export default QuotidienSection;
