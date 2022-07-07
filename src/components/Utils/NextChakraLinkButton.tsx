import { Button, ButtonProps } from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";

export type LinkButtonProps = {
  children?: React.ReactNode;
  href?: string;
};

export const NextChakraLinkButton = (props: LinkButtonProps & ButtonProps) => {
  return (
    <NextChakraLink href={props.href}>
      <Button colorScheme={"primary"} {...props}>
        {props.children}
      </Button>
    </NextChakraLink>
  );
};
