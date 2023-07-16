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

  if (!detail) return "Loading...";
  return (
    <div className="movie-detail row p-4">
      <div className="cols col-md-6 d-flex align-items-center justify-content-center">
        <img
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          className=" shadow-lg rounded"
          src={baseImgUrl.concat(detail.poster_path)}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className="row">
          <div className="col-6 col-md-12">
            <p>Budget: {detail.budget}$</p>
            <p>Revenue: {detail.revenue}$</p>
            <p>Profit: {detail.revenue - detail.budget} $</p>
          </div>
          <div className="col-6 col-md-12 "></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
