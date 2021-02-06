import { Box, Badge, Button, Stack } from "@chakra-ui/react";
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
    >
      <Image src={category.src} alt="tech" width={100} height={100} />

      <Box>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {category.description}
        </Box>
      </Box>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {category.title}
      </Box>

      <Stack direction="row" spacing={4}>
        <Button
          isLoading={false}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          <Link href={"/feed/" + category.href}>More...</Link>
        </Button>
      </Stack>
    </Box>
  );
};
export default FeedCategory;
