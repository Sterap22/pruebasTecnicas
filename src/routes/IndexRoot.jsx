import React from 'react'
import LoginMain from '../components/template/loginMain'
import RoutersOut from './Routers-out'
import RoutersIn from './Routers-in'
import HomeMain from '../components/template/HomeMain'

const IndexRoot = () => {
  return localStorage.getItem('Token')?
  <HomeMain>
    <RoutersIn />
  </HomeMain>
  :<LoginMain>
    <RoutersOut />
  </LoginMain>
}

export default IndexRoot;