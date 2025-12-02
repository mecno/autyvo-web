import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, MessageSquare, HelpCircle, Wrench, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL, SUPPORT_EMAIL, LEGAL_ENTITY } from '@/constants';
import ContactForm, { ContactFormData } from '../components/forms/ContactForm';
import { contactService } from '@/services/contactService';

const ContactPage: React.FC = () => {
  const { t } = useTranslation('common');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      await contactService.submitContactRequest({
        variant: 'contact',
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        consent: data.consent,
        website: data.website, // honeypot field
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setErrorMessage('Nous n\'avons pas pu transmettre votre demande. Veuillez réessayer ultérieurement.');
    }
  };

  const faqItems = t('contact.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <>
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Formulaire */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-brand-secondary mb-8">
                  {t('contact.form.title')}
                </h2>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">Message envoyé avec succès !</h3>
                      <p className="text-sm text-green-700">
                        Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

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
                  variant="contact"
                  onSubmit={handleSubmit}
                  isLoading={submitStatus === 'loading'}
                  translations={{
                    fields: {
                      name: t('contact.form.name'),
                      email: t('contact.form.email'),
                      phone: t('contact.form.phone'),
                      subject: t('contact.form.subject'),
                      message: t('contact.form.message'),
                    },
                    placeholders: {
                      name: t('contact.form.placeholders.name'),
                      email: t('contact.form.placeholders.email'),
                      phone: t('contact.form.placeholders.phone'),
                      message: t('contact.form.placeholders.message'),
                    },
                    subjects: {
                      select: t('contact.form.subjects.select'),
                      support: t('contact.form.subjects.support'),
                      question: t('contact.form.subjects.question'),
                      partnership: t('contact.form.subjects.partnership'),
                      feedback: t('contact.form.subjects.feedback'),
                      other: t('contact.form.subjects.other'),
                    },
                    submitButton: t('contact.form.submit'),
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

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Support Technique */}
                <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Wrench className="mr-2" size={24} />
                    {t('contact.support.title')}
                  </h3>
                  <p className="mb-4 text-sm">
                    {t('contact.support.description')}
                  </p>
                  <div className="flex items-start">
                    <Mail className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-sm">{t('contact.support.email')}</p>
                      <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white hover:text-gray-200 transition-colors underline">
                        {SUPPORT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm">
                      {t('contact.support.hours')}
                    </p>
                  </div>
                </div>

                {/* Contact Général */}
                <div className="bg-white border-2 border-brand-secondary p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-brand-secondary mb-4 flex items-center">
                    <MessageSquare className="mr-2 text-brand-secondary" size={24} />
                    {t('contact.general.title')}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {t('contact.general.description')}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="mr-3 mt-1 flex-shrink-0 text-brand-secondary" size={20} />
                      <div>
                        <p className="font-semibold text-brand-secondary text-sm">{t('contact.general.email')}</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 hover:text-brand-primary transition-colors">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="mr-3 mt-1 flex-shrink-0 text-brand-secondary" size={20} />
                      <div>
                        <p className="font-semibold text-brand-secondary text-sm">{t('contact.general.address')}</p>
                        <p className="text-gray-600">
                          {LEGAL_ENTITY.address.street}<br />
                          {LEGAL_ENTITY.address.postalCode} {LEGAL_ENTITY.address.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Besoin d'aide */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-brand-secondary mb-4 flex items-center">
                    <HelpCircle className="mr-2 text-brand-primary" size={24} />
                    {t('contact.help.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('contact.help.description')}
                  </p>
                  <button className="w-full px-4 py-2 bg-brand-secondary text-white rounded-lg hover:bg-brand-secondary-dark transition-colors flex items-center justify-center">
                    <MessageSquare className="mr-2" size={18} />
                    {t('contact.help.cta')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-secondary text-center mb-12">
              {t('contact.faq.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-brand-secondary mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
