import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constants/constants";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`movie/${movie_id}`, options).then((res) => setDetail(res.data));
  }, []);

  const sum = detail?.revenue - detail?.budget;

  if (!detail) return "Loading...";
  return (
    <div className="movie-detail row gy-5 p-4 ">
      <div className="cols col-md-4 d-flex align-items-center justify-content-center ">
        <div className="position-relative">
          <img
            style={{
              maxHeight: "100%",
              maxWidth: "400px",
              width: "auto",
            }}
            className=" shadow-lg rounded"
            src={baseImgUrl.concat(detail.poster_path)}
          />

          <span
            style={{ right: "10px", top: "10px" }}
            className="position-absolute bg-warning rounded badge shadow"
          >
            {detail.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="col-md-8 p-4 d-flex flex-column justify-content-center">
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className="row">
          <div className="col-6 col-md-12">
            <p>Budget: {detail.budget}$</p>
            <p>Revenue: {detail.revenue}$</p>

            <p>
              {sum >= 0 ? "Profit" : "Loss"}: {sum} $
            </p>
          </div>
          <div className="col-6 col-md-12 ">
            <div className="d-flex gap-3">
              Categories:
              {detail.genres.map((genre, i) => (
                <p className="badge bg-info text-black" key={i}>
                  {genre.name}
                </p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Languages:
              {detail.spoken_languages.map((language, i) => (
                <p className="badge bg-success" key={i}>
                  {language.name}
                </p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Production Companies:
              {detail.production_companies.map((company, i) => (
                <p className="badge bg-warning text-black" key={i}>
                  {company.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
