import { useEffect, useState, useRef } from 'react'

import Login from './Login'
import '../style/Main.css';
import RiveAnimations from './RiveAnimations';

function Main() {

  const bgRef = useRef<HTMLImageElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);

  const [ exitFromLogin, setExitFromLogin ] = useState<boolean>(false);
  const [ loadRiveEntrance,  setLoadRiveEntrance] = useState(false);

  const [ blurInBg, setBlurInBg ] = useState(true);
  const [ blurOutBg, setBlurOutBg ] = useState(false);
  const [ rotatingBG, setRotatingBG ] = useState(false);

  const setBlurOutHandler = () => {
    setBlurInBg(false);
    setBlurOutBg(true);
  }
  const setRotateHandler = () => {
    setRotatingBG(true);
  }
  const setBlurInHandler = () => {
    setBlurOutBg(false);
    setBlurInBg(true);
  }

  useEffect( () => {
    if(exitFromLogin && bgRef.current && bgWrapperRef.current) {
      const bgEl = bgRef.current;
      const wrapperBgEl = bgWrapperRef.current;

      setBlurOutHandler();

      const handlerRotation = () => {
        setRotateHandler();

        wrapperBgEl.addEventListener('animationend',() => { setTimeout(setBlurInHandler ,3500)}, {once: true});
        bgEl.addEventListener('animationend', () => {setLoadRiveEntrance(true)}, {once: true});
      }

      bgEl.addEventListener('animationend',() => { setTimeout(handlerRotation ,5000)}, {once: true});
    }
  }, [ exitFromLogin ]);

  return (
    <>
      <div ref={bgWrapperRef} className={'bg-wrapper ' + (rotatingBG? 'rotationAnimate ' : ' ')}>
        <img ref={bgRef} src="/assets/img/BG.png" className={'rotationg-bg ' + (blurInBg? 'blurInAnimate ' : ' ') + (blurOutBg? 'blurOutAnimate ' : ' ')}/>
      </div>
      <div className='bodyDiv'>
          {exitFromLogin? (loadRiveEntrance? <RiveAnimations /> : null) : <Login exitLogin={() => setExitFromLogin(true)} />}
      </div>
    </>
  )
}

export default Main
