import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import CreateIdeaForm from "../../../components/idea/CreateIdeaForm";
import Layout from "../../../components/Layout";

const CreateIdeaPage = () => (
  <Layout>
    <Box>
      <Heading>New Idea:</Heading>
    </Box>
    <Box>
      <CreateIdeaForm />
    </Box>
  </Layout>
);

export default CreateIdeaPage;
