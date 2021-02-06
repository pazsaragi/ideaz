import { Box } from "@chakra-ui/react";
import * as React from "react";
import { CategoryModel } from "../../interfaces";
import FeedCategory from "./FeedCategory";
import { Grid, GridItem } from "@chakra-ui/react";

interface Props {
  categories: CategoryModel[];
}

const FeedCategories = ({ categories }: Props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {categories.map((c) => (
        <FeedCategory category={c} />
      ))}
    </Grid>
  );
};
export default FeedCategories;
