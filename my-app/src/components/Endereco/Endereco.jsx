import "./endereco.css";

export default function Endereco() {
    return (
        <>
            <div className="container">
                <div className="localizacao-container text-center w-100 row">
                    <div className="col">
                        <h2 className="titulo-aroma sego titulo-vazado">O AROMA QUE ATRAI:</h2>
                        <h3 className="subtitulo-aroma sego">conheça o cantinho da nossa essência!</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 info-box">
                        <div className="quadro-infos d-flex flex-column align-items-center gap-3">
                            <img src="/imagensProjeto/luaestrela.png" alt="Lua com estrela - simbolo islamico" className="img-fluid w-25" />
                            <div className="endereco sego text-center">
                                <p className="sego mb-0">
                                    Rua Alameda Rigonni, 157 - Arabiano
                                </p>
                                <p className="sego mb-0">
                                    São Paulo - SP. 09572-000
                                </p>
                            </div>
                            <div className="horario text-center">
                                <p className="sego mb-0">
                                    De segunda a sexta, das 9h às 18h
                                </p>
                                <p className="sego mt-0">
                                    Sábado, das 10h às 14h
                                </p>
                            </div>

                            <img src="/imagensProjeto/predios.png" alt="predios" className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mapa-box text-center d-flex flex-column justify-content-center">
                        <div className="quadro-infos p-4 d-flex flex-column align-items-center gap-3">
                            <div className="d-flex w-75">
                                <iframe
                                    title="Localização Spice & Soul"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0047975794764!2d12.488225615420608!3d41.89021077922168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a4d8e0103d%3A0x79cd3d60e7f67a7d!2sColiseu!5e0!3m2!1spt-BR!2sbr!4v1588888888888!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="250"
                                    allowFullScreen=""
                                    loading="lazy"
                                    style={{ border: "8% solid #A40000", borderRadius: "10px" }}
                                ></iframe>
                            </div>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-custom mt-3 sego"
                            >
                                Ver mais no Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid borderBottom"></div>
        </>
    );
}