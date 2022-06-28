import { ReactNode } from "react";
import { Flex, VStack, Center, Heading, Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
};

export const Hero = ({
  title = "Hero Title",
  subtitle = "Hero Subtitle",
}: Props) => {
  return (
    <>
      <Flex w="100%" maxWidth="full" justifyContent="center" bgColor="#F6A702">
        <VStack w="100%" maxWidth="container.xl" my={16}>
          <Heading textAlign="center" as="h1" size="2xl">
            {title}
          </Heading>
          <Text align="center">{subtitle}</Text>
        </VStack>
      </Flex>
    </>
  );
};
