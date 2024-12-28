import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=>import('../pages/Home'));

const RoutersIn = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default RoutersIn;
