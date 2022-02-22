import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "src/components/common/GlobalStyle";
import { AppThemeProvider } from "src/components/common/AppTheme";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;

  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <AppThemeProvider>
        <UserProvider user={user}>
          <Component {...pageProps} />
        </UserProvider>
      </AppThemeProvider>
    </>
  );
}

export default App;
