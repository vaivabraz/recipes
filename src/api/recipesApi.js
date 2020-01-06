import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;
const recipesUrl = baseUrl + "api/recipes";

export function getRecipesApi() {
  return fetch(recipesUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeApi(slug) {
  return fetch(recipesUrl + "?slug=" + slug)
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeBySlugApi(slug) {
  return fetch(recipesUrl + "/" + slug)
    .then(handleResponse)
    .catch(handleError);
}

export function postRecipeApi(data) {
  return fetch(recipesUrl, {
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
  return fetch(recipesUrl + "/" + data._id, {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecipeApi(recipeId) {
  const url = recipesUrl + "/" + recipeId;
  return fetch(url, {
    method: "delete"
  })
    .then(handleResponse)
    .catch(handleError);
}
