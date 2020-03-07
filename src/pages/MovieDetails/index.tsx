import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { getMovieDetailsAction } from "../../store/actions";
import { useSelector, selectMovieDetails } from "../../store/selctors";

interface TParams {
  id: string;
}

const MovieDetails: React.FC<RouteComponentProps<TParams>> = ({
  match: {
    params: { id }
  }
}) => {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector(selectMovieDetails);

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
  }, [dispatch, id]);

  return <div>{movieDetails?.original_title}</div>;
};

export default MovieDetails;
