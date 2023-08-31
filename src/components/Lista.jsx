import Header from "./Header";
import { Link } from "react-router-dom";

export default function lista() {

    return(
        <>
            <Header>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/produtos"}>Produtos</Link>
                </li>
                <li>
                    <Link to={"/editar/produtos/1"}>Produto - 1</Link>
                </li>
                <li>
                    <Link to={"/editar/produtos/2"}>Produto - 2</Link>
                </li>
                <li>
                    <Link to={"/editar/produtos/3"}>Produto - 3</Link>
                </li>
            </Header>
        </>
    );
}