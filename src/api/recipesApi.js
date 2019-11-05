import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/recipes/";
const localAPI = "http://localhost:4000/api/recipes";
const herokuAPI = "https://awesome-recipes-backend.herokuapp.com/api/recipes";

export function getRecipes() {
  return fetch(localAPI)
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeBySlug(slug) {
  return fetch(baseUrl + "/" + slug)
    .then(handleResponse)
    .catch(handleError);
}

export function postRecipe(data) {
  return fetch(localAPI, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(handleResponse)
    .catch(handleError);
}
