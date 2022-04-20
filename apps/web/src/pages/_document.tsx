import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import { ColorModeScript } from "ui/chakra";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode="system" type="cookie" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
