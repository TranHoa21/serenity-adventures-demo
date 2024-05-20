'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import banner1 from "@/public/img/voi.jpg";
import banner2 from "@/public/img/khi-dot.jpg";
import banner3 from "@/public/img/te-giac.jpg";
import banner4 from "@/public/img/thac-nuoc.jpg";
import banner5 from "@/public/img/cau-day.jpg";

import "@/app/styles/home/slider1.scss";


const Slider1 = () => {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img className="banner" src={banner1.src} />
            </SwiperSlide>
            <SwiperSlide><img className="banner" src={banner2.src} /></SwiperSlide>
            <SwiperSlide><img className="banner" src={banner3.src} /></SwiperSlide>
            <SwiperSlide><img className="banner" src={banner4.src} /></SwiperSlide>
            <SwiperSlide><img className="banner" src={banner5.src} /></SwiperSlide>

        </Swiper>
    );
};

export default Slider1;