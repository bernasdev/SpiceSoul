'use client';
import './Footer.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const showGradient = pathname === '/' || pathname === '/conta/login' || pathname === '/conta/cadastro';

    return (
        <div>
            <div className={`row ${showGradient ? 'bg-texture' : ''}`}>
                <img
                    className={`img-fluid p-0 m-0 w-100 ${showGradient ? 'castelo' : ''}`}
                    src="/imagensProjeto/castle2.png"
                    alt=""
                />
            </div>

            <div className="row gradiente w-100 m-0 p-0 d-flex justify-content-center">
                <div className="row">

                    <div className="col-12 col-sm-4 centro-celular especiariasImg align-items-center d-none d-sm-flex">
                        <img className="img-fluid pratos" src="/imagensProjeto/especiarias.png" alt="especiarias" />
                    </div>

                    <div className="col-12 col-sm-4 col-md-4 d-flex justify-content-center">
                        <div className="row w-100 d-flex flex-column align-items-center divInfos">
                            <div className="p-3 links-site">
                                <h1 className="sego tituloRodape pb-3">Spice & Soul</h1>
                                <div className="d-flex flex-column align-items-center itensDiv pb-4">
                                    <Link href={'/'}>Home</Link>
                                    <Link href={'/especiarias'}>Produtos</Link>
                                    <Link href={'/sobre'}>Sobre Nós</Link>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly align-items-center links">
                                <a href="https://www.instagram.com/spiceandsoullhr/"><i className='bi bi-instagram'></i></a>
                                <a href="https://maps.app.goo.gl/PYwnvrAPkBQsBcJU9"><i className='bi bi-geo-alt'></i></a>
                                <a href="https://wa.me/551193001135"><i className='bi bi-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-4 centro-celular pai-elefante align-items-center d-none d-sm-flex">
                        <img className="img-fluid elefante" src="/imagensProjeto/elefante.png" alt="elefante" />
                    </div>
                </div>
            </div>

            <div className="row marrom">
                <p className='m-2 text-center'>2025, SPICE & SOUL - Todos os direitos reservados</p>
            </div>
        </div>
    );
}
