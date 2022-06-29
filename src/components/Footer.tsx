import {
  Container,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";

export const Footer = () => {
  let actualYear = new Date().getFullYear();

  return (
    <>
      <Flex as="footer" bgColor="#1E3760" py={2} position="sticky" mt={8}>
        <Container p={4} maxW="container.xl">
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            width={{ base: "full", md: "auto" }}
          >
            <Text color="white" align="center">
              Copyright © {actualYear} Bauztel Café. Todos los derechos
              reservados.
            </Text>
            <Text color="white" align="center">
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
