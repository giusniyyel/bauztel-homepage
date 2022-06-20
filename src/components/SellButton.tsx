import { Button, ButtonProps } from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";

export const SellButton = (props: ButtonProps) => {
  return (
    <NextChakraLink href="/become-seller">
      <Button colorScheme="teal" size="lg" {...props}>
        Vender Café
      </Button>
    </NextChakraLink>
  );
};
