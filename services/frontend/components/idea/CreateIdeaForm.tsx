import {
  Textarea,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createIdeaAPI } from "../../lib";
import { CategoryModel, CreateIdeaModel } from "../../interfaces";
import { useRouter } from "next/router";
import CategoryBadge from "../common/CategoryBadge";

interface CreateIdeaModelForm extends CreateIdeaModel {
  use_profile: boolean;
}

interface Props {
  categories?: CategoryModel[];
}

export default function CreateIdeaForm({ categories }: Props) {
  const { register, handleSubmit, errors } = useForm();
  const [session] = useSession();
  const router = useRouter();

  const [catsSelected, setCatsSelected] = useState<number[]>();

  const onSubmit = (data: CreateIdeaModelForm) => {
    //shouldn't have to check for session since use_profile always false if session false
    if (data.use_profile) {
      data.email = session?.user?.email || "anonymous";
      data.name = session?.user?.name || "anonymous";
    }
    if (catsSelected) {
      data.categories = catsSelected.map((c) => {
        return { id: c };
      });
    }
    createIdeaAPI(data);
    // Make sure we're in the browser
    if (typeof window !== "undefined") {
      router.push("/feed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="create=form">
        {errors.user_id && "We need a title to your idea!"}
        <FormLabel>Title:</FormLabel>
        <Input type="text" name="title" ref={register({ required: true })} />
        {errors.title && "We need a title to your idea!"}
        <FormHelperText></FormHelperText>
        <Textarea
          placeholder="Here is a sample placeholder"
          size="sm"
          name="content"
          ref={register({ required: true })}
        />
        {errors.content && "We need the idea to have some content!"}
        <FormHelperText></FormHelperText>
        {session && (
          <Checkbox defaultIsChecked ref={register()} name="use_profile">
            Use your profile information?
          </Checkbox>
        )}
        {categories?.map((c, i) => {
          const inArray = catsSelected?.includes(c.id);
          return (
            <div
              key={i}
              onClick={() => {
                let curr = catsSelected ? catsSelected : [];
                if (inArray) {
                  curr = curr.filter((ca) => ca !== c.id);
                  setCatsSelected([...curr]);
                  return;
                }
                setCatsSelected([...curr, c.id]);
              }}
            >
              <CategoryBadge {...c} selected={inArray} />
            </div>
          );
        })}
        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  );
}
