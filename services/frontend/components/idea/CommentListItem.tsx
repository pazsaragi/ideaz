import { Box, Button, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { CommentModel } from "../../interfaces";
import { HStack } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { MdLightbulbOutline } from "react-icons/md";

interface Props {
  comment: CommentModel;
}

const CommentListItem = ({ comment }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="lightgray"
      borderRadius="lg"
      marginTop="10"
      padding="5"
    >
      {comment.content}
    </Box>
  );
};
export default CommentListItem;
