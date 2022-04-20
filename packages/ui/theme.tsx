import { extendTheme } from "@chakra-ui/react";

// Why any? https://github.com/chakra-ui/chakra-ui/issues/4913
export const theme: any = extendTheme({
  fonts: {
    heading: `"Wotfard",Futura,-apple-system,sans-serif`,
    body: `"Wotfard",Futura,-apple-system,sans-serif`,
  },
});
