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

function Carousel() {   

    return (

        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            className='swiper-container'
        >
            <SwiperSlide className='slide-item'>
                <Link to='/'>
                <img src="https://ik.imagekit.io/projetovoztech/imagem.jpg?updatedAt=1685560042090" alt="" width="500px" height="300px" />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://ik.imagekit.io/projetovoztech/Imagem_do_WhatsApp_de_2023-05-31_%C3%A0_s__12.11.14.jpg?updatedAt=1685560042234" alt="" width="500px" height="300px" />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://ik.imagekit.io/projetovoztech/login.jpg?updatedAt=1684763923828" alt="" width="500px" height="300px" />
            </SwiperSlide>

        </Swiper>

    )
}

export default Carousel;