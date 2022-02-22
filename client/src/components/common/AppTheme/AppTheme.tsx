import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: { main: "#158f3e" },
  },
  typography: {
    allVariants: {
      color: "#1E293B",
    },
  },
});

// DefaultTheme type definition -> ./AppTheme.d.ts

const styledTheme: DefaultTheme = {
  colors: {
    primary: "#440099",
    primary_light: "#654bb9",
    secondary: "#d30098",
    grey: "#888888",
    grey_light: "#f1f1f1",
  },
};

export const AppThemeProvider: React.FC = ({ children, ...props }) => {
  return (
    <MUIThemeProvider theme={muiTheme} {...props}>
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </MUIThemeProvider>
  );
};
