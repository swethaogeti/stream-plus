import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    description: "Stream Plus | All categories",
  },
  {
    _id: uuid(),
    categoryName: "Sci-Fi",
    description: "Stream Plus | Sci-Fi",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description: "Stream Plus | Fantasy",
  },
  {
    _id: uuid(),
    categoryName: "K-Drama",
    description: "Stream Plus | K-Drama",
  },

  {
    _id: uuid(),
    categoryName: "Telugu movies",
    description: "Stream Plus | Telugu Movies",
  },
];
