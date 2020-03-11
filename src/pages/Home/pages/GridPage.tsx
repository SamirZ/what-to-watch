import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { selectSearchTerm } from "../../../store/selctors";

import Grid from "../components/Grid";
import Search from "../components/Search";
import Loader from "../../../components/Loader";
import { GridPageWrapper } from "../../../styles/Details.styles";

interface Props extends RouteComponentProps {
  selector: any;
}

const GridPage = ({
  selector,
  history,
  match: { path }
}: Props): ReactElement => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const [searchLength, setSearchLength] = useState(
    searchTerm.length > 2 ? searchTerm.length : 0
  );

  const { page, results, total_pages, isLoading, getListAction } = useSelector(
    selector
  );

  useEffect(() => {
    setSearchLength(searchTerm.length > 2 ? searchTerm.length : 0);
  }, [searchTerm]);

  useEffect(() => {
    dispatch(getListAction());
  }, [searchLength, path, dispatch, getListAction]);

  return (
    <>
      <Search />
      {isLoading && <Loader />}
      <GridPageWrapper isLoading={isLoading}>
        <Grid
          history={history}
          path={path}
          items={results}
          page={page}
          totalPages={total_pages}
        />
      </GridPageWrapper>
    </>
  );
};

export default GridPage;
