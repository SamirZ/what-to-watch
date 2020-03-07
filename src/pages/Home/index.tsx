import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MovieGrid from "./pages/MovieGrid";
import TvShowGrid from "./pages/TvShowGrid";

const Home: React.FC = () => {
  return (
    <Switch>
      <Route path="/movies" component={MovieGrid} />
      <Route path="/tv-shows" component={TvShowGrid} />
      <Redirect to="/tv-shows" />
    </Switch>
  );
};

export default Home;
