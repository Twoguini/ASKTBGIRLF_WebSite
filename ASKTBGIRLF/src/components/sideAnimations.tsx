import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export type SideRef = {
  triggerEntry: () => void;
  triggerExit: () => void;
  isReady: () => boolean;
}

const Side = forwardRef<SideRef>((_props, ref) => {

  const [ ready, setReady ] = useState(false);

  const { rive, RiveComponent } = useRive({
    src:'/assets/rive/welcome_animation.riv',
    stateMachines: 'Side',
    autoplay: true,
  });

  const startSideEntry = useStateMachineInput(rive, 'Side', "StartEntry");
  const startExit = useStateMachineInput(rive, "Side", "StartExit");

  useEffect(() => {
    if(rive && startSideEntry) {
      setReady(true);
    }
  }, [rive, startSideEntry]);

  useImperativeHandle(ref, () => ({
    triggerEntry: () => startSideEntry?.fire(),
    triggerExit: () => startExit?.fire(),
    isReady: () => ready,
  }));

  return(
    <div className="sideAnimationContainer">
      <RiveComponent />
    </div>
  );
});

export default Side;