import Header from "./Header";

export default function lista() {

    return(
        <>
            <Header>
                <li>
                    <a href=""><Link to={"/"}>Home</Link></a>
                </li>
                <li>
                    <a href="#">Produtos</a>
                </li>
                <li>
                    <a href="#">Editar Produtos</a>
                </li>
            </Header>
        </>
    );
}