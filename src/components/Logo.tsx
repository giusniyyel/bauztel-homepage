import {
  keyframes,
  ImageProps,
  Image,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = (props: ImageProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <>
      <NextChakraLink href="/">
        <Image src="/logo.svg" alt="Bauztel Logo" {...props} />
      </NextChakraLink>
    </>
  );
};
