
import * as types from "./actionType";
import axios from "axios";
console.log("hi from maction.jsgggg")
const getMusicRecordRequest = () => {
    
  return {
    type: types.GET_DATA_REQUEST,
  };
};

export const getMovieRecord =(dispatch) => {
    let baseUrl=process.env.REACT_APP_MY_ENVIRONMENT_BASE_URL
    //     console.log(baseUrl)
        let key=process.env.REACT_APP_MY_ENVIRONMENT_API_KEY
  dispatch(getMusicRecordRequest);

  return axios
    .get(`${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=1`)
    .then((r) => {
      // console.log(r.data)
      dispatch({
        type: types.GET_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_DATA_FAILURE });
    });
};
