import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { GlobalTheme } from "../theme";
import { Global } from "@emotion/react";
import fonts from "../styles/font-face";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Global styles={[fonts]} />
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
