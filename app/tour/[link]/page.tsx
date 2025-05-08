'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import "@/app/styles/rwanda/detail.scss";
import Booking from "@/app/tour/booking";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import sanitizeHtml from 'sanitize-html';
import Head from 'next/head';
import dotenv from 'dotenv';
dotenv.config();
interface Tour {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    places_id: number;
    createdAt: string;
    updatedAt: string;
    price: string;
    address: string;
    day: string;
    introduce: string;
}

interface TourData {
    id: number;
    title_tour: string;
    name_day: string;
    name_day_title: string;
    schedule: string;
    image_in_day: string;
    name_hotel: string;
    image_hotel: string;
    hotel_introduction: string;
}

const TourDetail = () => {
    const { link } = useParams();
    const [tour, setTour] = useState<Tour | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [tourData, setTourData] = useState<TourData[]>([]);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (link) {
            axios.get<Tour>(`${apiUrl}/tour/${link}`)
                .then(response => {
                    setTour(response.data);
                    return axios.get<TourData[]>(`${apiUrl}/tourdata/${response.data.title}`);
                })
                .then(response => {
                    setTourData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy thông tin tour:', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [link]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!tour) {
        return <div>Tour not found!</div>;
    }

    const sanitizeContent = (content: string) => ({
        __html: sanitizeHtml(content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        })
    });


    return (
        <>
            <Head>
                <title>{tour.title} - Unforgettable Tours in {tour.address} | Serenity Adventure
                </title>
                <meta name="description" content="Discover the best of {tour.address} with our {tour.day}-day {tour.title} package. From breathtaking landscapes to thrilling safari adventures, experience luxury accommodations, gorilla trekking, and more. Book now for a tailored travel experience!" />
            </Head>
            <div className="bd-container">
                <div className="box-container">
                    <img className="img-tour" src={tour.image} alt={tour.title} />
                    <h1 className="h-title">{tour.title}</h1>
                    <div className="row icon">
                        <div className="box-icon">
                            <img className="item-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721643730/home-address_6684596_bqwav3.png" />
                            <p className='item-address'>Location:{tour.address} </p>
                        </div>
                        <div className="box-icon2">
                            <img className="item-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721644014/calendar_9031260_zh22dz.png" />
                            <p className='item-address'>Days:{tour.day} </p>
                        </div>
                        <button className="box-icon3" ><a href="/booking">BOOK NOW</a></button>
                    </div>
                </div>
                <div className="title-container">
                    <div className="row box-title">
                        <div className="col-sm-6 box1" >
                            <h1 className="box-title-title">{tour.title}</h1>
                            <p>Days:{tour.day} | From: ${tour.price}/per person</p>
                            <div className="includes">
                                <div className="includes-item">
                                    <img className="includes-item-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721485969/check-circle_10469098_hvgsjj.png" />
                                    <p className="includes-item-content">Includes accommodations at handpicked best in class hotels and lodges</p>
                                </div>
                                <div className="includes-item">
                                    <img className="includes-item-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721485969/check-circle_10469098_hvgsjj.png" />
                                    <p className="includes-item-content">A range of unique, optional safari activities included at each lodge</p>
                                </div>
                                <div className="includes-item">
                                    <img className="includes-item-img" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721485969/check-circle_10469098_hvgsjj.png" />
                                    <p className="includes-item-content">World class safari destinatians for ultimate game viewing</p>
                                </div>
                            </div>
                            <div className="introduce" dangerouslySetInnerHTML={sanitizeContent(tour.introduce)} />
                            <button className="btn-booknow" ><a href="/booking">BOOK NOW</a></button>
                        </div>
                        <div className="col-sm-4 box2">
                            <img className="profile-sammy" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721641114/Snapinsta.app_285754163_153514230540775_9048466609441552028_n_1080_sgoyor.jpg" />
                            <h4 className="profile-sammy-title"> Talk to a Serenity Adventure Specialist</h4>
                            <h3 className="phonenumber-sammy">+250 736 173 331</h3>
                            <p className="profile-sammy-content">We tailor itineraries to your dates and interests, adjusting hotels, excursions and length as desired.</p>
                            <div className="star-box">
                                <img className="star-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721642136/star_12483780_yhetbz.png" />
                                <img className="star-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721642136/star_12483780_yhetbz.png" />
                                <img className="star-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721642136/star_12483780_yhetbz.png" />
                                <img className="star-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721642136/star_12483780_yhetbz.png" />
                                <img className="star-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721642136/star_12483780_yhetbz.png" />
                            </div>
                            <Link className="testimonials" href="">View testimonials</Link>
                        </div>
                    </div>
                </div>
                <div className="mapday-bg">
                    <img className="image-bg" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721646319/header_images_-_2022-06-22T143720_105_o6nwlh.png" />
                    <h1 className="includes2">INCLUDES</h1>

                </div>
                <div className="includes-container">
                    <div className='row includes-box'>
                        <div className='col-sm-2 includes-item'>
                            <img className='includes-img' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721726646/earth-europa_9585925_fp92mw.png" />
                            <p className='includes-content'>All park fees (the ones included) and driver / guide and boat fees</p>
                        </div>
                        <div className='col-sm-2 includes-item'>
                            <img className='includes-img' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721726646/earth-europa_9585925_fp92mw.png" />
                            <p className='includes-content'>Gorilla permits and golden monkey permit</p>
                        </div>
                        <div className='col-sm-2 includes-item'>
                            <img className='includes-img' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721726646/earth-europa_9585925_fp92mw.png" />
                            <p className='includes-content'>Meals and water</p>
                        </div>
                        <div className='col-sm-2 includes-item'>
                            <img className='includes-img' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721726646/earth-europa_9585925_fp92mw.png" />
                            <p className='includes-content'>Night game drive</p>
                        </div>
                        <div className='col-sm-2 includes-item'>
                            <img className='includes-img' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1721726646/earth-europa_9585925_fp92mw.png" />
                            <p className='includes-content'>All accommodation as per above itinerary and transportation</p>
                        </div>
                    </div>
                    <h6 className='all-itineraries'>All itineraries are fully customizable. We will send you a personalized variation that reflect your interests and travel dates at no extra cost. Call to discuss your travel plans with one of our Specialists who know this region firsthand.</h6>
                    <div className="btn-box"><button className="btn-customize">Customize this trip</button></div>

                </div>
                <div className="itinerary-box">
                    <img className="itinerary-bg" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1712316099/learn_nodejs/ysnl1dt3blk1bhkfkacf.jpg" />
                    <h1 className="itinerary-title">ITINERARY</h1>
                </div>
                <div className="day-title container">
                    <div className="row day-title">
                        {tourData.map((data, index) => (
                            <div key={index} className="col-sm-2 day-title-item">
                                {data.name_day}
                            </div>
                        ))}
                    </div>

                </div>
                {tourData.sort((a, b) => a.id - b.id).map((data, index) => (
                    <div key={index} className="tourdata-container">
                        <h3 className="tourdata-title">{data.name_day_title}</h3>
                        <div className=" row tourdata">
                            <div className="col-sm-8 toudata-data">
                                <img className="image-day" src={data.image_in_day} />
                                <div className="content-data" dangerouslySetInnerHTML={sanitizeContent(data.schedule)} />
                            </div>
                            <div className="col-sm-4 toudata-data">
                                <img className="image-hotel" src={data.image_hotel} />
                                <h6 className="name-hotel"><strong>Accommodation:</strong> {data.name_hotel}</h6>
                                <div className="hotel-data" dangerouslySetInnerHTML={sanitizeContent(data.hotel_introduction)} />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="call-us container">
                    <h1 className="call-us-title">Call us to start planning your trip today</h1>
                    <h5 className="call-us-data">Join us on this transcendent voyage, where every moment is a symphony of sights. This isn't just a safari; it's a transformative experience that will leave you spellbound and inspired. <br /> Are you ready to embark on the adventure of a lifetime?</h5>
                    <h1 className="call-us-phonenumber">+250 736 173 331</h1>
                    <button className="btn-booknow call-us" ><a href="/booking">BOOK NOW</a></button>
                </div>
                <div className="why-travel">
                    <h1 className="why-travel-title">Why travel with Serenity Adventure?</h1>
                    <div className="why-travel-container">
                        <div className="why-travel-box row">
                            <div className="col-sm-3 why-travel-item">
                                <img className="why-travel-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1723654297/a2b9202d0c306ddfbfd884176fd5521a_hplnze.jpg" />
                                <h3 className="why-travel-item-title">Thoughtful travel</h3>
                                <p className="why-travel-item-content">We prioritize environmental protection and take the lead in conservation efforts, reflecting our genuine commitment to sustainability.</p>
                            </div>
                            <div className="col-sm-3 why-travel-item">
                                <img className="why-travel-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1724342666/IMG-20200831-WA0016_fhrhf9.jpg" />
                                <h3 className="why-travel-item-title">Serenity Team</h3>
                                <p className="why-travel-item-content">We have highly qualified team that are ready to give you the most memorable holiday/adventure</p>
                            </div>
                            <div className="col-sm-3 why-travel-item">
                                <img className="why-travel-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1723558568/Filming-in-Akagera-National-Park-e1597587467695-1200x600-750x450-1_ys6dyc.jpg" />
                                <h3 className="why-travel-item-title">Quick Booking</h3>
                                <p className="why-travel-item-content">To book with us is very easy and quick as just simple clicks, we take care of all requests
                                </p>
                            </div>
                            <div className="col-sm-3 why-travel-item">
                                <img className="why-travel-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1723557989/caption_xog7n9.jpg" />
                                <h3 className="why-travel-item-title">Safety</h3>
                                <p className="why-travel-item-content">We ensure high safety and security to all our customers/clients throughout their holiday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourDetail;
