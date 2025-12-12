import "./notfound.css"
import Link from "next/link"
export default function notFound() {
    return (
        <>
            <div className="not-found">
                <div className="container-404 d-flex flex-column">
                    <h1 className="sego titlenotfound">Spice & Soul</h1>
                    <h1>404 | Página Não Encontrada</h1>
                    <Link href={'/'} className="p-3 linkhome">Voltar para a Página Inicial</Link>
                </div>
            </div>
        </>
    )
}