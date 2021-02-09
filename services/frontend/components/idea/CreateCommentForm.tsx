import {
  Textarea,
  FormControl,
  FormHelperText,
  Button,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React from "react";
import { useForm } from "react-hook-form";
import { createCommentAPI } from "../../lib";
import { CreateCommentModel } from "../../interfaces";
import { NextRouter, useRouter } from "next/router";

interface Props {
  idea_id: number;
  onCreateComment: (data: CreateCommentModel) => void;
}

export default function CreateCommentForm({ idea_id, onCreateComment }: Props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const [session] = useSession();

  const onSubmit = (data: CreateCommentModel) => {
    //shouldn't have to check for session since use_profile always false if session false
    if (session) {
      data.email = session?.user?.email as string;
      data.name = session?.user?.name as string;
    }
    data.idea_id = idea_id;
    onCreateComment(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="create=form">
        <Text>Leave comment...</Text>
        <Textarea
          placeholder="Here is a sample placeholder"
          size="sm"
          name="content"
          ref={register({ required: true })}
        />
        {errors.content && "We need the idea to have some content!"}
        <FormHelperText></FormHelperText>

        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  );
}

export const refreshData = (router: NextRouter) => {
  router.replace(router.asPath);
};
