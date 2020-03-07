import React, { ReactElement } from "react";

import Search from "../../components/Search";

const MovieGrid = (): ReactElement => (
  <div>
    <Search search={"Movies"} />
    MovieGrid
  </div>
);

export default MovieGrid;
