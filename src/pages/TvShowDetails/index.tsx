import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { getTvShowDetailsAction } from "../../store/actions";
import { useSelector, selectTvShowDetails } from "../../store/selctors";

interface TParams {
  id: string;
}

const TvShowDetails: React.FC<RouteComponentProps<TParams>> = ({
  match: {
    params: { id }
  }
}) => {
  const dispatch = useDispatch();
  const { tvShowDetails } = useSelector(selectTvShowDetails);

  useEffect(() => {
    dispatch(getTvShowDetailsAction(id));
  }, [dispatch, id]);

  return <div>{tvShowDetails?.name}</div>;
};

export default TvShowDetails;
