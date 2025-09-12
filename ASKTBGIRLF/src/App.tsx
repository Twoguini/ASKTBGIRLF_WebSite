import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import './App.css'

function App() {

  return (
    <>
      <body>
        <img src="/assets/img/BG.png" className='rotationg-bg'/>
        <Routes>
          <Route path='/' element= {<Login />} />
        </Routes>
      </body>
    </>
  )
}

export default App
