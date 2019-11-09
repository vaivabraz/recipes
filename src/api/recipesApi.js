import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/recipes/";
const localAPI = "http://localhost:4000/api/recipes";
const herokuAPI = "https://awesome-recipes-backend.herokuapp.com/api/recipes";

export function getRecipesApi() {
  return fetch(localAPI)
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeBySlugApi(slug) {
  return fetch(baseUrl + "/" + slug)
    .then(handleResponse)
    .catch(handleError);
}

export function postRecipeApi(data) {
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

export function putRecipeApi(data) {
  return fetch(localAPI + "/" + data._id, {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(handleResponse)
    .catch(handleError);
}
