import axios from "axios";
import React, { useEffect } from "react";
import { options } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../constants/ActionTypes";
import Hero from "../components/Hero";
import { getGenres, setLoading } from "../redux/actions/actions";
import { getMovies } from "../redux/actions/actions";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(setLoading(true));

    dispatch(getMovies());

    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
