/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: {
            main: '#02B197',
            light: '#04D4B4',
            dark: '#018F7A',
            DEFAULT: '#02B197',
          },
          secondary: {
            main: '#183755',
            light: '#2A4D6E',
            dark: '#0D2133',
            DEFAULT: '#183755',
          },
          accent: {
            main: '#FFCC00',
            light: '#FFD633',
            dark: '#CCA300',
            DEFAULT: '#FFCC00',
          },
        },
        // Categories
        income: '#10B981',
        fuel: '#F97316',
        maintenance: '#FFCC00',
        'technical-inspection': '#3B82F6',
        photo: '#8B5CF6',
        charging: '#06B6D4',
        toll: '#64748B',
        parking: '#6366F1',
        insurance: '#1E40AF',
        taxes: '#DC2626',
        cleaning: '#0891B2',
        leasing: '#059669',
        fines: '#EF4444',
        'driving-lessons': '#EA580C',
        'accident-report': '#DC2626',
        'vehicle-registration': '#1E3A8A',
        other: '#6B7280',
        // Status colors
        success: '#02B197',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        // Action colors
        link: '#0A84FF',
        hover: '#D1FAE5',
        icon: '#183755',
        // Surface colors
        background: '#F8F9FA',
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F2F2F7',
          disabled: '#E2E8F0',
        },
        border: {
          DEFAULT: '#E5E9EC',
        },
        // Text colors
        text: {
          primary: '#1A1A1A',
          secondary: '#4A5568',
          disabled: '#A0AEC0',
        },
      },
      boxShadow: {
        'z1': '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        'z2': '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
        'z3': '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
