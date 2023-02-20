
import * as types from './actionType'

const initialState={
    movie:[],
    isLoading:false,
    isError:false,
}

export const reducer =(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch (type) {
        case types.GET_DATA_REQUEST:
            return{
                ...oldState,
                isLoading:true,
            }
            case types.GET_DATA_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                movie:payload
            }
            case types.GET_DATA_FAILURE:
            return{
                ...oldState,
                isError:true,
                isLoading:false,
            }

        default:
            return oldState;
    }
}