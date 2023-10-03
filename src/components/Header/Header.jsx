import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header(props) {

    const navigation = useNavigate();

  return (
    <>
      <header className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar Produtos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
