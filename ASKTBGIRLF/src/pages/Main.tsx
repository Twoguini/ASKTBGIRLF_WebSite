import { useEffect, useState } from 'react'

import Login from './Login'
import '../style/Main.css';

function Main() {

  const [ exitFromLogin, setExitFromLogin ] = useState<boolean>(false);

  const [ blurInBg, setBlurInBg ] = useState(true);
  const [ blurOutBg, setBlurOutBg ] = useState(false);
  const [ rotatingBG, setRotatingBG ] = useState(false);

  useEffect( () => {
    if(exitFromLogin) {
      setBlurInBg(false);
      setBlurOutBg(true);

      setTimeout(() => {
        setBlurOutBg(false);
        setRotatingBG(true);
      }, 5000);
    }
  }, [ exitFromLogin ]);

  return (
    <>
      <img src="/assets/img/BG.png" className={'rotationg-bg ' + (blurInBg? 'blurInAnimate ' : ' ') + (blurOutBg? 'blurOutAnimate ' : ' ') + (rotatingBG? 'rotationAnimate ' : ' ')}/>
      <div className='bodyDiv'>
          {exitFromLogin? null : <Login exitLogin={() => setExitFromLogin(true)} />}
      </div>
    </>
  )
}

export default Main
