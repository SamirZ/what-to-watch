import React from "react";
import GlobalStyle, { AppWrapper } from "./styles/GlobalStyle";

import Router from "./Router";

const App: React.FC = () => (
  <React.Fragment>
    <AppWrapper>
      <Router />
    </AppWrapper>
    <GlobalStyle />
  </React.Fragment>
);

export default App;
