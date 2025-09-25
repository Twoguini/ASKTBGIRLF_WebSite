import { useRef, useEffect, useState } from "react";

import Side from "../components/sideAnimations";
import type { SideRef } from "../components/sideAnimations";

import FlowerAnimations from "../components/flowerAnimations";
import type { FlowerRef } from "../components/flowerAnimations";

import CheckList from "../components/checkList";

import '../style/animations.css';

export default function RiveAnimations() {
  
  const [ unsetSideAnimation, setUnsetSideAnimation ] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  const sideRef = useRef<SideRef>(null);
  const flowerRef = useRef<FlowerRef>(null);

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

   useEffect(() => {
    if (!checkedItems) return;

      if (checkedItems.flores) {
        flowerRef.current?.triggerClick();
        flowerRef.current?.setCheck(1);
        if(checkedItems.retrato) {
          flowerRef.current?.triggerClick();
          flowerRef.current?.setCheck(2);
          if(checkedItems.album) {
            flowerRef.current?.triggerClick();
            flowerRef.current?.setCheck(3);
            if(checkedItems.caixa) {
              flowerRef.current?.triggerClick();
              flowerRef.current?.setCheck(4);
              if(checkedItems.surpresaFinal) {
                flowerRef.current?.triggerClick();
                flowerRef.current?.setCheck(5);
              }
            }
          }
        }
      }

    }, [checkedItems]);

  const animationFlux = async () => {
    sideRef.current?.triggerEntry();
    await delay(1700);
    flowerRef.current?.triggerEntry();
    await delay(12000);
    sideRef.current?.triggerExit();
    await delay(2600);
    setUnsetSideAnimation(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(sideRef.current?.isReady() && flowerRef.current?.isReady()) {
        animationFlux();
        clearInterval(interval);
      }
    }, 50);
  }, []);

return(
  <>
    <div className={"animationsMainContainer " + (unsetSideAnimation? "flowerZoomOut" : "")} >
      {unsetSideAnimation? null : <Side ref={sideRef} />}
      <FlowerAnimations ref={flowerRef} />
    </div>
    <div className={"checkListContainer " + (unsetSideAnimation? 'checkListAppearence':"" )} >
      <CheckList onChecked={setCheckedItems}/>
    </div>
  </>
);

}