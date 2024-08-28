'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@/app/styles/rwanda/safari.scss";
import Link from 'next/link';
import "@/app/styles/home/slider1.scss";
import Head from 'next/head';

interface Tour {
    id: number;
    image: string;
    title: string;
    places_name: string;
    link: string;
    // Thêm các thuộc tính khác của tour nếu cần
}


const UgandaSafari = () => {
    const [tours, setTours] = useState<Tour[]>([]);

    useEffect(() => {
        axios.get<Tour[]>('sever-production-702f.up.railway.app/api/v1/tour') // Thêm kiểu dữ liệu cho response.data
            .then(response => {
                // Lọc các tour có places_id là 1
                const filteredTours = response.data.filter(tour => tour.places_name === "Uganda Luxury");
                setTours(filteredTours);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
            });
    }, []);
    return (
        <>
            <Head>
                <title>Uganda Luxury Gorilla Trekking Tours | Serenity Adventure Safaris</title>
                <meta name="description" content="Experience the ultimate luxury gorilla trekking tours in Uganda with Serenity Adventure Safaris. Encounter mountain gorillas in Bwindi and Mgahinga National Parks, and enjoy personalized safari experiences." />
            </Head>
            <h1>Uganda Luxury</h1>
            <div className='rwanda-gorilla-container'>
                <div className='rwanda-gorilla row'>
                    <div className='col-md-10 col-sm-10'>
                        <h3><strong>Uganda luxury by Serenity Adventure Safaris;</strong></h3>
                        <p>Without doubt one of the world’s greatest wildlife experiences is the thrill of a close encounter with the reclusive mountain gorillas in their natural habitat. Uganda has the best chance of viewing these delightful apes with the fact that it boasts two parks where they have been habituated for human visits that is; the Mgahinga Gorilla National Park and Bwindi Impenetrable National Park which harbor over half of the remaining world mountain gorillas.</p>
                        <p>Uganda is undoubtedly home to twelve (12) habituated gorilla groups located in both Mgahinga and Bwindi National Parks, with Mgahinga gifted with one group, that is, the Nyakagezi gorilla family while the remaining groups are spread around Bwindi National Park in 4 different sectors namely; Buhoma which has Mubare, Habinyanja and Rushegura; Ruhijja has Butukura, Oruzogo, and Kyaguriru; Rushaga sector has Nsongi, Mishaya, Kahunjye, and Busingye; and the Nkuringo sector having one gorilla family (Nkuringo). Since eight permits are allocated to track each group daily, 96 Gorilla Tracking permits are guaranteed in Uganda. The time spent tracking gorillas in Uganda depends and varies from half an hour to eight hours depending on the gorilla movements.</p>
                        <p>This activity starts with a briefing at 8am at the park headquarters of any sector you are booked to track, and after the tracking, you set off to the forest with the guide of the rangers who guide you to the spots where the gorillas may be found. You are allowed only one hour in the midst of these great apes so as not to distract their behavioral patterns. The cost of each gorilla permit in Uganda is USD 600 although low season offers are often provided by the Uganda Wildlife Authority, be sure to check with your local Uganda Safari operator for a guide on low season months and their respective prices.</p>
                        <p>Gorilla tracking permits can either be bought directly from the Uganda Wildlife Authority offices in Kampala or through your preferred local tour operator. Gorilla Tracking does not present a serious physical challenge to any reasonably fit adult whatever their age, although the hike in some groups can be tough going.</p>
                        <p>The toughness of the trek varies and the major factor here is luck, specifically how close the gorillas are to the trailhead on the day of the trek. Also how recently it has rained affects conditions underfoot. Important to note is; June to September are the driest months, and March- May and October – December are the wettest months. When to do it: Uganda is suitable to travel to at any time of the year, since it is sunny most of the year with temperatures rarely rising above 29 degrees (84 degrees Fahrenheit). The average annual temperature is about 26 degrees Celsius (78° Fahrenheit).</p>
                        <p>The rainy season is from March till May and October till November. Light rain season falls in November and December. Dry seasons are from December to February and June to September. The best time, the best months of the year would be December to late February and from June to September. Where to do this Mgahinga Gorilla National Park Bwindi Impenetrable forest Bwindi forest National Park</p>
                    </div>

                </div>
            </div>
            <div className="safari">
                <h2 className="safari-title">Popular Gorilla Tours in Rwanda</h2>
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

export default UgandaSafari;
