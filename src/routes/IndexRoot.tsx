import LoginMain from '../components/template/loginMain'
import RoutersIn from './Routers-in'
import HomeMain from '../components/template/HomeMain'
import RoutersOut from './Routers-out'

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