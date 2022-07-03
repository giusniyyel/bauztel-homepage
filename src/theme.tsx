import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const colors = {
  primary: {
    900: "#0c1626",
    800: "#122139",
    700: "#182c4d",
    600: "#1b3156",
    500: "#1e3760",
    400: "#244273",
    300: "#344b6f",
    200: "#61738f",
    100: "#8e9baf",
  },
  secondary: {
    900: "#624200",
    800: "#936401",
    700: "#c48501",
    600: "#dd9601",
    500: "#f6a702",
    400: "#f6af1b",
    300: "#f7b834",
    200: "#fad380",
    100: "#fce4b3",
  },
};

const fonts = {
  heading: `'Nunito', sans-serif`,
  body: `'Source Code Pro', sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        height: "100%",
      },
    },
  },
  colors,
  fonts,
  breakpoints,
});

export default theme;
