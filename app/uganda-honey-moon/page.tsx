'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@/app/styles/rwanda/safari.scss";
import Link from 'next/link';
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


const UgandaLuxury = () => {
    const [tours, setTours] = useState<Tour[]>([]);

    useEffect(() => {
        const apiUrl = https://sever-b483.onrender.com/api/v1;
            axios.get<Tour[] > (`${apiUrl}/tour`) // Thêm kiểu dữ liệu cho response.data
                .then(response => {
                    // Lọc các tour có places_id là 1
                    const filteredTours = response.data.filter(tour => tour.places_name === "Uganda Honey Moon");
                    setTours(filteredTours);

                })
                .catch(error => {
                    console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
                });
    }, []);
    return (
        <>
            <Head>
                <title>Uganda Honeymoon - Romantic Safaris & Wildlife Tours</title>
                <meta name="description" content="Plan a romantic honeymoon in Uganda with safaris in Bwindi and Queen Elizabeth National Parks." />
            </Head>
            <h1>Uganda Honey Moon</h1>
            <div className='rwanda-gorilla-container'>
                <div className='rwanda-gorilla row'>
                    <div className='col-md-10 col-sm-10'>
                        <h3 className='rwanda-gorilla-title'><strong>Things To Do When You Visit Uganda For a Honey Moon</strong></h3>
                        <h3 className='rwanda-gorilla-title'><strong>Bwindi Impenetrable National Park Safaris</strong></h3>
                        <p className='rwanda-gorilla-data'>The Bwindi Impenetrable National Park (BINP) is Currently in southwestern Uganda. The park is part of the Bwindi Impenetrable Forest and is located along the Democratic Republic of the Congo (DRC) boundary next to the Virunga National Park and on the edge of the Albertine Rift. Composed of 321 square kilometres (124 sq mi) of the two montane and lowland forest, it is available only on foot. BINP is a United Nations Educational, Scientific and Cultural Organization-designated World Heritage Site. Species diversity is a feature of the park.It provides habitat for 120 species of mammals, 348 species of birds, 220 species of butterflies, 27 species of frogs, chameleons, geckos, and several endangered species. Floristically, the playground is among the most diverse forests in East Africa, with more than plant species, including 163 species of trees and 104 species of ferns. The northern (low elevation) sector has several species of Guineo-Congolian flora, including two endangered species, the brown mahogany and Brazzeia longipedicellata. In the elevated levels of endemisms of the Albertine Rift, the place shares Specifically. The park is a sanctuary for colobus monkeys, chimpanzees, and many birds such as hornbills and turacos. It is notable for the 400 Bwindi gorillas, half of the planet’s population of the endangered mountain gorillas. 14 habituated mountain gorilla groups are open to tourism in several sectors of Buhoma, Ruhijja, Rushaga along with the Nkuringo all under Uganda Wildlife Authority’s management.</p>
                        <h3 className='rwanda-gorilla-title'><strong>Queen Elizabeth National Park Safaris</strong></h3>
                        <div className='box-uganda-container'>
                            <img className='box-uganda-content-image' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718921477/learn_nodejs/nrnycvgi385r5fjsx1sv.jpg" />
                            <div className='box-uganda-content-data'>
                                <p className='rwanda-gorilla-data'>Queen Elizabeth National Park occupies an estimated 1,978 square kilometres (764 sq mi) The park extends from Lake George in the north-east to Lake Edward in the south-west and includes the Kazinga Channel connecting the two lakes. Queen Elizabeth National Park is known for its wildlife, including African buffalo, Ugandan kob, hippopotamus, Nile crocodile, African bush elephant, African leopard, lion, and chimpanzee. It is home to 95 mammal species and over 500 bird species. The area around Ishasha in Rukungiri District is famous for its tree-climbing lions, whose males sport black manes. Poachers killed six elephants in the park in 2015, triggering both anger and frustration within the Ugandan conservation community.</p>
                                <p className='rwanda-gorilla-data'><h3 className='rwanda-gorilla-title'><strong>Queen Elizabeth National Park</strong></h3>together with the adjacent Virunga National Park is a Lion Conservation Unit. The area is considered a potential lion stronghold in Central Africa, if poaching is curbed and prey species recover. The park is also famous for its volcanic features, including volcanic cones and deep craters, many with crater lakes, such as the Katwe craters, from which salt is extracted.Services in the park include a telecenter run by Conservation Through Public Health and the Uganda Wildlife Authority, neighboring the Queen’s Pavilion, park lodges, game and scenic drives, and boat launches</p>
                            </div>
                        </div>
                        <h3 className='rwanda-gorilla-title'><strong>The Murchison Falls National Park</strong></h3>
                        <p className='rwanda-gorilla-data'>The Murchison Falls National Park lies at the northern end of the Albertine Rift Valley, where the bulky Bunyoro escarpment merges into the vast plains of Acholi land. One of Uganda’s oldest conservation areas, it was initially gazetted as a game reserve in 1926 to protect a savanna that Winston Churchill described in 1907 as ‘Kew Gardens and the zoo combined on an unlimited scale’.</p>
                        <div className='box-uganda-container-2'>
                            <img className='box-uganda-content-image' src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1718988795/Murchison_Falls_National_Park-Ug_f21sh8.webp" />
                            <p className='box-uganda-content-data'>The park is bisected by the Victoria Nile which first races down 80km of white-water rapids before plunging 40m over the remnant rift valley wall at Murchison Falls, the centre piece of the park. The Falls drains the last of the river’s energy, transforming it into a broad, placid stream that flows quietly across the rift valley floor for 55km to Lake Albert. This stretch of river provides one of Uganda’s most memorable wildlife spectacles on a Uganda safari. Regular visitors include elephant, giraffe and buffalo while hippopotamus and Nile crocodile are permanent residents.</p>
                        </div>
                        <h3 className='rwanda-gorilla-title'><strong>Chimpanzee Tracking Uganda Safari</strong></h3>
                        <p className='rwanda-gorilla-data'>Chimpanzee tracking is a very fascinating experience. Prepare today and set out to Uganda’s natural jungles as you spend a number of hours tracking these impressive creatures.</p>
                        <p className='rwanda-gorilla-data'>You will be allowed to spend some time as you observe them swing from one tree to another, feed, play about or progress speedily on the ground right in front of you.</p>
                        <p className='rwanda-gorilla-data'>Where to do it from From the Kibale Forest National Park to Budongo Forest, Mgahinga Gorilla National Park, Bwindi Impenetrable, Ngamba Island Chimpanzee sanctuary and Kyambura Gorge; your trip shall be an enormous encounter of these primates.</p>
                        <p className='rwanda-gorilla-data'>When to do it The best time to track chimpanzees is usually during the dry seasons, though some visitors may prefer an adventurous experience during the rainy seasons. The rainy season is usually between March to May and October to mid-December. Dry seasons are usually from mid-December to February and June to August.</p>
                        <p className='rwanda-gorilla-data'>Where to do this Queen Elizabeth National Park Mgahinga Gorilla National Park Bwindi Impenetrable forest Kibale Forest National Park Budongo Forest Reserve.</p>
                    </div>

                </div>
            </div>
            <div className="safari">
                <h2 className="safari-title">Popular Gorilla Tours in Rwanda</h2>
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

export default UgandaLuxury;
