import { useRive, useStateMachineInput } from "@rive-app/react-webgl2";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export type FlowerRef = {
  triggerEntry: () => void;
  triggerClick: () => void;
  setCheck: (value: number) => void;
  isReady: () => boolean;
}

 const FlowerAnimations = forwardRef<FlowerRef>((_props, ref) => {

  const [ ready, setReady ] = useState(false);

  const { rive, RiveComponent } = useRive({
    src:'/assets/rive/welcome_animation.riv',
    stateMachines: 'Flower',
    autoplay: true,
  });

  const startFlowerEntry = useStateMachineInput(rive, 'Flower', "StartFlowerEntry");
  const ClickAnimation = useStateMachineInput(rive, 'Flower', "ClickAnimation");
  const Checks = useStateMachineInput(rive, 'Flower', "Checks");

  useEffect(() => {
    if(rive && startFlowerEntry) {
      setReady(true);
    }
  }, [rive, startFlowerEntry]);

  useImperativeHandle( ref, () => ({
    triggerEntry: () => startFlowerEntry?.fire(),
    triggerClick: () => ClickAnimation?.fire(),
    setCheck: (value: number) => {if(Checks) Checks.value = value;},
    isReady: () => ready,
  }));

  return(
    <div className="sideAnimationContainer">
      <RiveComponent />
    </div>
  );
});

export default FlowerAnimations;