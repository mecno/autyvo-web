import { useState } from 'react';
import { Send } from 'lucide-react';

export type ContactFormVariant = 'contact' | 'demo';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Optional to match backend (no @NotBlank)
  subject?: string;
  message?: string;
  company?: string;
  sector?: string;
  consent: boolean; 
  website?: string;
}

interface ContactFormProps {
  variant: ContactFormVariant;
  onSubmit: (data: ContactFormData) => void;
  isLoading?: boolean;
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
    consent: {
      label: string;
      required: string;
    };
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ variant, onSubmit, isLoading = false, translations }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    consent: false,
    website: '', // 🍯 Honeypot - initialized empty. If it changes, it's a bot.
    ...(variant === 'contact' ? { subject: '', message: '' } : { company: '', sector: '' }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: consent must be true (matches backend @AssertTrue)
    if (!formData.consent) {
      alert(translations.consent.required);
      return;
    }
    
    if (!isLoading) {
      onSubmit(formData);
    }
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
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      {/* 🍯 HONEYPOT (POT DE MIEL) 
          Ce champ est un piège anti-spam:
          - Visible pour les robots qui lisent le HTML brut
          - Invisible pour les humains (CSS)
          - Invisible pour les lecteurs d'écran (aria-hidden)
          - Inaccessible au clavier (tabIndex={-1})
      */}
      <div 
        aria-hidden="true" 
        className="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden"
        style={{ left: '-9999px' }} // Double sécurité pour sortir de l'écran
      >
        <label htmlFor="website_honeypot">
          {/* Label alléchant pour un bot, mais générique */}
          Website URL
        </label>
        <input
          type="text"
          id="website_honeypot"
          name="website"          // ⚠️ DOIT MATCHER LE DTO JAVA EXACTEMENT
          tabIndex={-1}           // Empêche l'utilisateur d'y aller avec la touche TAB
          autoComplete="off"      // Empêche le navigateur de le remplir automatiquement
          value={formData.website || ''}
          onChange={handleChange} // On enregistre si le bot écrit dedans
        />
      </div>

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
            value={formData.phone || ''}
            onChange={handleChange}
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
            {formData.message && (
              <span className="text-xs text-gray-500 ml-2">
                ({formData.message.length}/3000)
              </span>
            )}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
            required
            maxLength={3000}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder={translations.placeholders.message}
          />
        </div>
      )}

      {/* Consent Checkbox */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          required
          className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
        />
        <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
          {translations.consent.label}
          <span className="text-red-500 ml-1">*</span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || !formData.consent}
        className="w-full md:w-auto px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition-all transform hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="mr-2" size={20} />
            {translations.submitButton}
          </>
        )}
      </button>

      {/* Disclaimer (optional) */}
      {translations.disclaimer && (
        <p className="text-sm text-gray-600 text-center mt-6">{translations.disclaimer}</p>
      )}
    </form>
  );
};

export default ContactForm;
