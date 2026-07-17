import Image from 'next/image';
import './FeedbackCard.css';

export default function FeedbackCard({ item }) {
    return (
        <div className="feedbackCard d-flex justify-content-center">
            <div className="feedbackBorderWrapper mb-5">
                <div className="feedbackImageWrapper">
                    <Image src={item.imagem} alt={item.nome} fill sizes="250px" className="feedbackImage" />
                </div>
            </div>

            <h2 className="feedbackName">{item.nome}</h2>
            <div className="feedbackLine"></div>
            <p className="feedbackText">"{item.texto}"</p>
        </div>
    );
}