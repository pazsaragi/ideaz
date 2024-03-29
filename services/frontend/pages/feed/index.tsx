import { Heading, Text, Box, Icon, Button, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedCategories from "../../components/feed/FeedCategories";
import IdeaList from "../../components/feed/IdeaList";
import Layout from "../../components/Layout";
import { CATEGORIES } from "../../data/categories";
import { EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { fetchCategoriesAPI, fetchIdeasAPI, likeIdeaAPI } from "../../lib";
import { GetServerSideProps } from "next";
import { CategoryModel, IdeaModel } from "../../interfaces";
import { NextRouter, useRouter } from "next/router";
import SearchBar from "../../components/common/SearchBar";
import { useSession } from "next-auth/client";
import { refreshData } from "../../components/idea/CreateCommentForm";

interface Props {
  ideas: IdeaModel[];
  categories: CategoryModel[];
}

const FeedPage = ({ ideas, categories }: Props) => {
  const router = useRouter();
  const [session, loading] = useSession();

  const [ideaState, setIdeaState] = useState(ideas);

  useEffect(() => {
    setIdeaState(ideas);
  }, [ideas]);

  const handleReadMore = (id: number) => {
    if (typeof window !== "undefined") {
      router.push("/idea/" + id);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterIdeas = ideas.filter((i) =>
      i.title.toLowerCase().includes(event.currentTarget.value)
    );
    setIdeaState(filterIdeas);
  };

  const handleLikeIdea = async (id: number) => {
    await likeIdeaAPI({
      idea_id: id,
      email: session?.user?.email || "anonymous",
      name: session?.user?.name || "anonymous",
    });
    await router.replace(router.asPath);
  };

  return (
    <Layout>
      <Box>
        <Heading>Idea Feed:</Heading>
      </Box>
      <Box>
        <FeedCategories categories={categories} />
      </Box>
      <Box>
        <SearchBar handleChange={handleSearchChange} />
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
        <IdeaList
          ideas={ideaState}
          onReadMore={handleReadMore}
          onLikeIdea={handleLikeIdea}
        />
      </Box>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const ideas = await fetchIdeasAPI();
  const categories = await fetchCategoriesAPI();
  return {
    props: {
      ideas,
      categories,
    }, // will be passed to the page component as props
  };
};

export default FeedPage;
