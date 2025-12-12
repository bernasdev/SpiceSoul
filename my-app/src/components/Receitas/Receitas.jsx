import "./Receitas.css";
export default function Receitas() {
    return (
        <>
            <div
                id="carouselExampleInterval"
                className="carousel slide receitaspai"
                data-bs-ride="carousel"
            >
                <div id="receitas" className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={5000}>
                        <div className="bg-laranja w-100">
                            <div className="container mx-auto py-5">
                                <div className="row p-5">
                                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                        <img src="/pratos/1.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex flex-column justify-content-evenly">
                                        <div className="pilar w-100">
                                            <div className="receitas sego h2 m-0">
                                                Receitas Spice
                                            </div>
                                            Tacos mexicanos com pimenta
                                        </div>
                                        <p className="text-bege px-3 px-md-5">
                                            Os tacos mexicanos são uma das expressões mais autênticas e saborosas da culinária do México. Com uma base simples de tortilla de milho ou trigo, macia ou crocante, os tacos são recheados com uma variedade infinita de ingredientes: carnes suculentas como carne assada, carnitas ou al pastor, além de opções vegetarianas, acompanhadas de cebola, coentro fresco, molhos picantes e limão.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={5000}>
                        <div className="bg-laranja w-100">
                            <div className="container mx-auto py-5">
                                <div className="row p-5">
                                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                        <img src="/pratos/2.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex flex-column justify-content-evenly">
                                        <div className="pilar w-100">
                                            <div className="receitas sego h2 m-0">
                                                Receitas Spice
                                            </div>
                                            Feijoada
                                        </div>
                                        <p className="text-bege px-3 px-md-5">
                                            A feijoada é um dos pratos mais emblemáticos da culinária brasileira, conhecida por seu sabor intenso e acolhedor. Preparada com feijão preto, carnes defumadas e salgadas, como linguiça e costelinha, a feijoada ganha camadas de aroma com alho, cebola, pimentas e folhas de louro. Finalizada com cheiro-verde fresco, é tradicionalmente servida com arroz branco, couve refogada, farofa e fatias de laranja para equilibrar a riqueza do prato.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={5000}>
                        <div className="bg-laranja w-100">
                            <div className="container mx-auto py-5">
                                <div className="row p-5">
                                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                        <img src="/pratos/4.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex flex-column justify-content-evenly">
                                        <div className="pilar w-100">
                                            <div className="receitas sego h2 m-0">
                                                Receitas Spice
                                            </div>
                                            Curry de frango
                                        </div>
                                        <p className="text-bege px-3 px-md-5">
                                            O curry de frango é um prato rico em aromas e sabores, típico da culinária do sul asiático. Com pedaços de frango cozidos lentamente em um molho espesso à base de leite de coco, tomate e uma mistura de especiarias como curry, cúrcuma, gengibre e coentro, o prato é uma explosão de calor e profundidade. Servido geralmente com arroz branco ou naan, é uma refeição reconfortante e intensamente saborosa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={5000}>
                        <div className="bg-laranja w-100">
                            <div className="container mx-auto py-5">
                                <div className="row p-5">
                                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                        <img src="/pratos/3.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex flex-column justify-content-evenly">
                                        <div className="pilar w-100">
                                            <div className="receitas sego h2 m-0">
                                                Receitas Spice
                                            </div>
                                            Frango grelhado com lemon pepper
                                        </div>
                                        <p className="text-bege px-3 px-md-5">
                                            O frango grelhado com lemon pepper é uma receita simples, mas cheia de personalidade. As raspas de limão combinadas com a picância sutil da pimenta-do-reino criam uma crosta aromática irresistível na carne. Marinada com alho e páprica, a preparação garante suculência e sabor fresco, sendo ideal para refeições leves e versáteis, acompanhada de saladas ou legumes salteados.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={5000}>
                        <div className="bg-laranja w-100">
                            <div className="container mx-auto py-5">
                                <div className="row p-5">
                                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                        <img src="/pratos/5.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex flex-column justify-content-evenly">
                                        <div className="pilar w-100">
                                            <div className="receitas sego h2 m-0">
                                                Receitas Spice
                                            </div>
                                            Churrasco com chimi churry
                                        </div>
                                        <p className="text-bege px-3 px-md-5">
                                            O churrasco com chimi churry traz a alma do assado argentino para a mesa. Cortes de carne grelhados lentamente são servidos com essa mistura rústica de ervas secas, alho, vinagre e especiarias, resultando em um molho vibrante que eleva o sabor defumado das carnes. Ideal para encontros ao ar livre, o chimi churry oferece um contraste delicioso entre acidez, frescor e calor das especiarias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}