const userState = (state) => state.user;

export function getCategories(state) {
  return userState(state).get("categories");
}

export function getUsername(state) {
  return userState(state).get("username");
}

export function getIsLoggedIn(state) {
  return userState(state).get("isLoggedIn");
}

export function getStartPageInitialized(state) {
  return userState(state).get("initialized");
}
