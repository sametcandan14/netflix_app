import axios from "axios";
import { ActionTypes } from "../../constants/ActionTypes";
import { options } from "../../constants/constants";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

export const getMovies = () => async (dispatch) => {
  const res = await axios.get("/movie/popular", options);

  dispatch({
    type: ActionTypes.SET_MOVIES,
    payload: res.data,
  });
};

export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list?language=en", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};
