import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieRecord } from '../Redux/action'
const Browse = () => {
const dispatch=useDispatch()
const movie=useSelector((store)=>store.movie)

console.log(movie)
useEffect(()=>{
  dispatch(getMovieRecord)
},[])
  return (
    <>
    {/* {getData.map((movie)=>(
      <div>{movie.title}</div>
    ))} */}
    </>
  )
}

export default Browse