import { Helmet } from 'react-helmet-async';
import { Snowflake, Sun, Leaf, Zap, Calendar, AlertCircle, Download } from 'lucide-react';

interface CalendrierSectionProps {
  onBack: () => void;
}

function CalendrierSection({ onBack }: CalendrierSectionProps) {
  const saisonContent = {
    hero: {
      title: 'Calendrier Saisonnier d\'Entretien Automobile',
      description: 'Chaque saison exige des soins spécifiques pour garantir la performance, la sécurité et la longévité de votre véhicule. Découvrez les meilleures pratiques validées par les experts automobiles et institutionnels (Cerema, TCS, ADAC, INC...).'
    },
    seasons: [
      {
        name: 'Hiver',
        period: 'Décembre - Février',
        icon: Snowflake,
        color: 'from-blue-600 to-blue-800',
        subtitle: '❄️ Grand Froid & Routes Salées · Réglementation 2024 : Équipements obligatoires dans 48 départements (Décret n° 2020-1264)',
        priorities: [
          {
            defi: 'Températures extrêmes',
            action: 'Batterie : test de charge (→ baisse de 30-50% d\'efficacité dès −10°C) · Niveau et qualité de l\'antigel (−25°C mini)',
            priority: 'Essentiel'
          },
          {
            defi: 'Gel & mauvaise visibilité',
            action: 'Lave-glace antigel (−20°C) · Essuie-glaces hiver · Dégivrage vitres',
            priority: 'Essentiel'
          },
          {
            defi: 'Neige, verglas',
            action: 'Pneus hiver ou chaînes (selon zone) · Vérifier pression (ajustement à froid)',
            priority: 'Essentiel'
          },
          {
            defi: 'Sel de déneigement',
            action: 'Lavage régulier du châssis et passages de roues (prévention rouille)',
            priority: 'Important'
          },
          {
            defi: 'Véhicules électriques',
            action: 'Autonomie réduite (jusqu\'à −40%) : préchauffage batterie recommandé (études TCS, Auto-Touring, AMAG, NREL)',
            priority: 'Important'
          }
        ]
      },
      {
        name: 'Printemps',
        period: 'Mars - Mai',
        icon: Leaf,
        color: 'from-green-500 to-green-700',
        subtitle: '🌸 Transition & Nettoyage · Sortie d\'hiver et préparation de la belle saison',
        priorities: [
          {
            defi: 'Traces d\'hiver (sel, boue)',
            action: 'Lavage complet du châssis pour prévenir la corrosion',
            priority: 'Important'
          },
          {
            defi: 'Pollen & allergies',
            action: 'Remplacer le filtre habitacle (recommandé 1×/an)',
            priority: 'Essentiel'
          },
          {
            defi: 'Humidité',
            action: 'Inspection système de freinage (risque d\'oxydation post-hiver)',
            priority: 'Recommandé'
          },
          {
            defi: 'Changement de pneus',
            action: 'Passage aux pneus été dès que les températures sont durablement supérieures à 7°C',
            priority: 'Essentiel'
          },
          {
            defi: 'Vérification fluides',
            action: 'Huile moteur, liquide de refroidissement, freins',
            priority: 'Important'
          }
        ]
      },
      {
        name: 'Été',
        period: 'Juin - Août',
        icon: Sun,
        color: 'from-orange-500 to-red-600',
        subtitle: '☀️ Canicule & Longs Trajets · Chaleur intense, risque de surchauffe',
        priorities: [
          {
            defi: 'Fortes chaleurs',
            action: 'Vérifier le système de refroidissement (radiateur, durites, niveau)',
            priority: 'Essentiel'
          },
          {
            defi: 'Climatisation',
            action: 'Test et recharge si nécessaire (efficacité et confort)',
            priority: 'Important'
          },
          {
            defi: 'Pression pneus',
            action: 'Contrôle régulier (gonflage avec l\'air chaud) · Risque d\'éclatement',
            priority: 'Essentiel'
          },
          {
            defi: 'Exposition UV',
            action: 'Protection de la carrosserie (cire) · Vérification joints de caoutchouc',
            priority: 'Recommandé'
          },
          {
            defi: 'Longs trajets vacances',
            action: 'Inspection pré-départ complète (révision si proche échéance)',
            priority: 'Important'
          }
        ]
      },
      {
        name: 'Automne',
        period: 'Septembre - Novembre',
        icon: Zap,
        color: 'from-yellow-600 to-orange-700',
        subtitle: '🍂 Préparation Hiver · Pluies, chutes de feuilles, températures décroissantes',
        priorities: [
          {
            defi: 'Visibilité réduite (pluies, brouillard)',
            action: 'Vérifier feux, essuie-glaces, lave-glace',
            priority: 'Essentiel'
          },
          {
            defi: 'Routes mouillées (risque d\'aquaplaning)',
            action: 'Contrôle profondeur des pneus (min. 1,6 mm légal · 3 mm recommandé TCS)',
            priority: 'Essentiel'
          },
          {
            defi: 'Humidité & froid progressif',
            action: 'Test batterie (charge diminue avec le froid)',
            priority: 'Important'
          },
          {
            defi: 'Système de chauffage',
            action: 'Vérifier son fonctionnement avant l\'hiver',
            priority: 'Important'
          },
          {
            defi: 'Évacuation eau & feuilles',
            action: 'Nettoyer les drainages (bas de pare-brise, bas de portes)',
            priority: 'Recommandé'
          }
        ]
      }
    ],
    monthlyCalendar: [
      { month: 'Janvier', focus: 'Surveillance batterie et antigel', checks: ['Batterie', 'Liquides', 'Chauffage'] },
      { month: 'Février', focus: 'Préparation sortie hiver', checks: ['État pneus hiver', 'Carrosserie', 'Freins'] },
      { month: 'Mars', focus: 'Changement pneus été', checks: ['Montage pneus été', 'Géométrie', 'Amortisseurs'] },
      { month: 'Avril', focus: 'Révision de printemps', checks: ['Révision complète', 'Filtres', 'Nettoyage'] },
      { month: 'Mai', focus: 'Climatisation et longs trajets', checks: ['Clim', 'Liquides', 'Éclairage'] },
      { month: 'Juin', focus: 'Préparation canicule', checks: ['Refroidissement', 'Pneus', 'Protection UV'] },
      { month: 'Juillet', focus: 'Surveillance chaleur', checks: ['Pression pneus', 'Niveaux', 'Ventilation'] },
      { month: 'Août', focus: 'Entretien mi-été', checks: ['Freins', 'Suspension', 'Direction'] },
      { month: 'Septembre', focus: 'Préparation automne', checks: ['Éclairage', 'Essuie-glaces', 'Drainage'] },
      { month: 'Octobre', focus: 'Check-up pré-hiver', checks: ['Batterie', 'Antigel', 'Chauffage'] },
      { month: 'Novembre', focus: 'Changement pneus hiver', checks: ['Montage pneus hiver', 'Équipement hiver'] },
      { month: 'Décembre', focus: 'Vigilance grand froid', checks: ['Batterie', 'Démarrage', 'Visibilité'] }
    ],
    recommendations: [
      {
        title: 'Anticipez les Changements',
        description: 'Ne attendez pas les extrêmes climatiques. Préparez votre véhicule 2-3 semaines avant le changement de saison.'
      },
      {
        title: 'Tracez Chaque Intervention',
        description: 'Avec AUTYVO, documentez chaque entretien saisonnier pour prouver le soin apporté à votre véhicule.'
      },
      {
        title: 'Consultez Votre Manuel',
        description: 'Les recommandations du constructeur sont adaptées à votre modèle spécifique. Suivez-les scrupuleusement.'
      },
      {
        title: 'Privilégiez la Prévention',
        description: 'Un entretien saisonnier régulier coûte moins cher que des réparations d\'urgence en plein hiver.'
      }
    ],
    sources: [
      {
        category: 'Réglementation',
        links: [
          { name: 'Décret n° 2020-1264 - Équipements hivernaux', url: 'https://www.cerema.fr' },
          { name: 'INC - Pneus neige, réglementation hiver 2024-2025', url: 'https://www.inc-conso.fr' }
        ]
      },
      {
        category: 'Tests techniques & performance batteries',
        links: [
          { name: 'Auto-Touring - Test ADAC véhicules électriques en hiver', url: 'https://www.autotouring.be' },
          { name: 'TCS - Test autonomie véhicules électriques en hiver', url: 'https://www.tcs.ch' },
          { name: 'AMAG - Effets du froid sur batterie voiture électrique', url: 'https://www.amag-group.ch' },
          { name: 'TCS - Tests pneus et freinage sur chaussée mouillée', url: 'https://www.tcs.ch' }
        ]
      },
      {
        category: 'Autonomie hivernale & optimisation',
        links: [
          { name: 'TCS - Essai autonomie hivernale', url: 'https://www.tcs.ch' },
          { name: 'Auto Journal - Optimiser autonomie et recharge en hiver', url: 'https://www.autojournal.fr' },
          { name: 'Frandroid - Classement VE selon autonomie en hiver', url: 'https://www.frandroid.com' },
          { name: 'Frandroid - Pompe à chaleur et gain d\'autonomie', url: 'https://www.frandroid.com' },
          { name: 'SuisseEnergie - Consommation véhicules électriques en hiver', url: 'https://www.suisseenergie.ch' },
          { name: 'Auto Journal - Pourquoi l\'autonomie chute jusqu\'à –40 %', url: 'https://www.autojournal.fr' }
        ]
      },
      {
        category: 'Recherche scientifique',
        links: [
          { name: 'NREL - Étude thermique batteries conditions extrêmes', url: 'https://docs.nrel.gov' }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Calendrier Saisonnier d'Entretien - Blog Autyvo</title>
        <meta name="description" content="Guide complet de l'entretien automobile par saison : hiver, printemps, été, automne." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{saisonContent.hero.title}</h1>
            <p className="text-xl text-gray-300 max-w-4xl">
              {saisonContent.hero.description}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Entretien par Saison
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Découvrez les actions prioritaires pour chaque période de l'année
            </p>
            <div className="space-y-12">
              {saisonContent.seasons.map((season, index) => {
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
                      <h4 className="text-lg font-bold text-[#183755] mb-4">Priorités de la Saison</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-[#183755]">Défis</th>
                              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-bold text-[#183755]">Actions essentielles</th>
                              <th className="border border-gray-300 px-4 py-2 text-center text-sm font-bold text-[#183755]">Priorité</th>
                            </tr>
                          </thead>
                          <tbody>
                            {season.priorities.map((item, idx) => (
                              <tr key={idx} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{item.defi}</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">{item.action}</td>
                                <td className="border border-gray-300 px-4 py-3 text-center">
                                  <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold ${
                                    item.priority === 'Essentiel' ? 'bg-red-100 text-red-700' :
                                    item.priority === 'Important' ? 'bg-orange-100 text-orange-700' :
                                    'bg-blue-100 text-blue-700'
                                  }`}>
                                    {item.priority === 'Essentiel' ? '⭐ Essentiel' :
                                     item.priority === 'Important' ? '🔶 Important' :
                                     '🔹 Recommandé'}
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-4 text-center">
              Calendrier Mensuel de Maintenance
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Un guide mois par mois pour ne rien oublier
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {saisonContent.monthlyCalendar.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow border-l-4 border-[#02b197]">
                  <div className="flex items-center mb-3">
                    <Calendar className="text-[#02b197] mr-2" size={20} />
                    <h3 className="font-bold text-[#183755]">{item.month}</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">{item.focus}</p>
                  <ul className="space-y-2">
                    {item.checks.map((check, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-[#02b197] mr-1">✓</span>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-12 text-center">
              Recommandations Générales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {saisonContent.recommendations.map((rec, index) => (
                <div key={index} className="bg-gradient-to-br from-[#183755] to-[#0d2337] text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{rec.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{rec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#183755] mb-8 text-center">
              Sources techniques & officielles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {saisonContent.sources.map((source, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-[#183755] mb-4">{source.category}</h3>
                  <ul className="space-y-3">
                    {source.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#02b197] hover:underline block"
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

        <section className="py-16 bg-gradient-to-br from-[#02b197] to-[#029d81] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertCircle className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Suivez Votre Calendrier avec AUTYVO
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Enregistrez chaque entretien saisonnier dans AUTYVO et recevez des rappels pour ne jamais manquer une échéance importante
            </p>
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 bg-white text-[#02b197] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              <Download className="mr-2" size={24} />
              Télécharger AUTYVO
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default CalendrierSection;
