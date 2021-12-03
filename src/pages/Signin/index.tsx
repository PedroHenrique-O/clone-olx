import { PageArea } from "./styled";
import {
  ErrorMessage,
  PageContainer,
  PageTitle,
} from ".././../components/MainComponent";
import { useState } from "react";
import OlxApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";
// import { useNavigate } from "react-router-dom";

//http://alunos.b7web.com.br:501

export default function Signin() {
  //   let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    const json: any = await OlxApi.login(email, password);
    console.log(json.token);

    console.log(json);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, remember);

      //navigate("/");

      window.location.href = "/";
    }

    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && <ErrorMessage> {error} </ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                disabled={disabled}
              ></input>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                disabled={disabled}
              ></input>
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <input
                className="check-box"
                disabled={disabled}
                checked={remember}
                onChange={() => setRemember(!remember)}
                type="checkbox"
              ></input>
              <span>Lembrar? </span>
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button type="submit">Logar</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
