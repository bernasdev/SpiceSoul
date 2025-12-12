import "./QeA.css";

export default function Qea() {
    return (
        <>
            <img src="/imagensProjeto/luminariasBreak.png" alt="Textura de luminarias para quebra de linha" className="img-fluid w-100"/>
            <div className="container">
                <div className="row d-flex divRow">
                    <div className="col-md-5">
                        <img className="img-fluid" src="/imagensProjeto/qeaImg.png" alt="logo" />
                    </div>
                    <div className="col-md-6 align-items-center">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        1. Quais tipos de especiarias são vendidas?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Na Spice & Soul, oferecemos especiarias que atravessam continentes e séculos. São ervas, sementes, raízes e misturas que carregam histórias e saberes de diferentes culturas. Nosso acervo é vivo: selecionamos especiarias puras e misturas artesanais que respeitam suas origens e despertam novas experiências à mesa. Cada tempero é um convite para viajar pelo mundo através dos sentidos.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        2. Os produtos são naturais?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sim. Acreditamos na força da natureza e no poder dos ingredientes que vêm da terra, do sol e do tempo. Nossas especiarias são naturais, livres de aditivos e tratadas com o respeito que merecem. Trabalhamos com pequenos produtores e processos que preservam a essência de cada ingrediente — porque sabor de verdade não precisa de artificiais.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        3. Vocês fazem envios para todo o Brasil?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sim! Da nossa loja para a sua cozinha, levamos tradição e frescor para todos os cantos do Brasil. Embalamos cada pedido com o cuidado de quem respeita o que está sendo enviado: não é apenas um produto, é cultura, é memória, é afeto em forma de aroma e cor. O frete é calculado na hora da compra de acordo com a sua região.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="true"
                                        aria-controls="collapseFour"
                                    >
                                        4. Como devo armazenar as especiarias em casa?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Especiarias são sensíveis, vivas e preciosas. Para conservá-las bem, guarde-as em potes bem vedados, longe da luz direta, da umidade e de fontes de calor. Um armário fresco e fechado é o abrigo ideal. Assim, você preserva o perfume, o sabor e a história que cada uma carrega por mais tempo.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="true"
                                        aria-controls="collapseFive"
                                    >
                                        5. Como posso sugerir uma nova mistura?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Aqui, tradição e criatividade caminham juntas. Se você tem uma ideia, uma lembrança de infância, um tempero de família ou apenas um palpite curioso, conte pra gente! Criar novas misturas é parte da nossa paixão — e adoramos fazer isso ouvindo quem também acredita que cozinhar é um gesto de alma.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="true"
                                        aria-controls="collapseSix"
                                    >
                                        6. Vocês vendem para restaurantes ou lojas?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSix"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sim, com muito orgulho. Acreditamos que a boa comida começa com bons ingredientes — e ficamos felizes em colaborar com quem leva a cozinha a sério. Se você tem um restaurante, empório, café ou mercado e quer oferecer especiarias que fazem diferença, entre em contato. Nosso atendimento para estabelecimentos é personalizado, porque cada parceria também carrega uma história.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven"
                                        aria-expanded="true"
                                        aria-controls="collapseSeven"
                                    >
                                        7. As especiarias têm validade?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSeven"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingSeven"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sim. Embora muitas especiarias durem bastante tempo, cada uma tem seu próprio ciclo de vida. Em geral, elas permanecem potentes por 12 a 24 meses. Depois disso, não estragam, mas perdem o frescor, a intensidade e o brilho de sua alma. Siga sempre as datas na embalagem e confie também no seu olfato e paladar — eles são os melhores guias.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}