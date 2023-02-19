import * as types from  './actionType'
import axios from 'axios'
const getMoviesData=(dispatch)=>{
    let key=process.env.REACT_APP_MY_ENVIRONMENT_API_KEY
    
    dispatch({
        type:types.GET_DATA_REQUEST
    })
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ke}&language=en-US&page=1`).then((r)=>{
        console.log(r.data.results)
        dispatch({
            type:types.GET_DATA_SUCCESS
        }).catch((e)=>{
            dispatch({
                type:types.GET_DATA_FAILURE
            })
        })
    })
}
export {getMoviesData}