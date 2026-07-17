"use client";

import Image from "next/image";
import "./Principais.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card/Card";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const API_URL = "/api";

export default function Principais() {
    const [especiarias, setEspeciarias] = useState([]);

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

    return (
        <div className="principaisDiv">
            {/* Margens */}
            <div className="bordaDiv">
                <Image
                    className="img-fluid imgMargem2 d-none d-md-flex w-100"
                    src="/imagensProjeto/margem1.png"
                    alt="margem desktop"
                    width={1200}
                    height={100}
                />
                <Image
                    className="img-fluid imgMargem1 d-flex d-md-none w-100"
                    src="/imagensProjeto/margem2.png"
                    alt="margem mobile"
                    width={600}
                    height={100}
                />
            </div>

            {/* Carrossel */}
            <div className="carrosselDiv">
                {especiarias.length > 0 && (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        speed={1200}
                        scrollbar={{ draggable: true }}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={20}
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
                )}
            </div>

            {/* Castelo inferior */}
            <div className="row">
                <Image
                    className='img-fluid p-0 m-0 w-100'
                    src="/imagensProjeto/castle1.png"
                    alt="castelo"
                    width={1200}
                    height={200}
                />
            </div>
        </div>
    );
}
