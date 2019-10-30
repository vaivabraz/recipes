import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/recipes/";
const newBaseUrl = "http://localhost:4000/api/recipes";

export function getRecipes() {
  return fetch(newBaseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeBySlug(slug) {
  return fetch(baseUrl + "/" + slug)
    .then(handleResponse)
    .catch(handleError);
}
