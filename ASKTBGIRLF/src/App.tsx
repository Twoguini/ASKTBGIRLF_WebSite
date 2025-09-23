import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Login from './pages/Login'
import './App.css'

function App() {

  const [ blurInBg, setBlurInBg ] = useState(true);
  const [ blurOutBg, setBlurOutBg ] = useState(false);
  const [ rotatingBG, setRotatingBG ] = useState(false);

  return (
    <>
      <img src="/assets/img/BG.png" className={'rotationg-bg ' + (blurInBg? 'blurInAnimate ' : ' ') + (blurOutBg? 'blurOutAnimate ' : ' ') + (rotatingBG? 'rotationAnimate ' : ' ')}/>
      <div className='bodyDiv'>
        <Routes>
          <Route path='/' element= {<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
