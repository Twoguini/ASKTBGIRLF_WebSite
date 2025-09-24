import React, { useEffect } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface Props {
  width?: number;
  height?: number;
}

export default function FlowerAnimations({ width = 2560, height = 1440 }:Props) {

  const {  rive, RiveComponent } = useRive({
    src: '/assets/rive/welcome_animation.riv',
    stateMachines:"Flower",
    autoplay: true,
  });

  return(
    <div style={{ width, height }}>
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );

}