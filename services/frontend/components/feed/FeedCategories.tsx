import { Box } from "@chakra-ui/react";
import * as React from "react";
import { CategoryModel } from "../../interfaces";
import FeedCategory from "./FeedCategory";
import { Grid } from "@chakra-ui/react";

interface Props {
  categories: CategoryModel[];
}

const FeedCategories = ({ categories }: Props) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {categories?.map((c, i) => (
        <React.Fragment key={i}>
          <FeedCategory category={c} />
        </React.Fragment>
      ))}
    </Grid>
  );
};
export default FeedCategories;
