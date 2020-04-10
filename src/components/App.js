import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import { getStartPageInitialized } from "../redux/selectors/userSelectors";
import { Header, Footer } from "./common";
import PageNotFound from "./PageNotFound";
import ProfilePage from "./profile/ProfilePage";
import { HomePage, RecipePage, CreateRecipe } from "./recipes";
import { LogInPage } from "./login";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  const initalized = useSelector(getStartPageInitialized);
  return initalized ? (
    <div>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute path="/recipes/:slug" component={RecipePage} />
        <PrivateRoute path="/recipes" component={HomePage} />
        <PrivateRoute path="/createRecipe" component={CreateRecipe} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route path="/login" component={LogInPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  ) : (
    <div />
  );
}

export default App;
