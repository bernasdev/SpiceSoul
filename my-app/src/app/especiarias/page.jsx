"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Produto from "@/components/Produto/Produto";
import Loading from "../loading"; 
import "./especiarias.css"

const API_URL = "/api";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const searchValue = searchParams.get("search") || "";

    const [especiarias, setEspeciarias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // controle do loading

    const categorias = [
        "Todas", "Picante", "Aromática", "Doce", "Defumada", "Terrosa", "Erva seca", "Misto"
    ];

    useEffect(() => {
        async function fetchEspeciarias() {
            try {
                setIsLoading(true);

                const response = await axios.get(`${API_URL}/especiarias`);
                setEspeciarias(response.data);
            } catch (error) {
                console.error("Erro ao buscar especiarias:", error);
                setEspeciarias([]);
            } finally {
                setIsLoading(false); // termina o loading
            }
        }

        fetchEspeciarias();
    }, []);

    useEffect(() => {
        const normalizar = (str) =>
            str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        if (searchValue) {
            const termo = normalizar(searchValue);
            const resultados = especiarias.filter((item) =>
                normalizar(item?.nome).includes(termo) ||
                normalizar(item?.descricao).includes(termo) ||
                normalizar(item?.nomeCientifico).includes(termo) ||
                normalizar(item?.categoria).includes(termo) ||
                (Array.isArray(item?.beneficios) && item.beneficios.some((b) => normalizar(b).includes(termo))) ||
                (Array.isArray(item?.pratos) && item.pratos.some((p) => normalizar(p).includes(termo)))
            );
            setProdutosFiltrados(resultados);
        } else {
            const filtrados =
                categoriaSelecionada === "Todas"
                    ? especiarias
                    : especiarias.filter(
                        (item) =>
                            item.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
                    );
            setProdutosFiltrados(filtrados);
        }
    }, [searchValue, especiarias, categoriaSelecionada]);

    // 👇 exibe o loading se estiver carregando
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="container pt-5 d-flex mx-auto my-5 flex-column buscaCor">
            {searchValue ? (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src="/imagensProjeto/bannerPesquisa.png"
                        alt="BannerProdutos"
                        className="img-fluid w-75 pt-5"
                        width={800}
                        height={400}
                    />
                    <h2 className="text-center">Resultados para "{searchValue}":</h2>
                </div>
            ) : (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src="/imagensProjeto/produtosbanner.png"
                        alt="BannerProdutos"
                        className="img-fluid w-75 pt-5"
                        width={800}
                        height={400}
                    />
                    <div className="categorias-container d-flex justify-content-center gap-5 flex-wrap pb-4">
                        {categorias.map((cat, index) => (
                            <button
                                key={index}
                                className={`categoria-botao ${categoriaSelecionada === cat ? "ativo" : ""}`}
                                onClick={() => setCategoriaSelecionada(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="row row-gap-5 column-gap-3 mt-2 justify-content-center">
                {produtosFiltrados.length > 0 ? (
                    produtosFiltrados.map((item) => (
                        <div
                            key={item.id}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                        >
                            <Produto item={item} />
                        </div>
                    ))
                ) : (
                    <p className="text-center color">Nenhum resultado encontrado.</p>
                )}
            </div>
        </div>
    );
}
