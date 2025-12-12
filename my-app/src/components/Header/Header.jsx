"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import "./Header.css";
import { usePathname } from "next/navigation";
export default function Header() {
    const [valorBuscado, setValorBuscado] = useState("");
    const router = useRouter();

    const handleBusca = (e) => {
        e.preventDefault();
        if (valorBuscado.trim()) {
            router.push('/especiarias?search=' + encodeURIComponent(valorBuscado.trim()));
            setValorBuscado("");
        }
    };
    const pathName = usePathname();
    return (
        <nav className="navbar navbar-expand-lg navbarHome">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className="itensNav col-lg-5">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly colorItensHome">
                            <li className="nav-item">
                                <Link className={`nav-link nav-home ${pathName === '/' ? 'active' : ''}`} href={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-especiarias ${pathName.startsWith('/especiarias') ? 'active' : ''}`} href={'/especiarias'} >Especiarias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-sobre ${pathName === '/sobre' ? 'active' : ''}`} href={'/sobre'}>Sobre nós</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-receitas ${pathName === '/#receitas' ? 'active' : ''}`} href={"/#receitas"}>Receitas</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col logoNav">
                        <div className="logo">
                            <img className="img-fluid imgLogo d-none d-lg-flex" src="/imagensProjeto/logoSpice.png" alt="logo" />
                        </div>
                    </div>

                    <div className="buscaNav col-lg-5 d-flex justify-content-between justify-content-lg-evenly p-4">
                        <form onSubmit={handleBusca} className="formNav d-flex" role="search">
                            <button className="botaoBusca" type="submit" title="Buscar">
                                <i className="bi bi-search iconeBusca"></i>
                            </button>
                            <div className="input-wrapper">
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Encontre o melhor sabor"
                                    aria-label="Search"
                                    value={valorBuscado}
                                    onChange={(e) => setValorBuscado(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className="d-flex w-lg-20 justify-content-around align-items-center conta-carrinho" > 
                            <Link href={'/conta/login'} className="text-decoration-none" title="Conta - Login e Cadastro"><i className="bi bi-person icon-nav"></i></Link>
                            <Link href={'/conta/login'} className="text-decoration-none" title="Conta - Login e Cadastro"><i className="bi bi-basket3"></i></Link>
                        </div>
                    </div>
                </div>
                <img className="img-fluid  d-flex d-lg-none" src="/imagensProjeto/logoSpice.png" width={70} alt="logo" />
            </div>
        </nav>
    );
}