import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function ExcluirProdutos() {

    document.title = "ExcluirProdutos";

    const {id} = useParams();

    const produto = ListaProdutos.filter(produto => produto.id == id);

    return(
        <>
            <div>
                <h1>Excluir Produtos</h1>
            </div>
        </>
    )
}