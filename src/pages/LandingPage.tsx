import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  Download,
  ChevronDown,
  ChevronUp,
  Shield,
  FileText,
  Database,
} from 'lucide-react';

import heroImage from '@/assets/images/illustrations/transaction.jpeg';
import stickyImage from '@/assets/images/app/dashboard-screen.jpeg';
import benefitsImage from '@/assets/images/app/agenda-screen.jpg';
import traceImage from '@/assets/images/report/report-cover-page.jpeg';
import verificationImage from '@/assets/images/illustrations/autyvo-schema.png';
import kivoLogo from '@/assets/images/partners/kivo-logo.jpg';
import frenchTechLogo from '@/assets/images/partners/french-tech-logo.png';
import backcarLogo from '@/assets/images/partners/backcar-logo.png';

function LandingPage() {
  const { t } = useTranslation('landing');
  const location = useLocation();
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Gestion du scroll au montage si hash dans l'URL
  useEffect(() => {
    const hash = location.hash.slice(1); // Retire le #
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowStickyButton(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-[#183755] via-[#1a4670] to-[#02b197] text-white pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={heroImage}
                  alt={t('hero.title')}
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-[#02b197]">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  {t('hero.description')}
                </p>
                <button
                  onClick={scrollToDownload}
                  className="bg-white text-[#183755] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3"
                >
                  <Download size={24} />
                  <span className="hidden md:inline">{t('hero.cta')}</span>
                  <span className="md:hidden">{t('hero.ctaShort')}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Download Button (Mobile) */}
        {showStickyButton && (
          <button
            onClick={scrollToDownload}
            className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#02b197] text-white p-4 rounded-full shadow-2xl hover:bg-[#029d81] transition-all transform hover:scale-110"
            aria-label={t('hero.ctaShort')}
          >
            <Download size={28} />
          </button>
        )}

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#02b197] via-[#02b197] to-transparent hidden md:block" />

                {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; description: string }>).map((step, index) => (
                  <div key={index} className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#02b197] to-[#029d81] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold text-[#183755] mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block sticky top-24">
                <img
                  src={stickyImage}
                  alt="Interface de l'application AUTYVO"
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="gestion-section" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(t('benefits.items', { returnObjects: true }) as Array<{ emoji: string; title: string; description: string }>).map((benefit, index) => (
                  <div
                    key={index}
                    className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow ${
                      index === 4 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="text-5xl mb-6">{benefit.emoji}</div>
                    <h3 className="text-2xl font-bold text-[#183755] mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block">
                <img
                  src={benefitsImage}
                  alt="Interface de l'application AUTYVO"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover sticky top-24"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AUTYVO Trace Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{t('trace.emoji')}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#183755]">{t('trace.title')}</h2>
                </div>
                <p className="text-2xl font-semibold text-[#02b197] mb-8">
                  {t('trace.subtitle')}
                </p>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>{t('trace.intro')}</p>
                  <p>{t('trace.description')}</p>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="font-semibold text-[#183755] mb-3">{t('trace.benefitsTitle')}</p>
                    <ul className="space-y-2">
                      {(t('trace.benefitsItems', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#02b197] mr-2 mt-1">✨</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>{t('trace.conclusion')}</p>

                  <p className="text-xl font-semibold text-[#183755] pt-4">
                    {t('trace.tagline')}
                  </p>

                  <div className="bg-gradient-to-r from-[#02b197] to-[#01987f] p-6 rounded-xl mt-8 text-white">
                    <p className="text-2xl font-bold mb-4 flex items-center">
                      <span className="text-3xl mr-3">{t('trace.bonus.emoji')}</span>
                      {t('trace.bonus.title')}
                    </p>
                    <p className="text-lg mb-6">{t('trace.bonus.description')}</p>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{t('trace.bonus.emoji2')}</span>
                      <button
                        onClick={scrollToDownload}
                        className="bg-white text-[#183755] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                      >
                        {t('trace.bonus.cta')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <img
                  src={traceImage}
                  alt="Exemple d'AUTYVO Trace"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover sticky top-24"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Verification Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#183755]">
                    <div className="flex items-center mb-2">
                      <span className="text-5xl mr-4">{t('verification.emoji')}</span>
                      <span>{t('verification.title')}</span>
                    </div>
                    <div className="ml-[calc(3.75rem+1rem)]">{t('verification.subtitle')}</div>
                  </h2>
                </div>
                <p className="text-2xl font-semibold text-[#02b197] mb-8">
                  {t('verification.tagline')}
                </p>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>{t('verification.description')}</p>

                  <p className="font-semibold text-[#183755] text-xl">
                    {t('verification.rule')}
                  </p>

                  <p>{t('verification.conclusion')}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={verificationImage}
                  alt="Schéma de vérification AUTYVO"
                  className="rounded-xl shadow-2xl w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 bg-gradient-to-br from-[#183755] to-[#0d2337]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Shield size={48} className="text-[#02b197]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('security.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('security.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {(t('security.items', { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all">
                  <div className="flex justify-center mb-4">
                    {index === 0 ? <Shield size={40} className="text-[#02b197]" /> : <Database size={40} className="text-[#02b197]" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border-2 border-[#02b197] rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <FileText size={32} className="text-[#02b197] mr-4 flex-shrink-0" />
                  <div className="text-white">
                    <p className="font-bold text-lg mb-1">{t('security.transparency.title')}</p>
                    <p className="text-gray-300 text-sm">{t('security.transparency.description')}</p>
                  </div>
                </div>
                <button
                  onClick={() => window.open('/privacy', '_blank')}
                  className="bg-[#02b197] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#029d81] transition-all whitespace-nowrap"
                >
                  {t('security.transparency.cta')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-16">
              {t('trust.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md w-full flex items-center justify-center">
                <img
                  src={kivoLogo}
                  alt="KIVO"
                  className="w-full h-auto max-h-24 object-contain"
                />
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md w-full flex items-center justify-center">
                <img
                  src={frenchTechLogo}
                  alt="La French Tech Nantes"
                  className="w-full h-auto max-h-24 object-contain"
                />
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md w-full flex items-center justify-center">
                <img
                  src={backcarLogo}
                  alt="Back Car"
                  className="w-full h-auto max-h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-16">
              {t('testimonials.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {(t('testimonials.items', { returnObjects: true }) as Array<{ name: string; role: string; quote: string }>).map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={
                        index === 0
                          ? 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
                          : 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
                      }
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold text-[#183755] text-lg">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#183755] text-center mb-12">
              {t('faq.title')}
            </h2>
            <div className="space-y-4">
              {(t('faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>).map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#183755] text-left">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-[#02b197] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#02b197] flex-shrink-0" size={24} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
