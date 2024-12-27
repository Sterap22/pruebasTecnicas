import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import IndexRoot from './routes/IndexRoot'

function App() {

  return (
    <Router>
      <div className='app'>
        <Suspense fallback={<div>Loading...</div>} >
          <IndexRoot />
        </Suspense>
      </div>
    </Router>
  )
}

export default App
