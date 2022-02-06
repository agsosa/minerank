import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "src/components/common/GlobalStyle";
import { AppThemeProvider } from "src/components/common/AppTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Minerank - Los mejores servidores de Minecraft</title>
        <meta name="description" content="Lista de los mejores servidores de Minecraft" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <CssBaseline />
      <GlobalStyle />
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  );
}

export default App;
