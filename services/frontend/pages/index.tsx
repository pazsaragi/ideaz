import Link from "next/link";
import Layout from "../components/Layout";
import { Heading, Text, Box } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import FeedCategories from "../components/feed/FeedCategories";
import { CATEGORIES } from "../data/categories";

const IndexPage = () => {
  const [session, loading] = useSession();

  return (
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
      <Box>
        {loading && <Heading>Loading...</Heading>}
        {session && (
          <>
            {" "}
            <p style={{ marginBottom: "10px" }}>
              {" "}
              Welcome, {session.user.name ?? session.user.email}
            </p>{" "}
            <br />
            <img src={session.user.image || ""} alt="" />
          </>
        )}
        {!session && (
          <>
            <Link href="/api/auth/signin">Please Sign in</Link>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default IndexPage;
