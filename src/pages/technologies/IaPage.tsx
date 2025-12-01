import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
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

function IaPage() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const intelligentFeatures = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Analyse Prédictive",
      description: "Anticipation des besoins d'entretien",
      details: "Notre système analyse le kilométrage et les conditions d'utilisation de votre véhicule pour vous rappeler les interventions nécessaires au bon moment, conformément aux recommandations du constructeur."
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Planification Automatique",
      description: "Agenda intelligent pour votre véhicule",
      details: "Le système génère automatiquement un calendrier d'entretien basé sur les caractéristiques de votre véhicule et les recommandations du constructeur."
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Notifications Intelligentes",
      description: "Alertes au bon moment",
      details: "Recevez des rappels parfaitement adaptés à votre situation : calendrier personnel, conditions météo et échéances clés comme le contrôle technique ou l'assurance."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Optimisation des Coûts",
      description: "Maîtrisez votre budget entretien",
      details: "Le système vous aide à anticiper et organiser l'ensemble de vos dépenses liées au véhicule — entretien, carburant, interventions à venir — et vous indique les moments les plus pertinents pour agir."
    }
  ];

  const aiCapabilities = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Reconnaissance de Documents",
      description: "Scannez vos factures et nos algorithmes extraient automatiquement toutes les informations clés : date, montant, type d'intervention, pièces changées."
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Vérification des Établissements",
      description: "Le système vérifie automatiquement les garages, centres de maintenance et centres de contrôle technique pour valider l'authenticité de vos documents d'entretien."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Moteur de Recommandations",
      description: "Basé sur des millions de données véhicules, notre moteur vous suggère les meilleures actions d'entretien selon votre situation spécifique."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Suivi de l'Évolution",
      description: "Visualisez l'évolution de l'état de votre véhicule et suivez votre historique d'entretien pour prendre de meilleures décisions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Détection d'Anomalies",
      description: "Le système s'appuie sur les données de véhicules similaires dans le parc automobile pour interpréter les informations de votre véhicule et vous avertir dès qu'une anomalie ou un risque potentiel est détecté."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Prévision de Durée de Vie",
      description: "Le système estime la durée de vie restante de vos principaux composants (batterie, freins, distribution, et autres éléments essentiels) en se basant sur le kilométrage et les recommandations constructeur."
    }
  ];

  const useCases = [
    {
      title: "Hiver Approche",
      icon: "❄️",
      scenario: "Mi-octobre, température en baisse",
      aiAction: "L'IA détecte l'approche de l'hiver et vous envoie une notification pour vérifier vos pneus, votre batterie et vos niveaux de liquide antigel.",
      benefit: "Vous êtes prêt avant les premières gelées"
    },
    {
      title: "Contrôle Technique",
      icon: "🔧",
      scenario: "Dans 2 mois, votre CT arrive",
      aiAction: "Le système vous alerte 8 semaines à l'avance et vous suggère une pré-visite pour corriger les points susceptibles de poser problème.",
      benefit: "Passage du CT du premier coup"
    },
    {
      title: "Kilométrage Vidange",
      icon: "🛢️",
      scenario: "Vous approchez des 15 000 km",
      aiAction: "L'IA calcule qu'à votre rythme actuel, vous atteindrez le seuil dans 3 semaines et vous propose de prendre rendez-vous.",
      benefit: "Moteur toujours au top"
    },
    {
      title: "Vérification d'Établissement",
      icon: "✅",
      scenario: "Vous ajoutez une facture d'un garage",
      aiAction: "Le système vérifie automatiquement l'établissement, confirme qu'il s'agit d'un centre agréé et certifie l'authenticité du document pour renforcer la valeur de votre historique.",
      benefit: "Historique certifié et confiance maximale"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Intelligence Artificielle Automobile - AUTYVO IA</title>
        <meta name="description" content="Découvrez comment l'intelligence artificielle d'AUTYVO transforme la gestion de votre véhicule : analyse prédictive, notifications intelligentes, optimisation des coûts." />
      </Helmet>
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#183755] via-[#0d2337] to-[#183755] text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Brain className="w-20 h-20 md:w-24 md:h-24 text-[#02b197]" />
                  <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                L'Intelligence au Service de Votre Véhicule
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AUTYVO utilise l'intelligence artificielle pour transformer la gestion de votre véhicule en une expérience simple, prédictive et optimisée.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#183755] mb-4">
                Comment l'IA d'AUTYVO Fonctionne Pour Vous
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quatre piliers technologiques pour une gestion automobile intelligente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {intelligentFeatures.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer p-8 rounded-xl transition-all transform hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-[#02b197] to-[#01987f] text-white shadow-2xl'
                      : 'bg-gray-50 text-[#183755] hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
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
                <div className="flex-shrink-0 text-[#02b197]">
                  {intelligentFeatures[activeFeature].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#183755] mb-4">
                    {intelligentFeatures[activeFeature].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {intelligentFeatures[activeFeature].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#183755] mb-4">
                Les Capacités de Notre IA
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une technologie de pointe pour simplifier votre quotidien automobile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#02b197]/10 rounded-lg text-[#02b197] mr-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#183755]">{capability.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#183755] mb-4">
                L'IA en Action : Cas Pratiques
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez comment l'intelligence artificielle intervient concrètement au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#02b197] transition-all">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{useCase.icon}</span>
                    <h3 className="text-2xl font-bold text-[#183755]">{useCase.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[#02b197] mb-1">📍 SITUATION</p>
                      <p className="text-gray-700">{useCase.scenario}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#02b197] mb-1">🤖 L'IA INTERVIENT</p>
                      <p className="text-gray-700">{useCase.aiAction}</p>
                    </div>

                    <div className="bg-[#02b197]/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-[#183755] mb-1">✨ BÉNÉFICE</p>
                      <p className="text-[#183755] font-medium">{useCase.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[#183755] to-[#0d2337] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi Notre IA est Différente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une approche unique centrée sur vos besoins réels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Zap className="w-12 h-12 text-[#02b197]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Temps Réel</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Les recommandations sont calculées instantanément en fonction de l'état actuel de votre véhicule
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Database className="w-12 h-12 text-[#02b197]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Big Data Automobile</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Nos algorithmes s'appuient sur des millions de données véhicules pour vous conseiller
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Target className="w-12 h-12 text-[#02b197]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Ultra-Personnalisé</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Chaque véhicule est unique, l'IA adapte ses conseils aux spécificités de votre modèle
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Clock className="w-12 h-12 text-[#02b197]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Amélioration Continue</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Le système s'enrichit continuellement avec les retours de la communauté pour offrir de meilleures recommandations
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-[#02b197]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Transparence</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Vous comprenez toujours pourquoi une recommandation vous est faite
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-[#02b197]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Fiabilité Prouvée</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Des milliers d'utilisateurs nous font confiance chaque jour
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#02b197] to-[#01987f] rounded-2xl p-12 text-white text-center shadow-2xl">
              <Brain className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Vivre l'Expérience de l'IA Automobile ?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Rejoignez les milliers d'utilisateurs qui ont déjà adopté la gestion intelligente de leur véhicule
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#183755] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Sparkles className="mr-2" size={24} />
                  Télécharger AUTYVO Gratuitement
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-[#02b197] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#183755] mb-4">
                L'IA ne remplace pas votre mécanicien
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                AUTYVO est un outil d'aide à la décision. Nos recommandations sont basées sur des données et des algorithmes éprouvés,
                mais elles ne remplacent jamais l'expertise d'un professionnel qualifié. En cas de doute, consultez toujours votre garagiste.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IaPage;
