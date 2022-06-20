import { ReactNode } from "react";
import Head from "next/head";
import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { NextChakraLink } from "./NextChakraLink";
import { Navbar } from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "Bauztel Café" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Bauztel Café Website" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta
        name="twitter:title"
        content="Bauztel Café: Café orgánico 100% Chiapas"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bauztel" />
      <meta name="twitter:creator" content="@giusniyyel" />
      <meta name="twitter:image" content="https://www.bauztel.com/card.png" />
      <meta property="og:site_name" content="Bauztel Café" />
      <meta
        name="og:title"
        content="Bauztel Café: Café orgánico 100% Chiapas"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.bauztel.com/card.png" />
    </Head>
    <Navbar />
    <Container maxWidth="full" pt={20}>
      {children}
    </Container>
  </div>
);
