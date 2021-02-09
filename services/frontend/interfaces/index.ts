// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type BaseModel = {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type User = {
  id: number;
  name: string;
};

export type CategoryModel = BaseModel & {
  name: string;
  img: string;
  color: string;
  ideas?: IdeaModel[];
};

export type IdeaModel = BaseModel & {
  title: string;
  content: string;
  email?: string;
  name?: string;
  likes?: LikeModel[];
  comments?: CommentModel[];
  categories?: CategoryModel[];
};

export type CreateIdeaModel = {
  title: string;
  content: string;
  email?: string;
  name?: string;
  categories?: { id: number }[];
};

export type GetIdeaByNameModel = {
  name: string;
};

export type GetIdeaByEmailModel = {
  email: string;
};

export type CommentModel = BaseModel & {
  comment_id: number;
  content: string;
  email?: string;
  name?: string;
  idea_id: number;
};

export type CreateCommentModel = {
  content: string;
  email?: string;
  name?: string;
  idea_id: number;
};

export type LikeModel = BaseModel & {
  email?: string;
  name?: string;
  idea_id: number;
};

export type CreateLikeModel = {
  email?: string;
  name?: string;
  idea_id: number;
};
