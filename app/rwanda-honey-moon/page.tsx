'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import "@/app/styles/rwanda/safari.scss";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "@/app/styles/home/slider1.scss";
import Head from 'next/head';
require('dotenv').config();

interface Tour {
    id: number;
    image: string;
    title: string;
    places_name: string;
    link: string;
    // Thêm các thuộc tính khác của tour nếu cần
}


const RwandaHoneyMoon = () => {
    const [tours, setTours] = useState<Tour[]>([]);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        axios.get<Tour[]>(`${apiUrl}/tour`) // Thêm kiểu dữ liệu cho response.data
            .then(response => {
                // Lọc các tour có places_id là 1
                const filteredTours = response.data.filter(tour => tour.places_name === "Rwanda Honey Moon");
                setTours(filteredTours);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
            });
    }, []);
    return (
        <>
            <Head>
                <title>Rwanda Honeymoon | Romantic Primate Safaris with Serenity Adventure Safaris</title>
                <meta name="description" content="Celebrate your love with a romantic honeymoon in Rwanda. Experience intimate primate safaris with Serenity Adventure Safaris, featuring encounters with mountain gorillas, golden monkeys, and more in Rwanda's lush forests. Book your unforgettable adventure today!" />
            </Head>
            <h1>Rwanda Honey Moon</h1>
            <div className='rwanda-gorilla-container'>
                <div className='rwanda-gorilla row'>
                    <div className='col-md-5 col-sm-10'>
                        <h3><strong>Rwanda Honey Moon by Serenity Adventure Safaris;</strong></h3>
                        <p>Embark on an extraordinary adventure with Serenity Adventure Safaris through our exclusive Rwanda Primate Tours. These tours offer a once-in-a-lifetime opportunity to observe and interact with Rwanda's incredible primate species, including the endangered mountain gorillas, golden monkeys, and chimpanzees. Explore the dense forests of Volcanoes National Park, Nyungwe Forest National Park, and Gishwati-Mukura National Park, where these fascinating creatures reside. Our tours are designed to provide intimate and respectful encounters with primates, guided by experienced trackers and naturalists.</p>
                        <h3><strong>Booking a Primate Tour Experience</strong></h3>
                        <p>Booking a primate tour in Rwanda with Serenity Adventure Safaris guarantees an immersive and unforgettable experience. Our tours include guided treks to observe primates in their natural habitats, offering a unique chance to learn about their behaviors, social structures, and conservation efforts. To ensure availability and the best possible experience, we recommend booking your primate tour at least 6 months in advance. Join us to explore the lush forests of Rwanda and witness the captivating world of primates, creating memories that will last a lifetime.</p>
                    </div>
                    <div className='col-md-5 col-sm-10 silder'>
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
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920420/learn_nodejs/vginztnjv84d82pfhljz.jpg" />
                            </SwiperSlide>
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718919918/learn_nodejs/d0tdwkagyhfxpzzabfop.jpg" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="safari">
                <h2 className="safari-title">Rwanda Wildlife Tours</h2>
                <p className="safari-content">At Serenity Adventure Safaris, We organize the best tailor-made gorilla safaris and gorilla tours in Rwanda, Uganda, and Congo plus a variety of other wildlife safaris & experiences in Africa.  Tracking gorillas in the Volcanoes National Park in Rwanda is the most popular activity and a memorable experience everyone can have. Book with us for a tailor-made itinerary for gorilla tracking today.</p>
                <div className="row">
                    {tours.map((tour) => (
                        <div className="col-sm-4 " key={tour.id}>
                            <Link href={`/tour/${tour.link}`} >
                                <div className="rwanda-safari">
                                    <img className="image" src={tour.image} alt={tour.title} />
                                    <h6 className="title">{tour.title}</h6>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
            <div className='faqs-about-container'>
                <div className='faqs-about row'>
                    <div className='col-md-7 col-sm-10 faqs-about-item'>
                        <h2>FAQs About Gorilla Trekking</h2>
                        <h4>When is the best time to Track Mountain Gorillas?</h4>
                        <p>Mountain gorillas in Rwanda are tracked in Volcanoes National park in Northeast of Rwanda. Gorilla Trekking is done a year through.</p>
                        <p><strong>Low season:</strong> this season is known for heavy rains in months of March, October & November.</p>
                        <p><strong>High season:</strong> during the dry seasons of June, July, August, September, and part of October and December plus February. Here is less rainfall or no rains at all & the conditions are good and favorable for Gorilla tracking. High demand for the Gorilla permits ($1500 in Rwanda & $600 in Uganda).</p>
                        <h4><strong>How many days should I book for my Gorilla Tracking Tour</strong></h4>
                        <p>At least plan and put aside about 3 days travel plan of which Day 1-travelling to the park, Day2 -do Gorilla tracking that day, and probably Day 3- departing back. – See – 3 Days Uganda Gorilla trekking Safari</p>
                        <h4><strong>Should I hire a porter for my Gorilla Tracking?</strong></h4>
                        <p>Hiring a porter relieves your Gorilla Tracking session, helps you carry your bags and this gives you a lot of focus and concentration on the endangered Gorillas and you meanwhile move freely with no hardships, can take hold of your hand through the risker parts in the forest because these grounds at times tend to be muddy slippery to pass through. This will cost you $10-$15.</p>
                        <h4><strong>Am I Guaranteed to see the Gorillas?</strong></h4>
                        <p>As much as you could have a Gorilla tracking permit, it doesn’t mean you will see these gentle giants but will at least have a 95% chance to.</p>
                    </div>
                    <div className='col-md-4 col-sm-5 faqs-about-item'>
                        <h2>Quick Contact</h2>
                        <p><strong>Contact us to book gorilla trekking tours and wildlife tours to Rwanda, Uganda, and East Africa.</strong></p>
                        <div className='box-input'>
                            <h6>Your Name (required)</h6>
                            <input type='text' className='text-input' />
                        </div>
                        <div className='box-input'>
                            <h6>Your Email (required)</h6>
                            <input type='text' className='text-input' />
                        </div>
                        <div className='box-input'>
                            <h6>Subject</h6>
                            <input type='text' className='text-input' />
                        </div>
                        <div className='box-input'>
                            <h6>Your Message</h6>
                            <textarea className='textarea' />
                        </div>
                        <button className='box-btn' >Send</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RwandaHoneyMoon;
