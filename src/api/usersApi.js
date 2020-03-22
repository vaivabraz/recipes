import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL;
const userUrl = baseUrl + "api/user";

export function geUserApi(username) {
  return fetch(userUrl + "/" + username)
    .then(handleResponse)
    .catch(handleError);
}
