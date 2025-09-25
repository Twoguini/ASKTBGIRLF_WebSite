import { useState } from "react";
import SecurityForm from "../components/form";

import '../style/Login.css';

type loginProps = {
  exitLogin: () => void;
}

function Login({ exitLogin }:loginProps ) {

  const [ hideElement, setHideElement ] = useState(false);
  const [ displayNone, setDisplayNone ] = useState(false);
  const [ childSecFormFinished, setChildSecFormFinished ] = useState<number>(0);
  const [ loginFormExit, setLoginFormExit ] = useState<boolean>(false);

  const [ loginForm, setLoginForm ] = useState({
    username: "",
    password: ""
  });

  const getFormInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const loginFormAppearence = () => {
    if (loginForm.password === "guiguiamaaduda" && loginForm.username === "guilherme.comunian") {
      setHideElement(true);

      setTimeout(() => {
        setDisplayNone(true);
      }, 1000);
    } else return;
  }

  const loginFormExitStart = () => {
    setLoginFormExit(true);
    setTimeout(() => {exitLogin()}, 1000);
  }

  return(
    <>
      <div className={"formDivBack " + (hideElement? (loginFormExit? "hideElement": "formFirstChangeColor ") : "")}>
        <div className={"formDiv " + (hideElement? "hideElement " : "") + (displayNone? "displayNone" : "")}>
          <h1 className={"logInTitle " + (hideElement? "hideElement" : "")}>Faça Login</h1>
          <div className="inputContainer">
            <label htmlFor="username">Usuário:</label> <br />
            <input type="text" name="username" id="" onChange={getFormInputValue} />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Senha:</label> <br />
            <input type="password" name="password" id="" onChange={getFormInputValue} />
          </div>
          <button type="button" onClick={loginFormAppearence} className={"loginBtn " + (hideElement? "hideElement" : "")} >Entrar</button>
        </div>
        <h1 className={"secFormTitle " + (hideElement && childSecFormFinished < 4? "" : "displayNone ")}>Formulário de Segurança</h1>
        <SecurityForm hideElement={hideElement} onSecFormFinished={setChildSecFormFinished} />

        <div className={"" + (childSecFormFinished < 4? "displayNone" : "welcomeMsg")}>
          <h1>Bem Vinda Minha Gatinha Linda!!</h1>
          <h2>Amo-Te Muitão Tão</h2>
          <h3>Fiz isso com muito carinho e o pouquinho de tempo que restava nos meus dias. <br /> Espero que você goste!</h3>
          <button type="button" className={"continueBtn "} onClick={loginFormExitStart}>Continuar</button>
        </div>

      </div>
    </>
  )
}

export default Login;
