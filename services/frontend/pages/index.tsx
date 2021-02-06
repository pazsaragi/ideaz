import Link from "next/link";
import Layout from "../components/Layout";
import { Heading, Text, Box } from "@chakra-ui/react";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Box>
      <Heading>
        Welcome to <Text color="purple.500">Ideaz!</Text> 👋
      </Heading>
    </Box>

    <Text>
      Where Entrepreneurs, problem solvers and those who can do both, come
      together!
    </Text>
  </Layout>
);

export default IndexPage;
