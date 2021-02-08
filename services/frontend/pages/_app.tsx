import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { GlobalTheme } from "../theme";
import { Global } from "@emotion/react";
import fonts from "../styles/font-face";
import { Provider as AuthProvider } from "next-auth/client";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  const { session } = pageProps;
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Global styles={[fonts]} />
      <CSSReset />
      <AuthProvider session={session}>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
