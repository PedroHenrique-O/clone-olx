import { HeaderArea } from "./styled";
import { Link } from "react-router-dom";
import { isLogged } from "../../../helpers/AuthHandler";

export default function Header() {
  let logged = isLogged();

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-img"
              alt=" logo"
              src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            ></img>
          </Link>
        </div>

        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link className="link" to="my-account">
                    Minha Conta
                  </Link>
                </li>

                <li>
                  <Link className="link" to="logout">
                    Sair
                  </Link>
                </li>

                <li>
                  <Link className="link btn" to="post-an-ad">
                    Poste um anúncio{" "}
                  </Link>
                </li>
              </>
            )}

            {!logged && (
              <>
                <li>
                  <Link className="link" to="/signin">
                    Login
                  </Link>
                </li>

                <li>
                  <Link className="link" to="signup">
                    Cadastrar
                  </Link>
                </li>

                <li>
                  <Link className="link btn" to="signin">
                    Poste um anúncio{" "}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}
