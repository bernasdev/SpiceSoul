import Link from 'next/link';
import "./Produto.css"

export default function Produto({ item }) {
    return (
        <>
            <Link href={`/especiarias/${item.id}`} style={{textDecoration: 'none', display: 'flex'}}  >
                <div className="card produto" style={{ maxWidth: "18rem" }} >
                    <img src={`${item.imagens[0]}.png`} className="card-img-top" alt={item.nome} />
                    <div className="card-body">
                        <p className="card-text text-center">
                            {item.nome}
                        </p>
                        <button className="botao-card">Conheça esse sabor!</button>
                    </div>
                </div>
            </Link>

        </>
    )
}