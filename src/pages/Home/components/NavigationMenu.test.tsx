import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Neede because of NavLinks
import NavigationMenu from "./NavigationMenu";

describe("Navigation component", () => {
  it("renders Movies link", () => {
    const { getByText } = render(
      <Router>
        <NavigationMenu />
      </Router>
    );
    const element = getByText(/Movies/g);
    expect(element).toBeInTheDocument();
  });

  it("renders TV Shows link", () => {
    const { getByText } = render(
      <Router>
        <NavigationMenu />
      </Router>
    );
    const element = getByText(/TV Shows/g);
    expect(element).toBeInTheDocument();
  });
});
