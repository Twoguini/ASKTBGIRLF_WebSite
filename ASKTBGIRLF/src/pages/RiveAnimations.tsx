import React from "react";
import Teste from "../components/sideAnimations";
import FlowerAnimations from "../components/flowerAnimations";

export default function RiveAnimations() {

return(
  <>
     <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <Teste />
      <FlowerAnimations width={2560} height={1440} />
    </div>
  </>
);

}