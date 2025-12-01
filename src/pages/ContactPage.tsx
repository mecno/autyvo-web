import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Send, MessageSquare, HelpCircle, Wrench } from 'lucide-react';
import { CONTACT_EMAIL, SUPPORT_EMAIL, LEGAL_ENTITY } from '@/constants';

const ContactPage: React.FC = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implémenter l'envoi du formulaire
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        <section className="bg-gradient-to-br from-[#183755] to-[#0d2337] text-white py-20">
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
                <h2 className="text-3xl font-bold text-[#183755] mb-8">
                  {t('contact.form.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#183755] mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b197] focus:border-transparent outline-none transition-all"
                        placeholder={t('contact.form.placeholders.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#183755] mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b197] focus:border-transparent outline-none transition-all"
                        placeholder={t('contact.form.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#183755] mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b197] focus:border-transparent outline-none transition-all"
                        placeholder={t('contact.form.placeholders.phone')}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#183755] mb-2">
                        {t('contact.form.subject')}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b197] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">{t('contact.form.subjects.select')}</option>
                        <option value="support">{t('contact.form.subjects.support')}</option>
                        <option value="question">{t('contact.form.subjects.question')}</option>
                        <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                        <option value="feedback">{t('contact.form.subjects.feedback')}</option>
                        <option value="other">{t('contact.form.subjects.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#183755] mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02b197] focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t('contact.form.placeholders.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-[#02b197] text-white rounded-lg font-semibold hover:bg-[#029d81] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Support Technique */}
                <div className="bg-gradient-to-br from-[#02b197] to-[#01987f] p-6 rounded-xl text-white">
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
                <div className="bg-white border-2 border-[#183755] p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#183755] mb-4 flex items-center">
                    <MessageSquare className="mr-2 text-[#183755]" size={24} />
                    {t('contact.general.title')}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {t('contact.general.description')}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="mr-3 mt-1 flex-shrink-0 text-[#183755]" size={20} />
                      <div>
                        <p className="font-semibold text-[#183755] text-sm">{t('contact.general.email')}</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 hover:text-[#02b197] transition-colors">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="mr-3 mt-1 flex-shrink-0 text-[#183755]" size={20} />
                      <div>
                        <p className="font-semibold text-[#183755] text-sm">{t('contact.general.address')}</p>
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
                  <h4 className="font-bold text-[#183755] mb-4 flex items-center">
                    <HelpCircle className="mr-2 text-[#02b197]" size={24} />
                    {t('contact.help.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('contact.help.description')}
                  </p>
                  <button className="w-full px-4 py-2 bg-[#183755] text-white rounded-lg hover:bg-[#0d2337] transition-colors flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-[#183755] text-center mb-12">
              {t('contact.faq.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-[#183755] mb-3">
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
