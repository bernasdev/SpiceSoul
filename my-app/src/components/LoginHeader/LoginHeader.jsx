// "use client"
// import { usePathname } from "next/navigation";
// import "./loginheader.css"
// import Link from "next/link";
// export default function LoginHeader() {
//     const pathName = usePathname();
//     return (
//         <>
//             <nav className="navbar navbar-login w-100 navbar-expand-lg">
//                 <div className="container-fluid navbarEspecial">

//                     <div className="d-flex w-100 justify-content-between">

//                         <Link href={'/'} className="item d-none d-lg-flex ">
//                             <img src="/imagensProjeto/elefante_bege.png" width={120} alt="Logo Elefante Bege" />
//                         </Link>

//                         <div className="d-flex gap-3 px-5 flex-wrap justify-content-center link-grid sublinhado">
//                             <Link href={'/'} className="item text-center"> Home </Link>

//                             <Link href={'/conta/cadastro'} className={`item text-center ${pathName === '/conta/cadastro' ? 'activeLogin' : ''} `} > Cadastre-se </Link>

//                             <Link href={'/conta/login'} className={`item text-center ${pathName === '/conta/login' ? 'activeLogin ' : ''} `}> Login </Link>
//                         </div>
//                     </div>

//                     <Link href={'/'} className="item d-flex d-lg-none ">
//                         <img src="/imagensProjeto/elefante_bege.png" width={120} alt="Logo Elefante Bege" />
//                     </Link>
//                 </div>
//             </nav>

//         </>
//     )
// }

"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./loginheader.css"
import Link from "next/link";
export default function LoginHeader() {
    const pathName = usePathname();
    return (
        <nav className="navbar navbar-expand-lg">
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

                <div className="collapse navbar-collapse navbarLogin" id="navbarSupportedContent">
                    <div className="col-md-1 logoNavLogin">
                        <div className="logo">

                            <Link className="paddingLinkLogo" href={'/'}> <Image className="img-fluid imgLogoLogin d-none d-lg-flex" src="/imagensProjeto/elefante_bege.png" alt="logo" width={120} height={120} /> </Link>

                        </div>
                    </div>
                    <div className="itensNavLogin col-md-4">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly colorItemLogin">
                            <li className="nav-item">
                                <Link className={`nav-link nav-home ${pathName === '/' ? 'active' : ''}`} href={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-especiarias ${pathName.startsWith('/conta/cadastro') ? 'active' : ''}`} href={'/conta/cadastro'}>Cadastro</Link>

                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link nav-sobre ${pathName === '/conta/login' ? 'active' : ''}`} href={'/conta/login'}>Login</Link>
                            </li>
                        </ul>
                        <div className="d-flex w-10 justify-content-around align-items-center conta-carrinho" >
                            <Link href={'/conta/login'} className="text-decoration-none" title="Conta - Login e Cadastro"><i className="bi bi-person icon-nav"></i></Link>
                            <Link href={'/conta/login'} className="text-decoration-none" title="Conta - Login e Cadastro"><i className="bi bi-basket3"></i></Link>
                        </div>
                    </div>
                </div>
                <Image className="img-fluid d-flex d-lg-none" src="/imagensProjeto/elefante_bege.png" width={70} height={70} alt="logo" />
            </div>
        </nav>
    );
}