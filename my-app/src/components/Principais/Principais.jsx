"use client";

import "./Principais.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "@/components/Card/Card";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const API_URL = "http://localhost:3001";
const API_URL = "https://spicesoul-production.up.railway.app";

export default function Principais() {
    const [especiarias, setEspeciarias] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        async function fetchEspeciarias() {
            try {
                const response = await axios.get(`${API_URL}/especiarias`);
                setEspeciarias(response.data);
            } catch (error) {
                console.error('Erro ao listar especiarias: ', error.message);
                setEspeciarias([]);
            }
        }

        fetchEspeciarias();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.update();
                swiperRef.current.slideToLoop(0, 0);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="principaisDiv">
            {/* Margens */}
            <div className="bordaDiv">
                <img
                    className="img-fluid imgMargem2 d-none d-md-flex w-100"
                    src="/imagensProjeto/margem1.png"
                    alt="margem desktop"
                />
                <img
                    className="img-fluid imgMargem1 d-flex d-md-none w-100"
                    src="/imagensProjeto/margem2.png"
                    alt="margem mobile"
                />
            </div>

            {/* Carrossel */}
            <div className="carrosselDiv">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    speed={1200}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    spaceBetween={20}
                    centeredSlides={true}
                    observer={true}
                    observeParents={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="p-5"
                >
                    {especiarias.map((item) => (
                        <SwiperSlide key={item.id} className="d-flex justify-content-center">
                            <Card item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Castelo inferior */}
            <div className="row">
                <img
                    className='img-fluid p-0 m-0 w-100'
                    src="/imagensProjeto/castle1.png"
                    alt="castelo"
                />
            </div>
        </div>
    );
}
