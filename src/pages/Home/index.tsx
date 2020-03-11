import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import GridPage from "./pages/GridPage";

import NavigationMenu from "./components/NavigationMenu";

import { selectMovieList, selectTvShowList } from "../../store/selctors";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <NavigationMenu />
      <Switch>
        <Route
          path="/movies"
          render={props => <GridPage selector={selectMovieList} {...props} />}
        />
        <Route
          path="/tv-shows"
          render={props => <GridPage selector={selectTvShowList} {...props} />}
        />
        <Redirect to="/tv-shows" />
      </Switch>
    </>
  );
};

export default Home;
