import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// Types for CGU sections from i18n
interface CGUItem {
  term?: string;
  definition?: string;
}

interface CGUSection {
  title: string;
  content?: string | string[];
  items?: (string | CGUItem)[];
  intro?: string;
  report?: {
    intro: string;
    items: string[];
  };
  objective?: string;
  disclaimer?: string[];
}

const TermsPage: React.FC = () => {
  const { t } = useTranslation('cgu');

  const renderSection = (sectionKey: string) => {
    const section = t(`sections.${sectionKey}`, { returnObjects: true }) as CGUSection;

    if (!section) return null;

    return (
      <section className="mb-8" key={sectionKey}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
        
        {/* Simple content (string) */}
        {typeof section.content === 'string' && (
          <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
        )}

        {/* Array of content */}
        {Array.isArray(section.content) && section.content.map((paragraph: string, idx: number) => (
          <p key={idx} className="text-gray-700 leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}

        {/* Items list (definitions) */}
        {section.items && Array.isArray(section.items) && (
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            {section.items.map((item: string | CGUItem, idx: number) => (
              <li key={idx}>
                {item.term && <strong>{item.term}</strong>}
                {item.definition && <span> {item.definition}</span>}
                {typeof item === 'string' && item}
              </li>
            ))}
          </ul>
        )}

        {/* Intro + items */}
        {section.intro && (
          <>
            <p className="text-gray-700 leading-relaxed mb-2">{section.intro}</p>
            {section.items && (
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                {section.items.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* Section 15 specific structure */}
        {section.report && (
          <>
            <p className="text-gray-700 leading-relaxed mb-2">{section.report.intro}</p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              {section.report.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}
        
        {section.objective && (
          <p className="text-gray-700 leading-relaxed mb-2">{section.objective}</p>
        )}

        {section.disclaimer && Array.isArray(section.disclaimer) && (
          <>
            {section.disclaimer.map((para: string, idx: number) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-2">{para}</p>
            ))}
          </>
        )}
      </section>
    );
  };

  // Liste des sections disponibles
  const sectionKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('header.title')}
          </h1>

          {sectionKeys.map((key) => renderSection(key))}
        </div>
      </div>
    </>
  );
};

export default TermsPage;
