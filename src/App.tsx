import React from "react";
import GlobalStyle from "./styles/GlobalStyle";

import Router from "./Router";

const App: React.FC = () => (
  <React.Fragment>
    <Router />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
