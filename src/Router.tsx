import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Suspense } from "react";
import Loader from "./components/Loader";
const Home = React.lazy(() => import("./pages/Home"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const TvShowDetails = React.lazy(() => import("./pages/TvShowDetails"));

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route
        path="/movies/:id"
        render={props => (
          <Suspense fallback={<Loader />}>
            <MovieDetails {...props} />
          </Suspense>
        )}
      />
      <Route
        path="/tv-shows/:id"
        render={props => (
          <Suspense fallback={<Loader />}>
            <TvShowDetails {...props} />
          </Suspense>
        )}
      />
      <Route
        path="/"
        render={props => (
          <Suspense fallback={<Loader />}>
            <Home {...props} />
          </Suspense>
        )}
      />
    </Switch>
  </Router>
);

export default AppRouter;
