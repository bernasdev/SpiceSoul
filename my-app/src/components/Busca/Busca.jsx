"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import "./Busca.css";

export default function BarraDeBusca() {
    const [valorBuscado, setValorBuscado] = useState("");
    const router = useRouter();

    const handleBusca = (e) => {
        e.preventDefault();
        if (valorBuscado.trim()) {
            router.push('/especiarias?search=' + encodeURIComponent(valorBuscado.trim()));
        }
    };

    return (
        <form onSubmit={handleBusca} className="formularioBusca" role="search">
            <button className="botaoBusca" type="submit" title="Buscar">
                <i className="bi bi-search iconeBusca"></i>
            </button>
            <input
                className="campoBusca"
                type="text"
                placeholder="Encontre o melhor sabor"
                aria-label="Search"
                value={valorBuscado}
                onChange={(e) => setValorBuscado(e.target.value)}
            />
        </form>
    );
}
