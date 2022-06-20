import { Button, ButtonProps } from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";

export const SellButton = (props: ButtonProps) => {
  return (
    <NextChakraLink href="/become-seller">
      <Button backgroundColor="#1E3760" colorScheme="facebook" size="lg" {...props}>
        Vender Café
      </Button>
    </NextChakraLink>
  );
};
