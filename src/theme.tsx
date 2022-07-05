import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
});

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
  body: `'Space Mono', sans-serif`,
};

const textStyles = {
  h1: {
    fontFamily: "Nunito",
    fontSize: "6.313em",
    fontWeight: "300",
    letterSpacing: "-0.094em",
  },
  h2: {
    fontFamily: "Nunito",
    fontSize: "3.938em",
    fontWeight: "300",
    letterSpacing: "-0.031em",
  },
  h3: {
    fontFamily: "Nunito",
    fontSize: "3.125em",
    fontWeight: "400",
    letterSpacing: "0em",
  },
  h4: {
    fontFamily: "Nunito",
    fontSize: "2.25em",
    fontWeight: "400",
    letterSpacing: "0.016em",
  },
  h5: {
    fontFamily: "Nunito",
    fontSize: "1.563em",
    fontWeight: "400",
    letterSpacing: "0em",
  },
  h6: {
    fontFamily: "Nunito",
    fontSize: "1.313em",
    fontWeight: "500",
    letterSpacing: "0.009em",
  },
  p: {
    fontFamily: "Space Mono",
    fontSize: "1.063em",
    fontWeight: "400",
    letterSpacing: "0.031em",
  },
};

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors,
  textStyles,
  fonts,
  breakpoints,
});

export default theme;
