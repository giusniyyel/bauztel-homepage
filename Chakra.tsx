import "@fontsource/nunito";
import "@fontsource/space-mono";

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react";
import theme from "./src/theme";

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export const Chakra = ({ children, cookies }: ChakraProps) => {
  return (
    <ChakraProvider
      resetCSS
      theme={theme}
      colorModeManager={cookies ? cookieStorageManager : localStorageManager}
    >
      {children}
    </ChakraProvider>
  );
};

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>;

export function getServerSideProps({
  req,
}: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
