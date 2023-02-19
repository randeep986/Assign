import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesData } from '../Redux/action'
const Browse = () => {
const dispatch=useDispatch()
// const getData=useSelector((store)=>store.getData)
useEffect(()=>{
  dispatch(getMoviesData)
},[])
  return (
    <>
  
    </>
  )
}

export default Browse