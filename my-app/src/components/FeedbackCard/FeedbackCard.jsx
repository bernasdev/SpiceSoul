import './FeedbackCard.css';

export default function FeedbackCard({ item }) {
    return (
        <div className="feedbackCard d-flex justify-content-center">
            <div className="feedbackBorderWrapper mb-5">
                <div className="feedbackImageWrapper">
                    <img src={item.imagem} alt={item.nome} className="feedbackImage img-fluid" />
                </div>
            </div>

            <h2 className="feedbackName">{item.nome}</h2>
            <div className="feedbackLine"></div>
            <p className="feedbackText">"{item.texto}"</p>
        </div>
    );
}