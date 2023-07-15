import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

const colors = {
  primary: '#140A4B',
  secondary: {
    red: {
      100: '#EE2334',
      200: '#EC1651',
    },
    blue: {
      100: '#1b4dff',
    },
    gray: {
      50: '#f4f7fb',
      100: '#F4F7F9',
      200: '#EFF3F6',
      300: '#DDE2E6',
      400: '#CCD4D9',
      500: '#B4BEC5',
    },
  },
  shadow: {
    light: '#6158AA',
    dark: '#140A4B',
  },
};

const fontSize = {
  xs: ['0.8rem', { lineHeight: '1.9' }],
  sm: ['0.875rem', { lineHeight: '1.9' }],
  base: ['1rem', { lineHeight: '1.9' }],
  lg: ['1.125rem', { lineHeight: '1.9' }],
  xl: ['1.25rem', { lineHeight: '1.9' }],
  '2xl': ['1.5rem', { lineHeight: '1.9' }],
  '3xl': ['1.875rem', { lineHeight: '1.2' }],
  '4xl': ['2.25rem', { lineHeight: '1.2' }],
  '5xl': ['3rem', { lineHeight: '1.2' }],
  '6xl': ['3.75rem', { lineHeight: '1.2' }],
  '7xl': ['4.5rem', { lineHeight: '1.2' }],
  '8xl': ['6rem', { lineHeight: '1.2' }],
  '9xl': ['8rem', { lineHeight: '1.2' }],
};

const boxShadow = {
  'custom-sm':
    '0 1px 8px 0px rgb(0 0 0 / 0.15), 0 0.5px 3px -4px rgb(0 0 0 / 0.15)',
  'custom-md':
    '0 2px 12px 0px rgb(0 0 0 / 0.15), 0 1px 8px -5px rgb(0 0 0 / 0.15)',
  'custom-lg':
    '0 4px 20px 0px rgb(0 0 0 / 0.15), 0 2px 12px -7px rgb(0 0 0 / 0.15)',
  'custom-xl':
    '0 8px 35px 0px rgb(0 0 0 / 0.15), 0 3px 18px -9px rgb(0 0 0 / 0.15)',
  'custom-2xl':
    '0 12px 50px 0px rgb(0 0 0 / 0.15), 0 4px 26px -11px rgb(0 0 0 / 0.15)',
  'custom-3xl':
    '0 14px 65px 0px rgba(0, 0, 0, 0.15), 0 10px 32px -12px rgb(0 0 0 / 0.15)',
};

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  theme: {
    fontSize,
    colors,
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1366px',
      },
    },
    extend: {
      fontSize: {
        md: ['1rem', { lineHeight: '1.7' }],
      },
      boxShadow,
      container: {
        screens: {
          xs: '100%',
          '3xl': '2560px',
        },
      },
      breakpoints: {
        xs: '375px',
        '3xl': '2560px',
      },
      screens: {
        xs: '375px',
        '3xl': '2560px',
      },
      backgroundImage: {
        'header-pattern-dark': "url('/svg/header-pattern-dark.svg')",
        'header-pattern-light': "url('/svg/header-pattern-light.svg')",
        piggingCover: "url('/images/home/hero/pigging.webp')",
      },
      animation: {
        fade: 'fade 0.4s ease-in-out',
        slideDown: 'slideDown 1s ease-in',
        'spin-slow': 'spin 9s linear infinite',
      },
      keyframes: {
        ping: {
          '75%': {
            transform: 'scale(1.35)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1.35)',
            opacity: 0,
          },
        },
        smallping: {
          '75%': {
            transform: 'scale(1.05)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1.05)',
            opacity: 0,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade: {
          '0%': {
            scale: 0,
            opacity: 0,
          },
          '100%': {
            opacity: 1,
            scale: 1,
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-70px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      spacing: {
        'mobile-navbar': '50px',
        'desktop-navbar': '58px',
        desktop: '150px',
        mobile: '100px',
        'custom-xs': '10px',
        'custom-sm': '15px',
        'custom-md': '25px',
        'custom-lg': '30px',
        'custom-xl': '45px',
        'custom-2xl': '60px',
        'custom-3xl': '75px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  preflights: [
    {
      getCSS: () => ``,
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ['Montserrat:300,400,500,600,700', 'Kanit:300,400,500,600,700'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
