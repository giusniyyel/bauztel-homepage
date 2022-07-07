import { ReactNode } from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "Bauztel Café" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {/* This flex will fix the footer position to bottom of the page*/}
    <Flex as="div" flexDirection="column" minHeight={"100vh"} w="100%">
      <Navbar />
      <Flex as="main" flexDirection="column" flexGrow={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  </>
);
