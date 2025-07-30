/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Your existing custom design tokens
      colors: {
        // Brand colors
        brand: {
          primary: '#000000',
          secondary: '#6f7279',
        },
        // Grays with semantic names
        gray: {
          50: '#fafaf9',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.3' }],
        '2xl': ['1.875rem', { lineHeight: '1.1' }],
        '3xl': ['2.25rem', { lineHeight: '1.1' }],
        '4xl': ['3rem', { lineHeight: '1.1' }],
        '5xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      // Enhanced animation system for scroll reveals
      animation: {
        // Existing animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        
        // New scroll reveal animations
        'reveal-up': 'revealUp 0.6s ease-out forwards',
        'reveal-up-delay-1': 'revealUp 0.6s ease-out 0.1s forwards',
        'reveal-up-delay-2': 'revealUp 0.6s ease-out 0.2s forwards',
        'reveal-up-delay-3': 'revealUp 0.6s ease-out 0.3s forwards',
        'reveal-up-delay-4': 'revealUp 0.6s ease-out 0.4s forwards',
        'reveal-up-delay-5': 'revealUp 0.6s ease-out 0.5s forwards',
        
        'reveal-left': 'revealLeft 0.7s ease-out forwards',
        'reveal-right': 'revealRight 0.7s ease-out forwards',
        'reveal-fade': 'revealFade 0.8s ease-out forwards',
        
        // Staggered grid animations
        'reveal-stagger-1': 'revealUp 0.6s ease-out 0.05s forwards',
        'reveal-stagger-2': 'revealUp 0.6s ease-out 0.1s forwards',
        'reveal-stagger-3': 'revealUp 0.6s ease-out 0.15s forwards',
        'reveal-stagger-4': 'revealUp 0.6s ease-out 0.2s forwards',
        'reveal-stagger-5': 'revealUp 0.6s ease-out 0.25s forwards',
        'reveal-stagger-6': 'revealUp 0.6s ease-out 0.3s forwards',
        'reveal-stagger-7': 'revealUp 0.6s ease-out 0.35s forwards',
        'reveal-stagger-8': 'revealUp 0.6s ease-out 0.4s forwards',
        'reveal-stagger-9': 'revealUp 0.6s ease-out 0.45s forwards',
        'reveal-stagger-10': 'revealUp 0.6s ease-out 0.5s forwards',
      },
      keyframes: {
        // Existing keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        
        // New scroll reveal keyframes
        revealUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(24px)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)',
          },
        },
        revealLeft: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-32px)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)',
          },
        },
        revealRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(32px)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)',
          },
        },
        revealFade: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
      },
      screens: {
        'xs': '475px',
      },
      gridTemplateColumns: {
        'project': 'repeat(auto-fit, minmax(280px, 1fr))',
        'project-lg': 'repeat(auto-fit, minmax(320px, 1fr))',
      }
    },
  },
  plugins: [],
}