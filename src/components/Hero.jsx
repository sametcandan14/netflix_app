import React from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants/constants";

const Hero = () => {
  const state = useSelector((store) => store.movieReducer);

  const i = Math.floor(Math.random() * state.popularMovies.length);

  const film = state.popularMovies[i];

  return (
    <div className="row p-4">
      {state.isLoading && <p>Loading...</p>}
      {!state.isLoading && (
        <>
          <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
            <h1>{film.title}</h1>
            <p className="lead">{film.overview}</p>
            <p className="text-warning fw-bold">IMDB: {film.vote_average}</p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-danger">Watch Movie</button>
              <button className="btn btn-info">Add to List</button>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <img
              className="img-fluid rounded shadow"
              src={`${baseImgUrl}${film.backdrop_path}`}
              alt={film.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
