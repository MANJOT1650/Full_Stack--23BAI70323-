import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#6200ea', // Vibrant Deep Purple
      light: '#9d46ff',
      dark: '#0a00b6',
    },
    secondary: {
      main: '#00bfa5', // Teal Accent
      light: '#5df2d6',
      dark: '#008e76',
    },
    background: {
      default: mode === 'light'
        ? '#f3f4f6'
        : '#0f172a',
      // We will handle the gradient in CssBaseline or body style, 
      // but let's keep the base solid color here for fallback.
      paper: mode === 'light' ? '#ffffff' : '#1e293b',
    },
    text: {
      primary: mode === 'light' ? '#1f2937' : '#f8fafc',
      secondary: mode === 'light' ? '#4b5563' : '#cbd5e1',
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      background: mode === 'light' ? 'linear-gradient(45deg, #6200ea 30%, #ec407a 90%)' : 'linear-gradient(45deg, #9d46ff 30%, #ff80ab 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '8px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #6200ea 30%, #7c4dff 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #00bfa5 30%, #1de9b6 90%)',
          color: '#fff'
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light'
            ? '0 10px 30px rgba(0,0,0,0.05)'
            : '0 10px 30px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: mode === 'light'
              ? '0 20px 40px rgba(98, 0, 234, 0.15)'
              : '0 20px 40px rgba(0, 0, 0, 0.5)',
          }
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: mode === 'light' ? '#ffffff' : '#1e293b',
          color: mode === 'light' ? '#333' : '#fff',
        }
      }
    }
  },
});

export default getTheme;
