import {
  Container,
  Stack,
  Text,
  Flex,
  Link,
  TextProps,
  SimpleGrid,
} from "@chakra-ui/react";
import { NextChakraLink } from "../Utils/NextChakraLink";

const ListHeader = ({ children }: TextProps) => {
  return (
    <Text fontWeight={"600"} color={"white"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  let actualYear = new Date().getFullYear();

  return (
    <>
      <Flex
        as="footer"
        bgColor="#1E3760"
        py={2}
        flexDirection="column"
        textColor="white"
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Contáctanos</ListHeader>
              <Link href={"#"}>Overview</Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"#"}>Features</Link>
              </Stack>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            width={{ base: "full", md: "auto" }}
          >
            <Text align="center">
              Copyright © {actualYear} Bauztel Café. Todos los derechos
              reservados.
            </Text>
            <Text align="center">
              Powered by{" "}
              <NextChakraLink href="https://www.giusniyyel.com">
                GiusNiyyel
              </NextChakraLink>
            </Text>
          </Stack>
        </Container>
      </Flex>
    </>
  );
};
