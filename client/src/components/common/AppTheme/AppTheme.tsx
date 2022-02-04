import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";

// DefaultTheme type definition -> ./AppTheme.d.ts

const AppTheme: DefaultTheme = {
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
    <StyledThemeProvider theme={AppTheme} {...props}>
      {children}
    </StyledThemeProvider>
  );
};
