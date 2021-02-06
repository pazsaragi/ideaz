// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type CategoryModel = {
  title: string;
  src: string;
  description: string;
  href: string;
};

export type IdeaModel = {
  id: number;
  title: string;
  content: string;
  alias: string;
  like: number;
  comments_count: number;
};

export type CreateIdeaModel = {
  title: string;
  content: string;
};
