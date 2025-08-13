export const theme = {
  colors: {
    primary: '#1B1A18', // Dark brown / near black - Primary Text
    secondary: '#7D7568', // Medium gray-brown - Secondary Text / Subtle Lines
    accent: '#C9B89B', // Warm gold / champagne - Accent / Highlight
    light: '#F6F2EC', // Very light beige / off-white - Background
    text: '#1B1A18', // Dark brown for main text
    textLight: '#7D7568', // Medium gray-brown for secondary text
    textDark: '#1B1A18', // Dark brown for emphasis
    glass: {
      background: 'rgba(246, 242, 236, 0.95)', // Light beige with higher opacity for better contrast
      border: 'rgba(201, 184, 155, 0.4)', // Warm gold with higher opacity
      card: 'rgba(246, 242, 236, 0.98)', // Light beige card background with very high opacity
    },
    gradient: {
      main: 'linear-gradient(135deg, #F6F2EC 0%, #E8E0D8 50%, #F6F2EC 100%)', // Subtle beige gradient
      accent: 'linear-gradient(135deg, #C9B89B 0%, #D4C4A8 100%)', // Warm gold gradient
      glass: 'linear-gradient(135deg, rgba(246, 242, 236, 0.95) 0%, rgba(201, 184, 155, 0.1) 100%)', // Glass effect
    },
    overlay: {
      light: 'rgba(246, 242, 236, 0.8)', // Light beige overlay
      dark: 'rgba(27, 26, 24, 0.1)', // Subtle dark overlay
    }
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  transitions: {
    default: '0.3s ease',
  },
};

export type Theme = typeof theme;
