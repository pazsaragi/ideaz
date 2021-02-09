import { Box, Button, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { IdeaModel } from "../../interfaces";
import { HStack } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { MdLightbulbOutline } from "react-icons/md";
import CategoryBadge from "../common/CategoryBadge";

interface Props {
  idea: IdeaModel;
  onReadMore: (id: number) => void;
  onLikeIdea: (id: number) => void;
}

const IdeaListItem = ({ idea, onReadMore, onLikeIdea }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="lightgray"
      borderRadius="lg"
      marginTop="10"
      padding="5"
    >
      <Heading as="h2" size="md">
        {idea.title}
      </Heading>
      <Text color="brand.font.100" as="p" fontSize="14px">
        {idea.content}
      </Text>
      <HStack spacing="100px">
        <Box>
          {" "}
          <Icon as={BsFillPersonFill} color="brand.100" fontSize="25px" />
          <Text fontSize="10px" color="brand.font.100">
            {idea.name}
          </Text>
        </Box>
        <Box>
          <Icon
            as={MdLightbulbOutline}
            color="brand.100"
            fontSize="25px"
            _hover={{
              cursor: "pointer",
              backgroundColor: "brand.sec",
              color: "brand.font.prim",
              borderRadius: "100%",
            }}
            onClick={() => onLikeIdea(idea.id)}
          />
          <Text fontSize="10px" color="brand.font.100" textAlign="center">
            {idea?.likes?.length}
          </Text>
        </Box>
        <Box>
          <ChatIcon color="brand.100" fontSize="25px" />
          <Text fontSize="10px" color="brand.font.100" textAlign="center">
            {idea?.comments?.length}
          </Text>
        </Box>
        <Box>
          {idea?.categories?.map((c, i) => (
            <React.Fragment key={i}>
              <CategoryBadge name={c.name} color={c.color} />
            </React.Fragment>
          ))}
        </Box>
        <Box>
          <Button
            padding="7"
            borderRadius="10px"
            bg="brand.100"
            color="white"
            onClick={() => onReadMore(idea.id)}
          >
            Read more...
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};
export default IdeaListItem;
