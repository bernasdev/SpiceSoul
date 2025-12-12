"use client";
import { useState } from "react";
import axios from "axios";
import "./Contato.css";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    motivo: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/contato", formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", motivo: "", mensagem: "" });
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="container contato-section py-5">
      <div className="row px-3 d-flex divContato">
        {/* Texto à esquerda */}
        <div className="col-md-5 mb-4 text-center">
          <h2 className="titulo-contato sego">
            Ajude a refinar<br />o nosso sabor!
          </h2>
          <p className="texto-contato">
            Na Spice & Soul, acreditamos que os sabores mais marcantes nascem da troca — de culturas, experiências e boas ideias.
            Por isso, queremos ouvir você! Seja para compartilhar uma sugestão, deixar seu feedback ou propor uma parceria que faça sentido
            com nossa essência, este espaço é todo seu.
          </p>
          <p className="texto-contato">
            Cada mensagem recebida é como um novo tempero: enriquece, transforma e inspira. Fale com a gente.
            Sua voz é ingrediente essencial nessa mistura de alma e sabor.
          </p>
          <img src="/imagensProjeto/florLotus.png" alt="Ícone" className="mt-3" style={{ width: "60px" }} />
        </div>

        {/* Formulário à direita */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nome completo</label>
              <input
                type="text"
                name="nome"
                className="form-control custom-input"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                name="email"
                className="form-control custom-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Motivo do contato</label>
              <input
                type="text"
                name="motivo"
                className="form-control custom-input"
                value={formData.motivo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Escreva sua mensagem aqui</label>
              <textarea
                name="mensagem"
                className="form-control custom-input"
                rows="5"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger btn-vermelho">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}