import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const { t } = useTranslation('landing');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-12">
          {t('faq.title')}
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-brand-secondary text-left">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="text-brand-primary flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-brand-primary flex-shrink-0" size={24} />
                )}
              </button>
              {openFaq === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
