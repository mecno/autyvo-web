import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import ContactForm, { ContactFormData } from '../../components/forms/ContactForm';
import { contactService } from '@/services/contactService';
import clientTalkingImg from '../../assets/images/illustrations/client-talking-to-professional.png';
import professionalShowroomImg from '../../assets/images/illustrations/professional-in-showroom.jpg';
import mechanicWorkingImg from '../../assets/images/illustrations/mechanic-at-work.jpg';
import fleetManagerImg from '../../assets/images/illustrations/fleet-manager.jpg';

function ProPage() {
  const { t } = useTranslation('common');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      await contactService.submitContactRequest({
        variant: 'demo',
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        sector: data.sector,
        consent: data.consent,
        website: data.website, // honeypot field
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting demo request:', error);
      setSubmitStatus('error');
      setErrorMessage('Nous n\'avons pas pu transmettre votre demande. Veuillez réessayer ultérieurement.');
    }
  };

  if (submitStatus === 'success') {
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
              onClick={() => setSubmitStatus('idle')}
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
                  {t('pro.hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  {t('pro.hero.subtitle')}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-10 py-5 bg-brand-primary text-white rounded-lg text-lg font-semibold hover:bg-brand-primary-dark transition-all transform hover:scale-105 shadow-2xl"
                >
                  {t('pro.hero.cta')}
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src={clientTalkingImg}
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
              {t('pro.pillars.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{t('pro.pillars.planning.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('pro.pillars.planning.description')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {(t('pro.pillars.planning.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{t('pro.pillars.transparency.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('pro.pillars.transparency.description')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {(t('pro.pillars.transparency.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{t('pro.pillars.loyalty.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('pro.pillars.loyalty.description')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {(t('pro.pillars.loyalty.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="text-brand-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-16">
              {t('pro.solutions.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src={professionalShowroomImg}
                  alt="Professionnelle dans un showroom"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{t('pro.solutions.garage.title')}</h3>
                <h4 className="text-lg font-semibold text-brand-primary mb-3">{t('pro.solutions.garage.subtitle')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('pro.solutions.garage.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src={mechanicWorkingImg}
                  alt="Mécanicien au travail"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{t('pro.solutions.dealer.title')}</h3>
                <h4 className="text-lg font-semibold text-brand-primary mb-3">{t('pro.solutions.dealer.subtitle')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('pro.solutions.dealer.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img
                  src={fleetManagerImg}
                  alt="Gestionnaire de flotte"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{t('pro.solutions.fleet.title')}</h3>
                <h4 className="text-lg font-semibold text-brand-primary mb-3">{t('pro.solutions.fleet.subtitle')}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('pro.solutions.fleet.description')}
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
                {t('pro.contact.description')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">Erreur lors de l'envoi</h3>
                    <p className="text-sm text-red-700">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <ContactForm
                variant="demo"
                onSubmit={handleSubmit}
                isLoading={submitStatus === 'loading'}
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
                  consent: {
                    label: t('contact.form.consent.label'),
                    required: t('contact.form.consent.required'),
                  },
                  validation: {
                    required: t('contact.form.validation.required'),
                    email: t('contact.form.validation.email'),
                  },
                }}
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('pro.footer.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('pro.footer.subtitle')}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProPage;
