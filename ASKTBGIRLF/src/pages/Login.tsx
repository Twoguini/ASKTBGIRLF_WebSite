import { useState } from "react";

type props = {
  setBlurInBg: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({setBlurInBg}: props) {

  const [ hideElement, setHideElement ] = useState(false);

  const loginFormAppearence = () => {
    setBlurInBg(true);
    setHideElement(true);
  }

  return(
    <>
      <button type="button" onClick={loginFormAppearence} className={"loginBtn " + (hideElement? "hideElement" : "")} >Entrar</button>
      <div>
      </div>
    </>
  )
}

export default Login;
