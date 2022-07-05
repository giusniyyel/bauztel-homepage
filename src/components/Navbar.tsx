import { useRouter } from "next/router";
import {
  Box,
  Container,
  Stack,
  Flex,
  Menu,
  MenuItem,
  IconButton,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { NextChakraLink, NextChakraLinkProps } from "./NextChakraLink";
import { NextChakraLinkButton } from "./NextChakraLinkButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";

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
      fontWeight={"bold"}
      href={props.href}
      p={2}
      _hover={{ color: "primary.900" }}
      color={active ? "white" : inactiveColor}
      target={props.target}
      {...props}
    >
      {props.children}
    </NextChakraLink>
  );
};

const navLinks = [
  { title: "Inicio", path: "/" },
  { title: "Nuestro Café", path: "/our-coffee" },
  { title: "Nosotros", path: "/about" },
  { title: "Contáctanos", path: "/contact" },
];

export const Navbar = (props: any) => {
  const { asPath } = useRouter();

  return (
    <>
      <Box
        backgroundColor="#F6A702"
        position="sticky"
        w="100%"
        top={0}
        as="header"
        zIndex={2}
        {...props}
      >
        <Container
          as="nav"
          display="flex"
          p={2}
          maxW="container.xl"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={5}>
            <Logo h={{ base: "2em", lg: "4em" }} mr={4} />
          </Flex>
          <Stack
            spacing={12}
            mt={{ base: 4, md: 0 }}
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
          >
            {navLinks.map((link, index) => (
              <LinkItem key={index} href={link.path} path={asPath}>
                {link.title}
              </LinkItem>
            ))}
            <NextChakraLinkButton href="/become-seller" justifySelf="flex-end">
              ¡Vende café!
            </NextChakraLinkButton>
          </Stack>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {navLinks.map((link, index) => (
                  <NextChakraLink key={index} href={link.path} passHref>
                    <MenuItem>{link.title}</MenuItem>
                  </NextChakraLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Container>
      </Box>
    </>
  );
};
