import "./CarrosselSobre.css";

export default function Carrossel() {
    return (
        <>
            <div className="container-fluid carrossel">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/imagensProjeto/itemCarrossel1.png" className="d-block w-100 item" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/imagensProjeto/itemCarrossel2.png" className="d-block w-100 item" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/imagensProjeto/itemCarrossel3.png" className="d-block w-100 item" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <img src="/imagensProjeto/estrelasbreak.png" alt="Textura de estrelas para quebra de linha" className="img-fluid w-100 py-4" />
        </>
    );
}