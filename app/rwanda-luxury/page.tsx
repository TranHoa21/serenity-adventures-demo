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
import dotenv from 'dotenv';
dotenv.config();

interface Tour {
    id: number;
    image: string;
    title: string;
    places_name: string;
    link: string;
    // Thêm các thuộc tính khác của tour nếu cần
}


const RwandaLuxury = () => {
    const [tours, setTours] = useState<Tour[]>([]);
    const apiUrl = https://sever-b483.onrender.com/api/v1;

        useEffect(() => {
            axios.get<Tour[]>(`${apiUrl}/tour`) // Thêm kiểu dữ liệu cho response.data
                .then(response => {
                    // Lọc các tour có places_id là 1
                    const filteredTours = response.data.filter(tour => tour.places_name === "Rwanda Luxury");
                    setTours(filteredTours);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
                });
        }, []);
    return (
        <>
            <Head>
                <title>Rwanda Luxury Safaris | Exclusive Wildlife Tours with Serenity Adventure Safaris</title>
                <meta name="description" content="Explore Rwanda's stunning wildlife with luxury safaris by Serenity Adventure Safaris. Enjoy exclusive game drives, nature walks, and boat safaris in Rwanda's diverse ecosystems. Book your unforgettable wildlife experience today!" />
            </Head>
            <h1>Rwanda Luxury</h1>
            <div className='rwanda-gorilla-container'>
                <div className='rwanda-gorilla row'>
                    <div className='col-md-5 col-sm-10'>
                        <h3 className='rwanda-gorilla-title'><strong>Rwanda Luxury by Serenity Adventure Safaris;</strong></h3>
                        <p className='rwanda-gorilla-data'>Discover the extraordinary wildlife of Rwanda with Serenity Adventure Safaris through our expertly crafted Rwanda Wildlife Tours. These tours offer an unforgettable opportunity to explore the country's diverse ecosystems, from the lush rainforests of Nyungwe National Park to the savannah plains of Akagera National Park. Witness majestic wildlife such as lions, elephants, buffaloes, and a variety of bird species in their natural habitats. Our tours are designed to provide intimate encounters with Rwanda's remarkable flora and fauna, guided by experienced wildlife experts.</p>
                        <h3 className='rwanda-gorilla-title'><strong>Booking a Wildlife Tour Experience</strong></h3>
                        <p className='rwanda-gorilla-data'>Booking a wildlife tour in Rwanda with Serenity Adventure Safaris ensures a comprehensive and immersive experience. Our tours are structured to include game drives, guided nature walks, and boat safaris, offering multiple perspectives on Rwanda's wildlife. To maximize your chances of witnessing the diverse species and enjoying a well-organized trip, we recommend booking your wildlife tour at least 6 months in advance. Explore the breathtaking landscapes and wildlife of Rwanda with us, and create lasting memories of one of Africa's most vibrant natural environments.</p>
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
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920000/learn_nodejs/xda73taydbprxtazin7d.jpg" />
                            </SwiperSlide>
                            <SwiperSlide><img className="banner" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718920074/learn_nodejs/sg9vxgzugrhmltenmahj.jpg" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </div>
            <div className="safari">
                <h2 className="safari-title">Rwanda Wildlife Tours</h2>
                <p className="safari-content">At Serenity Adventure Safaris, We organize the best tailor-made gorilla safaris and gorilla tours in Rwanda, Uganda, and Congo plus a variety of other wildlife safaris & experiences in Africa.  Tracking gorillas in the Volcanoes National Park in Rwanda is the most popular activity and a memorable experience everyone can have. Book with us for a tailor-made itinerary for gorilla tracking today.</p>
                <div className="rwanda-safari-box row">
                    {tours.map((tour) => (
                        <div className="col-sm-4 rwanda-safari-item" key={tour.id}>
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
                        <h2 className="faqs-about-item-title">FAQs About Gorilla Trekking</h2>
                        <h4 className="faqs-about-item-h4">When is the best time to Track Mountain Gorillas?</h4>
                        <p className="faqs-about-item-data">Mountain gorillas in Rwanda are tracked in Volcanoes National park in Northeast of Rwanda. Gorilla Trekking is done a year through.</p>
                        <p className="faqs-about-item-data"><strong>Low season:</strong> this season is known for heavy rains in months of March, October & November.</p>
                        <p className="faqs-about-item-data"><strong>High season:</strong> during the dry seasons of June, July, August, September, and part of October and December plus February. Here is less rainfall or no rains at all & the conditions are good and favorable for Gorilla tracking. High demand for the Gorilla permits ($1500 in Rwanda & $600 in Uganda).</p>
                        <h4 className="faqs-about-item-h4"><strong>How many days should I book for my Gorilla Tracking Tour</strong></h4>
                        <p className="faqs-about-item-data">At least plan and put aside about 3 days travel plan of which Day 1-travelling to the park, Day2 -do Gorilla tracking that day, and probably Day 3- departing back. – See – 3 Days Uganda Gorilla trekking Safari</p>
                        <h4 className="faqs-about-item-h4"><strong>Should I hire a porter for my Gorilla Tracking?</strong></h4>
                        <p className="faqs-about-item-data">Hiring a porter relieves your Gorilla Tracking session, helps you carry your bags and this gives you a lot of focus and concentration on the endangered Gorillas and you meanwhile move freely with no hardships, can take hold of your hand through the risker parts in the forest because these grounds at times tend to be muddy slippery to pass through. This will cost you $10-$15.</p>
                        <h4 className="faqs-about-item-h4"><strong>Am I Guaranteed to see the Gorillas?</strong></h4>
                        <p className="faqs-about-item-data">As much as you could have a Gorilla tracking permit, it doesn’t mean you will see these gentle giants but will at least have a 95% chance to.</p>
                    </div>
                    <div className='col-md-4 col-sm-5 faqs-about-item'>
                        <h2 className="faqs-about-item-title">Quick Contact</h2>
                        <p className="faqs-about-item-data"><strong>Contact us to book gorilla trekking tours and wildlife tours to Rwanda, Uganda, and East Africa.</strong></p>
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

export default RwandaLuxury;
