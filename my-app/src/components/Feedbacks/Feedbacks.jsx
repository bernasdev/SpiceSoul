"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation"
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import './Feedbacks.css';

export default function Feedbacks() {
    const feedbacks = [
        {
            nome: "Bernardo de Souza",
            imagem: "/feedbacks/bernardo.jpg",
            texto: "Amei cada detalhe — desde o aroma que sai da embalagem até o cuidado com a apresentação. Dá pra sentir que a Spice & Soul coloca alma em tudo o que faz. Já virou meu lugar favorito pra encontrar especiarias de verdade!"
        },
        {
            nome: "Nicoly Carine",
            imagem: "/feedbacks/nicoly.jpg",
            texto: "Além do atendimento atencioso, os produtos têm uma energia diferente... dá pra ver que tudo é feito com propósito. Spice & Soul é mais do que uma loja — é uma experiência sensorial!"
        },
        {
            nome: "Júlia Leonardo",
            imagem: "/feedbacks/julial.jpg",
            texto: "Recebi minha encomenda super rápido e me surpreendi com a qualidade das misturas! Os blends são únicos, cheios de personalidade. Cozinhar ficou ainda mais prazeroso desde que conheci vocês."
        },
        {
            nome: "Júlia Guizzardi",
            imagem: "/feedbacks/juliag.jpg",
            texto: "Achei a proposta da Spice & Soul incrível! Tudo muito bem pensado e com um toque especial. Já indiquei pra todos os meus amigos!"
        },
        {
            nome: "Yasmin Alencar",
            imagem: "/feedbacks/yasmin.jpg",
            texto: "Os sabores são surpreendentes! É nítido o cuidado em cada detalhe, desde a escolha dos ingredientes até o atendimento. Me tornei cliente fiel!"
        },
        {
            nome: "Sophia Costa",
            imagem: "/feedbacks/sophia.jpg",
            texto: "Senti que cada especiaria conta uma história. A experiência de abrir a caixa e sentir os aromas é simplesmente mágica. Parabéns pelo trabalho!"
        },
        {
            nome: "Lídia Nogueira",
            imagem: "/feedbacks/lidia.jpg",
            texto: "A mistura de aromas, sabores e cuidado no atendimento me conquistaram. Spice & Soul virou sinônimo de qualidade aqui em casa!"
        }
    ];

    return (
        <>
            <div className="feedbacksBanner">
                <img src="/imagensProjeto/feedbackbannermobile.png" alt="Baner Feedbacks" className='bannerMobile' />
                <img src="/imagensProjeto/feedbackbannerpc.png" alt="Baner Feedbacks" className="bannerDesktop" />
            </div>
            <div className="padding">
                <Swiper
                    className="custom-swiper px-5"
                    modules={[Navigation, Autoplay]}
                    navigation
                    loop
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={600}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {feedbacks.map((item, index) => (
                        <SwiperSlide key={index} className="d-flex justify-content-center">
                            <FeedbackCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <img src="/imagensProjeto/estrelasbreak.png" alt="Textura de estrelas para quebra de linha" className="img-fluid w-100 py-4" />
        </>
    );
}
