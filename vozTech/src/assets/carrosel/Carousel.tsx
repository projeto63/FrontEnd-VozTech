import React from 'react';
// instalar o swiper versão 6
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


// Colocando o Navigation e Pagination:
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Aqui estou instalando os Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import './Carousel.css'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Carousel() {

    return (
        <Swiper
            className='swiper-container'
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            
        >
             <div className="swiper-pagination swiper-pagination-clickable" /> {/* Adicione essa div para as bolinhas de navegação */}

            <SwiperSlide className='slide-item'>
                <img src="https://ik.imagekit.io/projetovoztech/imagem.jpg?updatedAt=1685560042090" alt="" width="500px" height="300px" />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://ik.imagekit.io/projetovoztech/Imagem_do_WhatsApp_de_2023-05-31_%C3%A0_s__12.11.14.jpg?updatedAt=1685560042234" alt="" width="500px" height="300px" />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://ik.imagekit.io/projetovoztech/login.jpg?updatedAt=1684763923828" alt="" width="500px" height="300px" />
            </SwiperSlide>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

        </Swiper>

    )
}

export default Carousel;