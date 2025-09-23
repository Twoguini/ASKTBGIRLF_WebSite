import { useState } from "react";

function Login() {

  const [ hideElement, setHideElement ] = useState(false);
  const [ displayNone, setDisplayNone ] = useState(false);

  const loginFormAppearence = () => {
    setHideElement(true);

    setTimeout(() => {
      setDisplayNone(true);
    }, 1000);
  }

  return(
    <>
      <div className="formDivBack">
        <div className={"formDiv " + (hideElement? "hideElement " : "") + (displayNone? "displayNone" : "")}>
          <h1 className={"logInTitle " + (hideElement? "hideElement" : "")}>Faça Login</h1>
          <button type="button" onClick={loginFormAppearence} className={"loginBtn " + (hideElement? "hideElement" : "")} >Entrar</button>
        </div>
      </div>
    </>
  )
}

export default Login;
