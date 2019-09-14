import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/recipes/";

export function getRecipes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
