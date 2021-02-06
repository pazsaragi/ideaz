import { Heading, Text, Box, Icon, Button, Link } from "@chakra-ui/react";
import React from "react";
import FeedCategories from "../../components/feed/FeedCategories";
import FeedCategory from "../../components/feed/FeedCategory";
import IdeaList from "../../components/feed/IdeaList";
import Layout from "../../components/Layout";
import { CATEGORIES } from "../../data/categories";
import { IDEAS } from "../../data/ideas";
import { EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const FeedPage = () => (
  <Layout>
    <Box>
      <Heading>Idea Feed:</Heading>
    </Box>
    <Box w="100%">
      Create Idea:
      <IconButton
        aria-label="create-idea-btn"
        icon={
          <Link href="/idea/create">
            <Icon as={EditIcon} />
          </Link>
        }
      />
    </Box>
    <Box>
      <Text>Feed:</Text>
    </Box>
    <Box>
      <IdeaList ideas={IDEAS} />
    </Box>
  </Layout>
);

export default FeedPage;
