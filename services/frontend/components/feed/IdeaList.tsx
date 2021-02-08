import { Box } from "@chakra-ui/react";
import * as React from "react";
import { IdeaModel } from "../../interfaces";
import IdeaListItem from "./IdeaListItem";

interface Props {
  ideas: IdeaModel[];
  onReadMore: (id: number) => void;
}

const IdeaList = ({ ideas, onReadMore }: Props) => {
  return (
    <Box>
      {ideas.map((i, idx) => (
        <React.Fragment key={idx}>
          <IdeaListItem onReadMore={onReadMore} idea={i} />
        </React.Fragment>
      ))}
    </Box>
  );
};
export default IdeaList;
