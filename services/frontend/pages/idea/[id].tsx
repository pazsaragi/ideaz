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
import { createCommentAPI, fetchCommentsAPI, fetchIdeaAPI } from "../../lib";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { CommentModel, CreateCommentModel, IdeaModel } from "../../interfaces";
import CreateCommentForm, {
  refreshData,
} from "../../components/idea/CreateCommentForm";
import CommentList from "../../components/idea/CommentList";
import { NextRouter, useRouter } from "next/router";

interface Props {
  idea: IdeaModel;
  comments: CommentModel[];
}

const IdeaPage = ({ idea, comments }: Props) => {
  const router = useRouter();
  const handleCreateComment = async (data: CreateCommentModel) => {
    await createCommentAPI(data);
    refreshData(router);
  };
  return (
    <Layout>
      <Box>
        <Heading>Idea:</Heading>
      </Box>
      <Box>{idea.title}</Box>
      <Box>{idea.content}</Box>
      <CreateCommentForm
        idea_id={idea.idea_id}
        onCreateComment={handleCreateComment}
      />
      <CommentList comments={comments} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params;
  const idea = await fetchIdeaAPI(params?.id as string);
  const comments = await fetchCommentsAPI(params?.id as string);
  return {
    props: {
      idea,
      comments,
    }, // will be passed to the page component as props
  };
};

export default IdeaPage;
