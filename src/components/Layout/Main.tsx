import { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "Bauztel Café" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {/* This flex will fix the footer position to bottom of the page*/}
    <Navbar />
    {children}
    <Footer />
  </>
);
