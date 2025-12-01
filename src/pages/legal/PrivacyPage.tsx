import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Shield, Database, FileText, Users, CheckCircle } from 'lucide-react';
import { CONTACT_EMAIL, LEGAL_ENTITY } from '@/constants';

// Type for privacy policy data items
interface PrivacyDataItem {
  title: string;
  detail: string;
}

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation('privacy');

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield size={64} className="text-brand-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t('header.title')}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {t('header.subtitle')}
              </p>
              <p className="text-lg text-gray-400">
                {t('header.version')}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section 1: Introduction */}
            <div className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center">
                <FileText className="mr-3 text-brand-primary" size={28} />
                {t('sections.introduction.title')}
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {(t('sections.introduction.content', { returnObjects: true }) as string[]).map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>

            {/* Section 2: Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center">
                <Users className="mr-3 text-brand-primary" size={28} />
                {t('sections.controller.title')}
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('sections.controller.intro')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-brand-secondary">{LEGAL_ENTITY.name}</p>
                  <p className="text-gray-700">{t('sections.controller.address')}</p>
                  <p className="text-gray-700">
                    {t('sections.controller.contact')}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('sections.controller.dpo')}{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            {/* Section 3: Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center">
                <Database className="mr-3 text-brand-primary" size={28} />
                {t('sections.data.title')}
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('sections.data.intro')}
                </p>
                <div className="space-y-4">
                  {(t('sections.data.items', { returnObjects: true }) as PrivacyDataItem[]).map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-brand-primary mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-brand-secondary">{item.title}</p>
                        <p className="text-gray-600">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark p-8 rounded-xl text-white text-center">
              <Shield size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('sections.conclusion.title')}</h3>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                {t('sections.conclusion.content')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;
