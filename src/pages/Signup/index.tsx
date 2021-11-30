import { PageArea } from "./styled";
import {
  ErrorMessage,
  PageContainer,
  PageTitle,
} from "../../components/MainComponent";

import { useState, useEffect } from "react";
import OlxApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";
// import { useNavigate } from "react-router-dom";

//http://alunos.b7web.com.br:501

type StateList = {
  _id: string;
  name: string;
};

export default function Signup() {
  //   let navigate = useNavigate();

  const [name, setName] = useState("");
  const [stateLoc, setStateLoc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [stateList, setStateList] = useState<StateList[]>();
  //<StateList[]>

  useEffect(() => {
    const getState = async () => {
      const sList = await OlxApi.getState();

      setStateList(sList);
    };

    getState();
  }, []);

  // console.log("func", stateList);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Senhas não coincidem");

      setDisabled(false);
      return;
    }

    const json: any = await OlxApi.register(name, email, password, stateLoc);
    console.log(email);

    console.log("register", json);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
      window.location.href = "/";
    }

    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMessage> {error} </ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome completo</div>
            <div className="area--input">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                disabled={disabled}
              ></input>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select
                value={stateLoc}
                onChange={(e) => setStateLoc(e.target.value)}
              >
                {stateList &&
                  stateList.map((item, key) => (
                    <option key={key} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </label>
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
            <div className="area--title">Confirmar senha</div>
            <div className="area--input">
              <input
                type="password"
                value={confirmPassword}
                required
                onChange={(e) => setconfirmPassword(e.target.value)}
                disabled={disabled}
              ></input>
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button type="submit">Fazer cadastro</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
