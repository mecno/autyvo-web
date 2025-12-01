import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Clock,
  Shield,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import ContactForm, { ContactFormData } from '../../components/forms/ContactForm';

function ProPage() {
  const { t } = useTranslation('common');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data: ContactFormData) => {
    console.log('PRO demo request:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Demande envoyée - AUTYVO PRO</title>
        </Helmet>
        <div className="pt-16 min-h-screen bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white text-brand-secondary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={64} className="text-brand-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pro.success.title')}</h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('pro.success.message')}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              {t('pro.success.back')}
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
        <section className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white py-20 md:py-32">
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
                  className="inline-block px-10 py-5 bg-brand-primary text-white rounded-lg text-lg font-semibold hover:bg-brand-primary-dark transition-all transform hover:scale-105 shadow-2xl"
                >
                  Demander une Démo
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/src/assets/images/illustrations/client-talking-to-professional.png"
                  alt="Client et mécanicien discutant"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-16">
              3 Piliers pour Transformer Votre Activité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Planification Intelligente</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Automatisez la traçabilité et anticipez chaque entretien avec un agenda prédictif.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Saisie rapide et intuitive</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Synchronisation en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Historique complet instantané</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Transparence Garantie</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vérifications officielles SIV et Histovec pour une traçabilité incontestable.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Badge AUTYVO Trace</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Données sources officielles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Rapports professionnels</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Fidélisation Renforcée</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Créez une relation de confiance durable grâce à une valeur ajoutée concrète et mesurable.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Rappels intelligents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Communication simplifiée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Valeur mesurable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-16">
              Des Solutions Adaptées à Votre Secteur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/src/assets/images/illustrations/professional-in-showroom.jpg"
                  alt="Professionnelle dans un showroom"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Garagistes & Centres de Contrôle Technique</h3>
                <h4 className="text-lg font-semibold text-brand-primary mb-3">Fidélisez vos clients et Augmentez votre Valeur Perçue</h4>
                <p className="text-gray-600 leading-relaxed">
                  Différenciez-vous avec une traçabilité professionnelle vérifiée. Augmentez la valeur perçue de vos services et fidélisez vos clients pour renforcer leur engagement durable.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/src/assets/images/illustrations/mechanic-at-work.jpg"
                  alt="Mécanicien au travail"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">Concessionnaires (Véhicules d'Occasion)</h3>
                <h4 className="text-lg font-semibold text-brand-primary mb-3">Transformez la Transparence en Avantage Concurrentiel</h4>
                <p className="text-gray-600 leading-relaxed">
                  Accélérez vos rotations de stock et valorisez chaque véhicule grâce à un historique vérifié. Rassurez vos acheteurs avec des preuves vérifiables et réduisez drastiquement vos délais de vente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src="/src/assets/images/illustrations/fleet-manager.jpg"
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
                {t('pro.form.title')}
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez le formulaire et notre équipe vous contactera pour une démonstration personnalisée adaptée à votre secteur
              </p>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
              <ContactForm
                variant="demo"
                onSubmit={handleSubmit}
                translations={{
                  fields: {
                    name: t('pro.form.name'),
                    email: t('pro.form.email'),
                    phone: t('pro.form.phone'),
                    company: t('pro.form.company'),
                    sector: t('pro.form.sector'),
                  },
                  placeholders: {
                    name: t('pro.form.placeholders.name'),
                    email: t('pro.form.placeholders.email'),
                    phone: t('pro.form.placeholders.phone'),
                    company: t('pro.form.placeholders.company'),
                  },
                  sectors: {
                    select: t('pro.form.sectors.select'),
                    garage: t('pro.form.sectors.garage'),
                    dealer: t('pro.form.sectors.dealer'),
                    fleet: t('pro.form.sectors.fleet'),
                    other: t('pro.form.sectors.other'),
                  },
                  submitButton: t('pro.form.submit'),
                  disclaimer: t('pro.form.disclaimer'),
                }}
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white">
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
