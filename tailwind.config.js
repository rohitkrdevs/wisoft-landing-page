module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        global: {
          background1: 'var(--global-bg-1)',
          background2: 'var(--global-bg-2)',
          background3: 'var(--global-bg-3)',
          background4: 'var(--global-bg-4)',
          background5: 'var(--global-bg-5)',
          background6: 'var(--global-bg-6)',
          background7: 'var(--global-bg-7)',
          background8: 'var(--global-bg-8)',
          background9: 'var(--global-bg-9)',
          background10: 'var(--global-bg-10)',
          background11: 'var(--global-bg-11)',
          text1: 'var(--global-text-1)',
          text2: 'var(--global-text-2)',
          text3: 'var(--global-text-3)',
          text4: 'var(--global-text-4)',
          text5: 'var(--global-text-5)',
          text6: 'var(--global-text-6)',
        },
        header: {
          background1: 'var(--header-bg-1)',
          text1: 'var(--header-text-1)',
          text2: 'var(--header-text-2)',
        },
        button: {
          background1: 'var(--button-bg-1)',
          background2: 'var(--button-bg-2)',
          text1: 'var(--button-text-1)',
        },
        form: {
          background1: 'var(--form-bg-1)',
          text1: 'var(--form-text-1)',
          text2: 'var(--form-text-2)',
          border1: 'var(--form-border-1)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      keyframes: {
        dropdown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        dropdown: 'dropdown 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
