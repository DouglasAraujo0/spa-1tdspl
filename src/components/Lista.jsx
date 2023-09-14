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
            </Header>
        </>
    );
}