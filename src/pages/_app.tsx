import { DAppProvider } from "@usedapp/core";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DAppProvider config={{ supportedChains: [18159] }}>
        <Component {...pageProps} />
      </DAppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
