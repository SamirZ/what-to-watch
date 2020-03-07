import React, { ReactElement } from "react";

interface Props {
  search: string;
}

const Search = ({ search }: Props): ReactElement => {
  return <div>{search}</div>;
};

export default Search;
