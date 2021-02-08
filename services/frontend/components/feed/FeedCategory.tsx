import { Box, Badge, Button, Stack, Heading, Center } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";
import { CategoryModel } from "../../interfaces";
import Link from "next/link";

interface Props {
  category: CategoryModel;
}

const FeedCategory = ({ category }: Props) => {
  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign="center"
      bgColor={category?.color ?? "brand.primary"}
      border="0px"
      height="100px"
      color="brand.font.prim"
      _hover={{
        background: "white",
        color: category?.color ?? "black",
        transition: "ease-in 0.2s",
        cursor: "pointer",
      }}
    >
      <Center h="inherit">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Heading as="h4" fontSize="18px">
            {category.name}
          </Heading>
        </Box>
      </Center>
    </Box>
  );
};
export default FeedCategory;
