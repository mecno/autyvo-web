import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  Send
} from 'lucide-react';

function ProPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    sector: '',
    email: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Demande envoyée - AUTYVO PRO</title>
        </Helmet>
        <div className="pt-16 min-h-screen bg-gradient-to-br from-[#183755] to-[#0d2337] text-white flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white text-[#183755] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={64} className="text-[#02b197]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Merci !</h1>
            <p className="text-xl text-gray-300 mb-8">
              Votre demande a été reçue. Notre équipe vous contactera dans les plus brefs délais pour vous présenter AUTYVO PRO.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#02b197] text-white rounded-lg hover:bg-[#029d81] transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>AUTYVO PRO - Solution Professionnelle pour Garages et Concessionnaires</title>
        <meta name="description" content="Optimisez la gestion de votre parc automobile avec AUTYVO PRO. Traçabilité, planification intelligente et fidélisation clients." />
      </Helmet>
      <div className="pt-16">
        <section className="bg-gradient-to-br from-[#183755] to-[#0d2337] text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  AUTYVO PRO : La Transparence qui Valorise Votre Activité
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  Optimisez la gestion de votre parc automobile et maximisez votre rentabilité. Une solution complète pour tracer, planifier et valoriser chaque intervention.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-10 py-5 bg-[#02b197] text-white rounded-lg text-lg font-semibold hover:bg-[#029d81] transition-all transform hover:scale-105 shadow-2xl"
                >
                  Demander une Démo
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/image 5.png"
                  alt="Client et mécanicien discutant"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-16">
              3 Piliers pour Transformer Votre Activité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-[#02b197] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#183755] mb-4">Planification Intelligente</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Automatisez la traçabilité et anticipez chaque entretien avec un agenda prédictif.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Saisie rapide et intuitive</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Synchronisation en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Historique complet instantané</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-[#02b197] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#183755] mb-4">Transparence Garantie</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vérifications officielles SIV et Histovec pour une traçabilité incontestable.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Badge AUTYVO Trace</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Données sources officielles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Rapports professionnels</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-[#02b197] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#183755] mb-4">Fidélisation Renforcée</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Créez une relation de confiance durable grâce à une valeur ajoutée concrète et mesurable.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Rappels intelligents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Communication simplifiée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#02b197] mr-2 flex-shrink-0 mt-1" />
                    <span>Valeur mesurable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-16">
              Des Solutions Adaptées à Votre Secteur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/image 2.jpeg"
                  alt="Professionnelle dans un showroom"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-[#183755] mb-4">Garagistes & Centres de Contrôle Technique</h3>
                <h4 className="text-lg font-semibold text-[#02b197] mb-3">Fidélisez vos clients et Augmentez votre Valeur Perçue</h4>
                <p className="text-gray-600 leading-relaxed">
                  Différenciez-vous avec une traçabilité professionnelle vérifiée. Augmentez la valeur perçue de vos services et fidélisez vos clients pour renforcer leur engagement durable.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/image 3.jpeg"
                  alt="Mécanicien au travail"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-[#183755] mb-4">Concessionnaires (Véhicules d'Occasion)</h3>
                <h4 className="text-lg font-semibold text-[#02b197] mb-3">Transformez la Transparence en Avantage Concurrentiel</h4>
                <p className="text-gray-600 leading-relaxed">
                  Accélérez vos rotations de stock et valorisez chaque véhicule grâce à un historique vérifié. Rassurez vos acheteurs avec des preuves vérifiables et réduisez drastiquement vos délais de vente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/image 4.jpeg"
                  alt="Gestionnaire de flotte"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-[#183755] mb-4">Solutions Entreprise (Flottes & TCO)</h3>
                <h4 className="text-lg font-semibold text-[#02b197] mb-3">Maîtrisez les Coûts de Votre Flotte</h4>
                <p className="text-gray-600 leading-relaxed">
                  Centralisez la gestion de votre flotte et anticipez chaque maintenance. Optimisez votre TCO, éliminez les pannes imprévues et assurez une conformité réglementaire totale grâce à une planification automatisée.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#183755] mb-4">
                Demandez Votre Démo PRO Personnalisée
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez le formulaire et notre équipe vous contactera pour une démonstration personnalisée adaptée à votre secteur
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#183755] mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02b197] focus:ring-2 focus:ring-[#02b197] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#183755] mb-2">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02b197] focus:ring-2 focus:ring-[#02b197] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="Auto Pro Services"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="sector" className="block text-sm font-semibold text-[#183755] mb-2">
                  Secteur d'Activité *
                </label>
                <select
                  id="sector"
                  name="sector"
                  required
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02b197] focus:ring-2 focus:ring-[#02b197] focus:ring-opacity-50 outline-none transition-all"
                >
                  <option value="">Sélectionnez votre secteur</option>
                  <option value="garage">Garage Indépendant</option>
                  <option value="concessionnaire">Concessionnaire</option>
                  <option value="flotte">Gestionnaire de Flottes</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#183755] mb-2">
                    Email Professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02b197] focus:ring-2 focus:ring-[#02b197] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="contact@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#183755] mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02b197] focus:ring-2 focus:ring-[#02b197] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-[#02b197] text-white rounded-lg text-lg font-semibold hover:bg-[#029d81] transition-all transform hover:scale-105 shadow-lg"
              >
                <Send className="mr-2" size={24} />
                Je Demande Ma Démo PRO Personnalisée
              </button>

              <p className="text-sm text-gray-600 text-center mt-6">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe commerciale.
              </p>
            </form>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#183755] to-[#0d2337] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez les Professionnels qui Font de la Transparence leur Force
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Plus de 500 professionnels de l'automobile nous font déjà confiance
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProPage;
