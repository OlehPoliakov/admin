import { ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0EA5E9',
    },
    secondary: {
      main: '#E11D48',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
    },
    info: {
      main: '#fbbf24',
    },
    success: {
      main: '#22C55E',
    },
  },
  typography: {
    fontFamily: 'JetBrains Mono',
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0EA5E9',
          color: '#111827',
        },
      },
    },
  },
};