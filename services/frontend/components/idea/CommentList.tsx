import { Box } from "@chakra-ui/react";
import * as React from "react";
import { CommentModel } from "../../interfaces";
import CommentListItem from "./CommentListItem";

interface Props {
  comments: CommentModel[];
}

const CommentList = ({ comments }: Props) => {
  return (
    <Box>
      {comments.map((c, idx) => (
        <React.Fragment key={idx}>
          <CommentListItem comment={c} />
        </React.Fragment>
      ))}
    </Box>
  );
};
export default CommentList;
