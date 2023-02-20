import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieRecord } from '../Redux/action'
const Browse = () => {
const dispatch=useDispatch()
const movie=useSelector((store)=>store.movie)

console.log("hola", movie)
useEffect(()=>{
  dispatch(getMovieRecord)
},[])
  return (
    <>
    {
      movie.results.map((movie)=>(
        <div key={movie.id}>
          {movie.id}
          <div>{movie.title}</div>
        </div>
      ))
    }
    </>
  )
}

export default Browse