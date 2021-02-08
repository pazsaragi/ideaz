import React from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Heading,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/client";
import { HamburgerIcon } from "@chakra-ui/icons";

const MenuItems = ({ children }: any) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export default function Navbar() {
  const [session] = useSession();

  const handleAuth = (e: any) => {
    e.preventDefault();
    if (session) {
      signOut();
      return;
    }
    signIn();
    return;
  };

  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["brand.prim"]}
      color={["white", "white", "primary.700", "primary.700"]}
      // {...props}
    >
      <Flex align="center">
        {/* <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        /> */}
        <Heading fontSize="18px">IDEAZ</Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <HamburgerIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">
            <Link href="/">Home</Link>
          </MenuItems>
          <MenuItems to="/how">
            <Link href="/feed">Ideas</Link>{" "}
          </MenuItems>
          {session ? (
            <MenuItems to="/profile">
              <Link href="/profile">Profile</Link>{" "}
            </MenuItems>
          ) : (
            <></>
          )}
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["white"]}
              bg={["primary.50"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
              onClick={handleAuth}
            >
              <React.Fragment>
                {session ? "Sign Out" : "Sign In"}
              </React.Fragment>
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
}
