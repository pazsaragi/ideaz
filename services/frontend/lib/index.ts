import { refreshData } from "../components/idea/CreateCommentForm";
import {
  CreateCommentModel,
  CreateIdeaModel,
  CreateLikeModel,
  GetIdeaByEmailModel,
  GetIdeaByNameModel,
  IdeaModel,
} from "../interfaces";

export const createIdeaAPI = async (d: CreateIdeaModel) => {
  const res: Response = await fetch("http://localhost:3000/api/ideas", {
    body: JSON.stringify({
      ...d,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};

export const fetchIdeasAPI = async (): Promise<IdeaModel[]> => {
  const res = await fetch(process.env.BACKEND + "/v1/ideas", {
    method: "GET",
  });

  const result = await res.json();
  return result;
};

export const fetchIdeaAPI = async (id: string): Promise<IdeaModel[]> => {
  const res = await fetch(process.env.BACKEND + "/v1/ideas/detail/" + id, {
    method: "GET",
  });

  const result = await res.json();
  return result;
};

export const fetchIdeasByEmailAPI = async (
  d: GetIdeaByEmailModel
): Promise<IdeaModel[]> => {
  const res = await fetch(process.env.BACKEND + "/v1/ideas/profile/email", {
    body: JSON.stringify({
      ...d,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  if (!result?.length) {
    return [];
  }
  return result;
};

export const fetchIdeasByNameAPI = async (
  d: GetIdeaByNameModel
): Promise<IdeaModel[]> => {
  const res = await fetch(process.env.BACKEND + "/v1/ideas/profile/name", {
    body: JSON.stringify({
      ...d,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  if (!result?.length) {
    return [];
  }
  return result;
};

export const fetchCommentsAPI = async (
  idea_id: string
): Promise<IdeaModel[]> => {
  const res = await fetch(process.env.BACKEND + "/v1/comments/" + idea_id, {
    method: "GET",
  });

  const result = await res.json();
  return result;
};

export const createCommentAPI = async (
  d: CreateCommentModel
): Promise<IdeaModel[]> => {
  const res: Response = await fetch("http://localhost:3000/api/comments", {
    body: JSON.stringify({
      ...d,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};

export const fetchCategoriesAPI = async (): Promise<IdeaModel[]> => {
  const res = await fetch(process.env.BACKEND + "/v1/categories/", {
    method: "GET",
  });

  const result = await res.json();
  return result;
};

export const likeIdeaAPI = async (d: CreateLikeModel): Promise<IdeaModel[]> => {
  const res = await fetch("http://localhost:3000/api/likes", {
    body: JSON.stringify({
      ...d,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};
