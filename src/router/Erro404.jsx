import { Link } from "react-router-dom"

export default function Erro404() {
    return (
        <div>
            <h1>Está página não existe</h1>
            <p>Retorne para o início <span> <Link to={"/"}>INÍCIO</Link></span></p>
        </div>
    )
}