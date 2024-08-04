import { createTheme } from '@mui/material/styles';
import tw, { theme as tailwindTheme } from 'twin.macro';

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindTheme`colors.primary`,
      contrastText: tailwindTheme`colors.white`,
    },
    secondary: {
      main: tailwindTheme`colors.secondary`,
      contrastText: tailwindTheme`colors.white`,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'medium',
        color: 'primary',
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          ...tw`capitalize font-cabinet font-bold normal-case shadow-lg`,
        },
      },
    },
  },
});

export default theme;
