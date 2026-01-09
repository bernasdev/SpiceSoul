"use client";

import { useState } from "react";
import Link from "next/link";
const axios = require('axios');
import "./user.css";

// const API_URL = "http://localhost:3001";
const API_URL = "https://spicesoul-production.up.railway.app";

export default function account({ action }) {

    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [password, setPassword] = useState(""); // para confirmação
    const [loginParam, setLoginParam] = useState("");
    const [loginSenha, setLoginSenha] = useState("")
    const [mensagem, setMensagem] = useState("");

    async function Login(parametro, senha) {
        try {
            const response = await axios.get(`${API_URL}/usuarios`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Spice&Soul2025'
                }
            });
            const usuarios = response.data;

            const usuario = usuarios.find((u) => u.usuario === parametro || u.email === parametro);

            if(!usuario) {
                return "Usuário Não Encontrado"
            }

            if (usuario.senha === senha) {
                setLoginParam('');
                setLoginSenha('');
                return `Bem Vindo, ${usuario.usuario}`;
            } else {
                return "Senha Incorreta"
            }

        } catch (error) {
            console.error('Erro ao listar usuarios: ', error.message);
            return;
        }
    }

    async function Cadastro(usuario, email, senha, password) {
        if (!(senha === password)) return "As Senhas Não Coincidem";
        try {
            const { data } = await axios.post(`${API_URL}/usuarios`, {
                usuario: usuario,
                email: email,
                senha: senha
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Spice&Soul2025'
                }
            });
            setEmail('');
            setUsuario('');
            setSenha('');
            setPassword('');
            return "Usuário Cadastrado com Sucesso!";
        } catch (error) {
            if (error.status === 409) return "Este Email já está Cadastrado"
            console.error(error);
            return "Erro ao Cadastrar Usuário."
        }
    }

    return (
        <>
            <div className="bgspicesoul paddingLogin">
                <div className="container divContainerLogin p-sm-1 form-container rounded-4">

                    <div className="row container-child" id={action}>
                        <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">

                            {action == 'cadastro' ? (<>
                                <div className="logo d-flex justify-content-center p-3 flex-column align-items-center">
                                    <img src="/imagensProjeto/title.png" alt="" className="img-fluid w-75 " />
                                    <div className="sego brown">Faça seu cadastro</div>
                                </div>
                                <form
                                    className="formLogin w-75 p-2 d-flex flex-column align-items-center"
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        const resultado = await Cadastro(usuario, email, senha, password);
                                        setMensagem(resultado)
                                    }}
                                >
                                    <div className="input-wrapper">
                                        <input className="input-box-login" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="input-wrapper">
                                        <input className="input-box-login" type="text" placeholder="Nome de Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                                    </div>
                                    <div className="input-wrapper">
                                        <input className="input-box-login" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                    </div>
                                    <div className="input-wrapper">
                                        <input className="input-box-login" type="password" placeholder="Repita a Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <button className="w-50 accountbtn">Criar Conta</button>
                                    <Link className="accountlink" href={'/conta/login'}>Já possui cadastro? Clique aqui!</Link>
                                    {mensagem && <p className="text-center mt-3">{mensagem}</p>}
                                </form>

                            </>) : action == 'login' ? (<>
                                <div className="logo d-flex justify-content-center p-3 flex-column align-items-center">
                                    <img src="/imagensProjeto/title.png" alt="" className="img-fluid w-75 w-sm-100 " />
                                    <div className="sego brown">Realize seu Login aqui</div>
                                </div>
                                <form
                                    className="formLogin w-75 p-2 d-flex flex-column align-items-center"
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        const resultado = await Login(loginParam, loginSenha);
                                        setMensagem(resultado);
                                    }}
                                >
                                    <div className="input-wrapper">
                                        <input className="input-box-login" type="text" placeholder="Email ou Nome de Usuario" value={loginParam} onChange={(e) => setLoginParam(e.target.value)} />
                                    </div>
                                    <div className="input-wrapper">
                                        <input className="input-box-login" type="password" placeholder="Senha" value={loginSenha} onChange={(e) => setLoginSenha(e.target.value)} />
                                    </div>

                                    <button className="w-50 accountbtn">Entrar</button>
                                    <Link className="accountlink" href={'/conta/cadastro  '}>Ainda não possui uma conta? Clique Aqui!</Link>
                                    {mensagem && <p className="text-center mt-3">{mensagem}</p>}
                                </form>
                            </>) :
                                ''
                            }

                        </div>
                        <div className="col-12 col-md-7 col-sm-6 d-none d-lg-flex justify-content-center align-items-center p-0">
                            <img src="/imagensProjeto/pratogiratorio.png" className=" pratos-girando" alt="Pratos Girando" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row marrom">
                <p className='m-2 text-center'>2025, SPICE & SOUL - Todos os direitos reservados</p>
            </div>
        </>
    )
}