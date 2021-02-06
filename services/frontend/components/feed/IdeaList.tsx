import { Box } from "@chakra-ui/react";
import * as React from "react";
import { IdeaModel } from "../../interfaces";
import IdeaListItem from "./IdeaListItem";

interface Props {
  ideas: IdeaModel[];
}

const IdeaList = ({ ideas }: Props) => {
  return (
    <Box>
      {ideas.map((i) => (
        <IdeaListItem idea={i} />
      ))}
    </Box>
  );
};
export default IdeaList;
