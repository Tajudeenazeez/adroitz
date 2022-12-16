import { extendTheme, theme as base } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  darkBlue: "#192a56",
  bgOrange: "#ff5400",
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `Poppins,${base.fonts?.heading}`,
    body: `Poppins,${base.fonts?.body}`,
  },
});

export default theme;
