import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(()=>import('../pages/Login'));

const RoutersOut = () => {
  return (
    <Routes>
        <Route path='*' element={<Login />} />
    </Routes>
  )
}
export default RoutersOut;