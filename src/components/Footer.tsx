import {
  Box,
  Container,
  Link,
  LinkProps,
  HStack,
  VStack,
  Heading,
  Text,
  Flex,
  FlexProps,
} from "@chakra-ui/react";
import { NextChakraLink, NextChakraLinkProps } from "./NextChakraLink";

export const Footer = (props: FlexProps) => {
  return (
    <>
      <Flex
        as="footer"
        py="2rem"
        w="100%"
        maxWidth="full"
        bgColor="#1E3760"
        mt={32}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <VStack w="100%">
          <HStack></HStack>
          <Container
            display="flex"
            maxW="container.xl"
            alignItems="center"
            justifyContent="space-between"
            justifySelf="flex-bottom"
          >
            <Text color="white" mr={0}>
              Copyright © 2022 Bauztel Café. Todos los derechos reservados.
            </Text>
            <Text color="white" marginLeft={0}>
              Powered by{" "}
              <NextChakraLink href="https://www.giusniyyel.com">
                GiusNiyyel
              </NextChakraLink>
            </Text>
          </Container>
        </VStack>
      </Flex>
    </>
  );
};
