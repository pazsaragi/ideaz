import Link from "next/link";
import Layout from "../components/Layout";
import { Heading, Text } from "@chakra-ui/react";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Heading>Welcome to Ideaz! 👋</Heading>
    <Text>
      Where Entrepreneurs, problem solvers and those who can do both, come
      together!
    </Text>
  </Layout>
);

export default IndexPage;
