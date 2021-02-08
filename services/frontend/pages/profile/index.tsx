import { Heading, Text, Box, Icon, Button, Link } from "@chakra-ui/react";
import React from "react";
import { EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import {
  fetchIdeasAPI,
  fetchIdeasByEmailAPI,
  fetchIdeasByNameAPI,
} from "../../lib";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { IdeaModel } from "../../interfaces";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import IdeaList from "../../components/feed/IdeaList";
import { getSession } from "next-auth/client";

interface Props {
  ideas: IdeaModel[];
}

const ProfilePage = ({ ideas }: Props) => {
  const router = useRouter();

  const handleReadMore = (id: number) => {
    if (typeof window !== "undefined") {
      router.push("/idea/" + id);
    }
  };
  console.log(ideas);
  return (
    <Layout>
      <Box>
        <Heading>Your ideas:</Heading>
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
        <Text>Your Idea List:</Text>
      </Box>
      <Box>
        <IdeaList ideas={ideas} onReadMore={handleReadMore} />
      </Box>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let ideas: IdeaModel[] = [];
  const session = await getSession({ req });
  if (session) {
    if (session?.user?.email) {
      const res = await fetchIdeasByEmailAPI({
        email: session?.user?.email,
      });
      ideas.push(...res);
    }
    if (session?.user?.name) {
      const res = await fetchIdeasByNameAPI({
        name: session?.user?.name,
      });
      ideas.push(...res);
    }
  }
  return {
    props: {
      ideas,
    }, // will be passed to the page component as props
  };
};

export default ProfilePage;
