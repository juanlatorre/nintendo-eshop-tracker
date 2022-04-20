import { Fonts, theme } from "ui";

import type { AppProps } from "next/app";
import { ChakraProvider } from "ui/chakra";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
