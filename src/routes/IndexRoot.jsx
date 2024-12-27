import React from 'react'
import LoginMain from '../components/template/loginMain'
import RoutersOut from './Routers-out'
import RoutersIn from './Routers-in'

const IndexRoot = () => {
  return localStorage.getItem('Token')?
  <RoutersIn />
  :<LoginMain>
    <RoutersOut />
  </LoginMain>
}

export default IndexRoot;