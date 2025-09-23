import { useState } from "react";
import SecurityForm from "../components/form";

function Login() {

  const [ hideElement, setHideElement ] = useState(false);
  const [ displayNone, setDisplayNone ] = useState(false);

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
    if (loginForm.password === "guiguiamaduda" && loginForm.username === "guilherme.comunian") {
      setHideElement(true);

      setTimeout(() => {
        setDisplayNone(true);
      }, 1000);
    } else return;
  }

  return(
    <>
      <div className={"formDivBack " + (hideElement? "formFirstChangeColor" : "")}>
        <div className={"formDiv " + (hideElement? "hideElement " : "") + (displayNone? "displayNone" : "")}>
          <h1 className={"logInTitle " + (hideElement? "hideElement" : "")}>Faça Login</h1>
          <label htmlFor="username">Usuário:</label>
          <input type="text" name="username" id="" onChange={getFormInputValue} />
          <label htmlFor="password">Senha:</label>
          <input type="password" name="password" id="" onChange={getFormInputValue} />
          <button type="button" onClick={loginFormAppearence} className={"loginBtn " + (hideElement? "hideElement" : "")} >Entrar</button>
        </div>
        <h1 className={"secFormTitle " + (hideElement? "" : "displayNone")}>Formulário de Segurança</h1>
        <SecurityForm />
      </div>
    </>
  )
}

export default Login;
