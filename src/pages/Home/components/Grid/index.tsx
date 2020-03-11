import React, { ReactElement } from "react";
import styled from "styled-components";

import NoResults from "./components/NoResults";
import GridItem from "./components/GridItem";
import ListResult from "../../../../models/list-result.model";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  overflow-x: auto;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const PageCountWrapper = styled.div`
  margin-top: 1rem;
  border-top: 2px solid orange;
  transition: all 0.5s ease-in-out;
  padding: 1rem;
  text-align: end;
`;

interface Props {
  page: number;
  totalPages: number;
  items: ListResult[];
  history: any;
  path: string;
}

const Grid = ({
  page,
  totalPages,
  items,
  history,
  path
}: Props): ReactElement => (
  <>
    {items.length > 0 ? (
      <>
        <ItemsWrapper>
          {items.map(item => (
            <GridItem key={item.id} {...item} history={history} path={path} />
          ))}
        </ItemsWrapper>
        <PageCountWrapper>
          <p>
            Page {page} of {totalPages}
          </p>
        </PageCountWrapper>
      </>
    ) : (
      <NoResults />
    )}
  </>
);

export default Grid;
