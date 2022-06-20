import { useRouter } from "next/router";
import {
  Box,
  Container,
  Link,
  LinkProps,
  HStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { NextChakraLink, NextChakraLinkProps } from "./NextChakraLink";
import { SellButton } from "./SellButton";
import { Logo } from "./Logo";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

type LinkItemProps = {
  children?: React.ReactNode;
  href: string;
  path: string;
  target?: string;
};

const LinkItem = (props: NextChakraLinkProps & LinkItemProps) => {
  const active = props.path === props.href;
  const inactiveColor = "#1E3760";

  return (
    <NextChakraLink
      href={props.href}
      scroll={false}
      p={2}
      color={active ? "white" : inactiveColor}
      target={props.target}
      {...props}
    >
      {props.children}
    </NextChakraLink>
  );
};

export const Navbar = (props: any) => {
  const { asPath } = useRouter();

  return (
    <>
      <Box
        backgroundColor="#F6A702"
        position="fixed"
        w="100%"
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.xl"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={5}>
            <Logo h="4em" mr={4} />
          </Flex>
          <HStack spacing={12} mt={{ base: 4, md: 0 }}>
            <LinkItem href="/" path={asPath} fontWeight="bold">
              Inicio
            </LinkItem>
            <LinkItem href="/our-coffee" path={asPath} fontWeight="bold">
              Nuestro Café
            </LinkItem>
            <LinkItem href="/about-us" path={asPath} fontWeight="bold">
              Nosotros
            </LinkItem>
            <LinkItem href="/contact-us" path={asPath} fontWeight="bold">
              Contáctanos
            </LinkItem>
          </HStack>
          <SellButton justifySelf="flex-end" />
        </Container>
      </Box>
    </>
  );
};
