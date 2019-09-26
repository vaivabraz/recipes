import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./common";
import PageNotFound from "./PageNotFound";
import ProfilePage from "./profile/ProfilePage";
import { RecipesListPage, RecipePage } from "./recipes";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={RecipesListPage} />
        <Route path="/recipes/:slug" component={RecipePage} />
        <Route path="/recipes" component={RecipesListPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
