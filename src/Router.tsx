import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import TvShowDetails from "./pages/TvShowDetails";

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/tv-show/:id" component={TvShowDetails} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;
