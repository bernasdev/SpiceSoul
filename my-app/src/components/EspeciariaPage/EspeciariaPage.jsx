"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Produto from "@/components/Produto/Produto";
import Link from "next/link";
import "./especiaria.css";


// const API_URL = "http://localhost:3001";
const API_URL = "https://spicesoul-production.up.railway.app";

export default function EspeciariaPage({ id }) {
  const [especiaria, setEspeciaria] = useState(null);
  const [recomendados, setRecomendados] = useState([]);
  const [notFound, setNotFound] = useState(false);

  // Busca a especiaria pelo ID
  useEffect(() => {
    if (!id) return;

    async function fetchEspeciaria() {
      try {
        const response = await axios.get(`${API_URL}/especiarias/${id}`);
        setEspeciaria(response.data);
        setNotFound(false);
      } catch (error) {
        setNotFound(true);
      }
    }

    fetchEspeciaria();
  }, [id]);

  // Busca recomendados baseado na categoria
  useEffect(() => {
    if (!especiaria) return;

    async function fetchRecomendados() {
      try {
        const response = await axios.get(`${API_URL}/especiarias`);
        const especiarias = response.data;

        let relacionados = especiarias.filter(
          (item) =>
            item.id !== especiaria.id &&
            item.categoria.toLowerCase() ===
            especiaria.categoria.toLowerCase()
        );

        if (relacionados.length < 3) {
          const faltam = 3 - relacionados.length;
          const adicionais = especiarias
            .filter(
              (item) => item.id !== especiaria.id && !relacionados.includes(item)
            )
            .slice(0, faltam);

          relacionados = [...relacionados, ...adicionais];
        }

        setRecomendados(relacionados.slice(0, 3));
      } catch (error) {
        console.error("Erro ao buscar recomendados:", error);
      }
    }

    fetchRecomendados();
  }, [especiaria]);

  // Caso não encontre a especiaria
  if (notFound) {
    return (
      <div className="container text-center py-5 mt-5">
        <h1 className="aviso sego mb-3 pt-5">Especiaria não encontrada</h1>
        <p>A especiaria que você procura não foi encontrada. </p>
        <p>Ela pode ter sido removida, movida ou nunca existiu.</p>

        <Link href="/" className="voltar">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  // Enquanto carrega ou não há dados
  if (!especiaria) return null;

  return (
    <div className="container mx-auto my-5 pt-5">
      <div className="row pt-3 mt-5">
        {/* Imagens */}
        <div className="col-12 col-md-5 mb-5">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {especiaria.imagens.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={`${img}.png`}
                    className="d-block w-100 img-fluid rounded-1 zoom"
                    alt={`Imagem ${index + 1} de ${especiaria.nome}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Próxima</span>
            </button>
          </div>
        </div>

        {/* Informações */}
        <div className="col-12 col-md-7 divInfosProduto">
          <h1 className="nome sego title">{especiaria.nome}</h1>
          <p className="nomeCientifico">{especiaria.nomeCientifico}</p>
          <p>{especiaria.descricao}</p>

          <div className="row py-3">
            <div className="col-12 col-md-6">
              <p>Origem: {especiaria.origem}</p>
              <p>Categoria: {especiaria.categoria}</p>
              <p>Quantidade: {especiaria.quantidade}</p>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
              <div className="action-grid w-50">
                <p className="preco h3 text-center">
                  {especiaria.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>

                <Link
                  href={"/conta/login"}
                  className="text-decoration-none"
                  title="Conta - Login e Cadastro"
                >
                  <button
                    type="button"
                    className="btn btn-primary comprar w-100"
                  >
                    Comprar
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="row py-3">
            <div className="col-12 col-md-6">
              <p className="h5 destaqueCor">
                Pratos que usam {(especiaria.nome).toLowerCase()}:
              </p>
              <ul>
                {especiaria.pratos.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <p className="h5 destaqueCor">Benefícios:</p>
              <ul>
                {especiaria.beneficios.map((b, index) => (
                  <li key={index}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Produtos Recomendados */}
      {recomendados.length > 0 && (
        <div className="row">
          <h1 className="text-center mb-4 sego title">Produtos Recomendados</h1>
          {recomendados.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
              key={item.id}
            >
              <Produto item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
