import { Heading, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/client";
import React from "react";
import CreateIdeaForm from "../../../components/idea/CreateIdeaForm";
import Layout from "../../../components/Layout";
import { CategoryModel } from "../../../interfaces";
import { fetchCategoriesAPI } from "../../../lib";

interface Props {
  categories: CategoryModel[];
}

const CreateIdeaPage = ({ categories }: Props) => {
  const [session, loading] = useSession();

  return (
    <Layout>
      <Box>
        <Heading>New Idea {session?.user?.name}:</Heading>
      </Box>
      <Box>
        <CreateIdeaForm categories={categories} />
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetchCategoriesAPI();
  return {
    props: {
      categories,
    }, // will be passed to the page component as props
  };
};

export default CreateIdeaPage;
