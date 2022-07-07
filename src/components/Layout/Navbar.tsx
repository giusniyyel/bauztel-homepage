import { useRouter } from "next/router";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "../Utils/Logo";

type LinkItemProps = {
  children?: React.ReactNode;
  href: string;
  path: string;
  target?: string;
};

const LinkItem = (props: LinkItemProps) => {
  const active = props.path === props.href;
  const inactiveColor = "#1E3760";
};

const navLinks = [
  { title: "Inicio", path: "/" },
  { title: "Nuestro Café", path: "/our-coffee" },
  { title: "Nosotros", path: "/about" },
  { title: "Contáctanos", path: "/contact" },
];

export const Navbar = (props: any) => {
  const { asPath } = useRouter();

  return <></>;
};
