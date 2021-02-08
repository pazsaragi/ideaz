import { CategoryModel } from "../interfaces";

const prefix = "/assets/";

export const CATEGORIES: CategoryModel[] = [
  {
    title: "Tech/ Software",
    description: "IT, Tech and all software related ideas!",
    src: prefix + "tech.svg",
    href: "/tech",
    color: "brand.prim",
  },
  {
    title: "Finance",
    description: "All things money, finance, stock etc!",
    src: prefix + "money.svg",
    href: "/finance",
    color: "brand.sec",
  },
  {
    title: "Tech/ Software",
    description: "IT, Tech and all software related ideas!",
    src: prefix + "tech.svg",
    href: "/tech",
    color: "brand.ter",
  },
  {
    title: "Finance",
    description: "All things money, finance, stock etc!",
    src: prefix + "money.svg",
    href: "/finance",
    color: "brand.four",
  },
  {
    title: "Tech/ Software",
    description: "IT, Tech and all software related ideas!",
    src: prefix + "tech.svg",
    href: "/tech",
    color: "brand.five",
  },
];
