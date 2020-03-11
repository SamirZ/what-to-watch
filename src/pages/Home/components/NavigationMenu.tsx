import React, { ReactElement } from "react";
import styled from "styled-components";
import { NavLink as NLink, NavLinkProps } from "react-router-dom";

export const NavigationMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
`;

export const NavLink = styled(NLink)<NavLinkProps>`
  color: black;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  &.active {
    background-color: orange;
  }
`;

const NavigationMenu = (): ReactElement => (
  <NavigationMenuWrapper>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/tv-shows">TV Shows</NavLink>
  </NavigationMenuWrapper>
);

export default NavigationMenu;
