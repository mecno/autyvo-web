import { useState } from 'react';
import { Send } from 'lucide-react';

export type ContactFormVariant = 'contact' | 'demo';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  company?: string;
  sector?: string;
}

interface ContactFormProps {
  variant: ContactFormVariant;
  onSubmit: (data: ContactFormData) => void;
  translations: {
    fields: {
      name: string;
      email: string;
      phone: string;
      subject?: string;
      message?: string;
      company?: string;
      sector?: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message?: string;
      company?: string;
    };
    subjects?: {
      select: string;
      support: string;
      question: string;
      partnership: string;
      feedback: string;
      other: string;
    };
    sectors?: {
      select: string;
      garage: string;
      dealer: string;
      fleet: string;
      other: string;
    };
    submitButton: string;
    disclaimer?: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ variant, onSubmit, translations }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    ...(variant === 'contact' ? { subject: '', message: '' } : { company: '', sector: '' }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-secondary mb-2">
            {translations.fields.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            placeholder={translations.placeholders.name}
          />
        </div>

        {/* Company (demo variant only) */}
        {variant === 'demo' && (
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-brand-secondary mb-2">
              {translations.fields.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company || ''}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder={translations.placeholders.company}
            />
          </div>
        )}

        {/* Email (spans 2 cols if contact variant) */}
        {variant === 'contact' && (
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-secondary mb-2">
              {translations.fields.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder={translations.placeholders.email}
            />
          </div>
        )}
      </div>

      {/* Sector (demo variant only) */}
      {variant === 'demo' && translations.sectors && (
        <div>
          <label htmlFor="sector" className="block text-sm font-semibold text-brand-secondary mb-2">
            {translations.fields.sector}
          </label>
          <select
            id="sector"
            name="sector"
            value={formData.sector || ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">{translations.sectors.select}</option>
            <option value="garage">{translations.sectors.garage}</option>
            <option value="dealer">{translations.sectors.dealer}</option>
            <option value="fleet">{translations.sectors.fleet}</option>
            <option value="other">{translations.sectors.other}</option>
          </select>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-secondary mb-2">
            {translations.fields.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            placeholder={translations.placeholders.phone}
          />
        </div>

        {/* Subject (contact variant only) */}
        {variant === 'contact' && translations.subjects && (
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-brand-secondary mb-2">
              {translations.fields.subject}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject || ''}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            >
              <option value="">{translations.subjects.select}</option>
              <option value="support">{translations.subjects.support}</option>
              <option value="question">{translations.subjects.question}</option>
              <option value="partnership">{translations.subjects.partnership}</option>
              <option value="feedback">{translations.subjects.feedback}</option>
              <option value="other">{translations.subjects.other}</option>
            </select>
          </div>
        )}

        {/* Email (demo variant only, in second row) */}
        {variant === 'demo' && (
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-secondary mb-2">
              {translations.fields.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder={translations.placeholders.email}
            />
          </div>
        )}
      </div>

      {/* Message (contact variant only) */}
      {variant === 'contact' && (
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-brand-secondary mb-2">
            {translations.fields.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder={translations.placeholders.message}
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
      >
        <Send className="mr-2" size={20} />
        {translations.submitButton}
      </button>

      {/* Disclaimer (optional) */}
      {translations.disclaimer && (
        <p className="text-sm text-gray-600 text-center mt-6">{translations.disclaimer}</p>
      )}
    </form>
  );
};

export default ContactForm;
