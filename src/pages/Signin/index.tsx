import { PageArea } from "./styled";
import { PageContainer, PageTitle } from ".././../components/MainComponent";
import { useState } from "react";
import OlxApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);

    const json: any = await OlxApi.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, remember);
      window.location.href = "/";
    }
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
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
                onClick={() => setRemember(!remember)}
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
