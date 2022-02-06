import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "src/components/common/GlobalStyle";
import { AppThemeProvider } from "src/components/common/AppTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  );
}

export default App;
