import { useParams} from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProduto() {

    document.title = "EditarProdutos";

    //Receber o ID do produto pelo HOOk useParams();
    const {id} = useParams();

    //Recuperar o produto na lista pelo ID.
    const produtoRecuperado = ListaProdutos.filter(produto => produto.id == id);

    const [produto, setProduto] = useState({
        id: produtoRecuperado[0].id,
        nome : produtoRecuperado[0].nome,
        desc: produtoRecuperado[0].desc,
        preco: produtoRecuperado[0].preco
    });

    const handleChange = (event) => {
        console.log("O valor de" , event.target);

        //Desestruturação no elemento que dispara a ação
        const {name, value} = event.target;

        setProduto({...produto, [name]:value});
    }   



    return (
        <>
            <div>
                <h1>EditarProdutos</h1>
            </div>
            <div>
                <form>
                    <fieldset>
                        <legend>Produto a ser Editado</legend>
                        <div>
                            <input type="hidden" name="id" value={produto.id} />
                        </div>
                        <div>
                            <label htmlFor="">Nome:</label>
                            <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Descrição:</label>
                            <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Preço:</label>
                            <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
                        </div>
                        <div>
                            <button>EDITAR</button>
                        </div>
                        
                    </fieldset>
                </form>
            </div>
            <div>
                <p>Nome: {produto.nome}</p>
                <p>Desc: {produto.desc}</p>
                <p>Preco: {produto.preco}</p>
            </div>
        </>
    )
}