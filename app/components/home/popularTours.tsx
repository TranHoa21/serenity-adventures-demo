'use client';
import React, { useRef, useState } from 'react';
import "@/app/styles/home/popularTours.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';


const Popular = () => {
    return (

        <div className="home">
            <h1> POPULAR TOURS</h1>
            <h6> Most Popular Packages </h6>
            <div className="tour">
                <div className="item col-sm-3">
                    <div className="box1">
                        <h6 className="title">7 days tour in Rwanda</h6>
                        <Link href='/tour/7-days-tour-in-rwanda' className="more">
                            Read more
                        </Link>
                    </div>
                </div>
                <div className="item col-sm-3">
                    <div className="box2">
                        <h6 className="title">8 days Gorilla tour in Rwanda</h6>
                        <Link href='/tour/8-days-gorilla-tour-in-rwanda' className="more">
                            Read more
                        </Link>
                    </div>                </div>
                <div className="item col-sm-3">
                    <div className="box3">
                        <h6 className="title">14 days: Safari-Primate Tours in Rwanda</h6>
                        <Link href='/tour/14-days-safari-primate-tours-in-rwanda' className="more">
                            Read more
                        </Link>
                    </div>

                </div>

            </div>
            <div className="tu2">
                <div className="item col-sm-3">
                    <div className="box4">
                        <h6 className="title">6 Days: Rwanda-Uganda Safari & Gorilla trekking</h6>
                        <Link href='/tour/6-days-rwanda-uganda-safari-gorilla-trekking' className="more">
                            Read more
                        </Link>
                    </div>
                </div>
                <div className="item col-sm-3">
                    <div className="box5">
                        <h6 className="title">6 Days Educational tour in Rwanda</h6>
                        <Link href='/tour/6-days-educational-tour-in-rwanda' className="more">
                            Read more
                        </Link>
                    </div>
                </div>
                <div className="item col-sm-3">
                    <div className="box6">
                        <h6 className="title">20 Days East Africa-Congo Safari</h6>
                        <Link href='/tour/20-days-east-africa-congo-safari' className="more">
                            Read more
                        </Link>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Popular;