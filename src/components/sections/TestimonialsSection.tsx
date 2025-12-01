import { useTranslation } from 'react-i18next';
import { useTestimonials } from '@/data/testimonials';

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation('landing');
  const testimonialAvatars = useTestimonials();
  const testimonialData = t('testimonials.items', { returnObjects: true }) as TestimonialItem[];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-16">
          {t('testimonials.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonialAvatars[index]?.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-brand-secondary text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
