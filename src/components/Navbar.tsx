import NextLink from "next/link";
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
import { NextChakraLink } from "./NextChakraLink";
import { SellButton } from "./SellButton";
import { Logo } from "./Logo";

type LinkItemProps = {
  children?: React.ReactNode;
  href: string;
  path: string;
  target?: string;
};

const LinkItem = (props: LinkProps & LinkItemProps) => {
  const active = props.path === props.href;
  const inactiveColor = "blue";

  return (
    <NextChakraLink href={props.href} passHref scroll={false}>
        <Link
          p={2}
          color={active ? "white" : inactiveColor}
          target={props.target}
          {...props}
        >
          {props.children}
        </Link>
    </NextChakraLink>
  );
};

export const Navbar = (props: any) => {
  const { pathname } = useRouter();
  return (
    <>
      <Box
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
            <LinkItem href="/" path={pathname}>
              Home
            </LinkItem>
            <LinkItem href="/about-us" path={pathname}>
              About
            </LinkItem>
            <LinkItem href="/works" path={pathname}>
              Works
            </LinkItem>
          </HStack>
          <SellButton justifySelf="flex-end" />
        </Container>
      </Box>
    </>
  );
};
