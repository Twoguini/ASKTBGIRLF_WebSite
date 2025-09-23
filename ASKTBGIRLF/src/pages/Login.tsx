import { useState } from "react";
import SecurityForm from "../components/form";

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
      <div className={"formDivBack " + (hideElement? "formFirstChangeColor" : "")}>
        <div className={"formDiv " + (hideElement? "hideElement " : "") + (displayNone? "displayNone" : "")}>
          <h1 className={"logInTitle " + (hideElement? "hideElement" : "")}>Faça Login</h1>
          <label htmlFor="">Usuário:</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Senha:</label>
          <input type="password" name="" id="" />
          <button type="button" onClick={loginFormAppearence} className={"loginBtn " + (hideElement? "hideElement" : "")} >Entrar</button>
        </div>
        <h1 className={"secFormTitle " + (hideElement? "" : "displayNone")}>Formulário de Segurança</h1>
        <SecurityForm />
      </div>
    </>
  )
}

export default Login;
