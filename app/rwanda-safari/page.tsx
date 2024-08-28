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
                const filteredTours = response.data.filter(tour => tour.places_name === "Rwanda Safari");
                setTours(filteredTours);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
            });
    }, []);
    return (
        <>
            <Head>
                <title>Rwanda Safari Tours | Cultural Experiences & Gorilla Trekking with Serenity Adventure Safaris</title>
                <meta name="description" content="Explore Rwanda's rich cultural heritage and wildlife with Serenity Adventure Safaris. Enjoy immersive cultural tours, thrilling gorilla trekking, and unforgettable wildlife safaris. Book now to experience the best of Rwanda!" />
            </Head>
            <h1>Rwanda Safari</h1>
            <div className='rwanda-gorilla-container'>
                <div className='rwanda-gorilla row'>
                    <div className='col-md-5 col-sm-10'>
                        <h3><strong>Rwanda Cultural Tours by Serenity Adventure Safaris;</strong></h3>
                        <p>Experience the rich cultural heritage of Rwanda with tailor-made cultural tours to explore the heart of Africa. Serenity Adventure Safaris offers immersive cultural experiences in Rwanda, showcasing the vibrant traditions, history, and daily lives of the Rwandan people. Our tours include visits to local communities, traditional dance performances, and interactions with artisans and storytellers. We ensure that travelers gain a profound understanding of Rwanda's culture by engaging with its people in the most authentic settings.</p>
                        <h3><strong>Booking a Cultural Tour Experience</strong></h3>
                        <p>A cultural tour in Rwanda with Serenity Adventure Safaris offers a unique opportunity to connect with the essence of Rwandan life. Our tours are designed to be informative and interactive, giving travelers a chance to participate in traditional crafts, taste local cuisine, and learn about the country's history and customs from those who live it every day. We recommend booking your cultural tour at least 3 months in advance to ensure availability and the best possible experience. Explore the beauty and depth of Rwanda's culture with us and create memories that will last a lifetime.</p>
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
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920547/learn_nodejs/jid7ksiriaot4r3i2tre.jpg" />
                            </SwiperSlide>
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920675/learn_nodejs/w3t1shmlmzxzn5h6yf8n.jpg" /></SwiperSlide>
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920910/learn_nodejs/hahjlriptmzwq2rvugit.jpg" /></SwiperSlide>
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920983/learn_nodejs/bjac8uilfmtzhhph8kbp.png" /></SwiperSlide>
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920743/learn_nodejs/hsp3ki5rk4ihu6yidszr.jpg" /></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="safari">
                <h2 className="safari-title">Rwanda Safari in Rwanda</h2>
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
