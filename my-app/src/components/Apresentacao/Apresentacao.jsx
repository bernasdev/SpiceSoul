import "./Apresentacao.css"
export default function Apresentacao() {
    return (
        <>
            <div className="apresentacaoDiv">
                <div className="textoDiv col-12 col-md-7">
                    <div className="spiceTitulo">
                        <h1 className="sego">Spice & Soul</h1>
                    </div>
                    <div className="descricaoDiv px-5">
                        <p>
                            Bem-vindo à Spice & Soul, um espaço onde aromas, cores e sabores do mundo inteiro se encontram. Aqui, cada tempero conta uma história — de mercados exóticos, tradições milenares e receitas que atravessam gerações.
                        </p>
                        <p>
                            Oferecemos uma curadoria exclusiva de especiarias frescas e selecionadas com rigor: do açafrão iraniano à páprica defumada espanhola, passando pela canela do Ceilão, cominho indiano, cardamomo, pimentas raras e misturas artesanais criadas para despertar sua criatividade na cozinha.
                        </p>
                    </div>
                    <div className="florDiv">
                        <img className="img-fluid imgFlor" src="/imagensProjeto/florLotus.png" alt="logo" />
                    </div>
                </div>
            </div>
        </>
    );
}