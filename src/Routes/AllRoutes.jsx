import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import Browse from '../Pages/Browse'
import Home from '../Pages/Home'

import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/browse' element={<Layout />}>
        <Route index element={<Browse />} />
      </Route>
      <Route path='/latest' element={<Layout />}>
        <Route index element={<h1>Latest</h1>} />
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>

  )
}

export default AllRoutes