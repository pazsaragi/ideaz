import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { Container } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Ideaz" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/logo/logo.svg" />
    </Head>
    <header>
      <Navbar />
    </header>
    <Container maxWidth="90%">{children}</Container>
    <Footer />
  </div>
);

export default Layout;
