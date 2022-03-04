import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import CssBaseline from "@mui/material/CssBaseline";

import GlobalStyle from "src/components/common/GlobalStyle";
import { AppThemeProvider } from "src/components/common/AppTheme";
import { storeWrapper } from "src/state/store";

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

export default storeWrapper.withRedux(App);
