import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Wotfard';
        src: url('./wotfard-regular-webfont.woff2') format('woff2');
      }
      `}
  />
);
