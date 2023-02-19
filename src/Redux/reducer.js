import React from 'react'
import * as types from './actionType'

const initialState={
    getData:[],
    isLoading: false,
    isError:false,
}
 const reducer = (oldState=initialState,action) => {
    const {type,payload}=action
    switch(type){
        case types.GET_DATA_REQUEST:
            return {
                ...oldState,
                isLoading:true
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...oldState,
                isLoading:false,
                getData:payload,
            }
        case types.GET_DATA_FAILURE:
            return {
                ...oldState,
                isLoading:false,
                isError:true,
                
            }
    }
}

export default reducer