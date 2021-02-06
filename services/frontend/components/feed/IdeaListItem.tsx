import { Box, Badge, Button, Stack, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { IdeaModel } from "../../interfaces";

interface Props {
  idea: IdeaModel;
}

const IdeaListItem = ({ idea }: Props) => {
  return (
    <Box
      borderColor="border.50"
      border="1px"
      borderRadius="lg"
      marginTop="10"
      padding="5"
    >
      <Heading>{idea.title}</Heading>
      <Text>{idea.content}</Text>
      <Box></Box>
      <Box></Box>
      <Box>
        <Button bg="brand.100" color="brand.font.1">
          Read more...
        </Button>
      </Box>
    </Box>
  );
};
export default IdeaListItem;
