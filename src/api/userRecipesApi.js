import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;
const recipesUrl = baseUrl + "api/userRecipes";

export function getRecipesApi(body) {
  return fetch(recipesUrl + "/list", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeBySlugApi(body, slug) {
  return fetch(recipesUrl + "/" + slug + "/get", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function postRecipeApi(body) {
  return fetch(recipesUrl, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecipeApi(body, slug) {
  const url = recipesUrl + "/" + slug;
  return fetch(url, {
    body: JSON.stringify(body),
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
