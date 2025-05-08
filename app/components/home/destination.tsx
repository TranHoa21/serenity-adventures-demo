'use client'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import "@/app/styles/home/destination.scss";
import gorilla from "@/public/img/rwanda-gorilla-370x435-1.jpg";
import lions from "@/public/img/tree-lions-370x435-1.jpg";
import kenya from "@/public/img/kenya-370x435-1.jpg";
import tanzania from "@/public/img/tanzania-370x435-1.jpg";
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import user1 from '@/public/img/susan1inphoenix.jpg';
import user2 from '@/public/img/user2.jpg';
import user3 from '@/public/img/user3.jpg';
import user4 from '@/public/img/user4.jpg';
import user5 from '@/public/img/user5.jpg';
import user6 from '@/public/img/user2.jpg';
import user7 from '@/public/img/user7.jpg';
import user8 from '@/public/img/user8.jpg';
import user9 from '@/public/img/user9.jpg';
import user10 from '@/public/img/user10.jpg';
import icon from '@/public/img/tripadvisor_3664912.png';
import star from '@/public/img/star_3794158.png';
import verified from "@/public/img/badge_9797471.png"


const Destination = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const numSlides = 10;
    const [isExpandedArray, setIsExpandedArray] = useState(Array(numSlides).fill(Array(numSlides).fill(false)));
    const toggleText = (slideIndex: number) => {
        setIsExpandedArray((prevArray) => {
            const newArray = prevArray.map((slideArray, i) => {
                if (i === slideIndex) {
                    return slideArray.map((expanded: boolean, j: number) => !expanded);
                } else {
                    return slideArray;
                }
            });
            return newArray;
        });
    };

    return (
        <>
            <div className="des">
                <h1 className="title">
                    Our Popular Destination
                </h1>
                <p>Choose Your Destination</p>
                <div className="im-container">
                    <div className="item col-sm-2">
                        <Link href="/Rwanda">
                            <img className="image" src={gorilla.src} />
                        </Link>
                        <i>Rwanda</i>
                    </div>
                    <div className="item col-sm-2">
                        <Link href="/Uganda">
                            <img className="image" src={lions.src} />
                        </Link>
                        <i>Uganda</i>
                    </div>
                    <div className="item col-sm-2">
                        <Link href="/kenya">
                            <img className="image" src={kenya.src} />
                        </Link>
                        <i>Kenya</i>
                    </div>
                    <div className="item col-sm-2">
                        <Link href="/tanzania">
                            <img className="image" src={tanzania.src} />
                        </Link>
                        <i>Tanzania</i>
                    </div>
                </div>
            </div>
            <div className="sale">
                <div className="ti-review">
                    <h1>Excellent</h1>
                    <div className="ti-icon">
                        <img className="ti-start" src={star.src} />
                        <img className="ti-start" src={star.src} />
                        <img className="ti-start" src={star.src} />
                        <img className="ti-start" src={star.src} />
                        <img className="ti-start" src={star.src} />
                    </div>
                    <h6>Based on 49 reviews
                    </h6>
                    <div className="ti-v">
                        <img className="tripadvisor" src="https://cdn.trustindex.io/assets/platform/Tripadvisor/logo.svg" />
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50} autoplay={false}
                    slidesPerView={isMobile ? 1 : 3}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="slider"
                >
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user1.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Susan</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-08-28</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[0][0] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Safari Sammy did a fine job! <br />
                                        I hired Safari Sammy to take us from Kigali to Volcanoes National Park
                                        for our gorilla treks, and then back to Kigali. Unfortunately, he had an injury, so he could not personally drive us. However, he hired John to do that and John did a great job.
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(0)}>
                                    {isExpandedArray[0][0] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user2.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Jess Ross</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-06-03</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[1][1] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Book with Sammy if you get the chance !
                                        <br />
                                        Our favourite experience with Sammy was visiting a variety of villages throughout our tour and how he taught us about the culture as we went. He welcomed our questions and answered all of them thoroughly. Sammy reads people well and can pick up on things you are or are not interested in, while also challenging you to step out of your comfort zone and enjoy the culture. He was very friendly, knowledgeable, and went above and beyond to ensure we had the best trip. 10/10 would highly recommend Sammy as your guide.
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(1)}>
                                    {isExpandedArray[1][1] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user3.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Jack</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-08-28</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[2][2] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        The Experience of a Lifetime
                                        <br />
                                        The Experience of a Lifetime
                                        Going to Rwanda for six weeks, having Sammy as my guide, is an amazing experience I’ll remember for the rest of my life. I cannot thank Sammy enough for the great service he provided me both as a guide and as a friend while I was there. I truly believe no one can match the quality of service and knowledge of the country Sammy and Serenity Adventure provided me throughout my stay. Whether it was Gorilla Trekking or going on a city tour, Sammy was always excited for the next adventure which made me that much more excited and involved with the activity I was doing, or place I was going. Thank you Serenity and Sammy for the adventure of a life time. 🤙🏻
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(2)}>
                                    {isExpandedArray[2][2] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user4.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Naman G</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-04-05</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[3][3] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Great experience
                                        <br />
                                        All the arrangements made were on point! Really well planned and executed. The drivers were also amazing
                                    </p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user5.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Abhiraj K</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-04-03</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[4][4] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        An extremely smooth and enjoyable experience <br />
                                        An extremely smooth and enjoyable experience
                                        Sammy is a man of his word. Promised an experience of a lifetime and delivered. From airport pick up to safari, he took care of everything end to end. Kudos to his team for being efficient and friendly throughout. They never dropped the ball. Highly recommend trusting him with your safari/tourist requirements. Also, the man is really funny.
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(4)}>
                                    {isExpandedArray[4][4] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user6.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Alexia C</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-04-02</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[5][5] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        overall an excellent experience!
                                        <br />
                                        Sammy organized 2 trips for us. One weekend it was with a large group (about 20) doing a Safari in Akagera, and the second weekend it was 4 of us doing a tour of the Volcanoes National Park area. Both experiences were great, though I personally enjoyed the second one better. Sammy worked hard at getting us a day full of great activities, he knows where to go and what to do as he has a lot of experience organizing trips as a local. He also makes a point of giving you some history and share his knowledge. He is also a great photographer, we have so many great pictures from this trip!
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(5)}>
                                    {isExpandedArray[5][5] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user7.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Shailesh Gurav</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-02-13</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[6][6] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Overall A Pleasurable Experience In The Wild <br />
                                        Overall A Pleasurable Experience In The Wild
                                        Had Been To The Akagera Wildlife Safari & Had A Wonderful Experience With My Fantastic Guide An Friend Sammy & His Team. I Wish Them All The Very Best & Much Succes In Coming Days…..Cheers 😀🍻
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(6)}>
                                    {isExpandedArray[6][6] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user8.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Mehmetfanar
                                        </h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2023-02-13</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[7][7] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Unforgettable memories in Rwanda.

                                        <br />
                                        We were in June 2022 in the beautiful Rwanda. Me and my wife liked it really a lot. 9 days was enough even. We did visit Kigali, Akagera, Nyungwe and Volcanoes National Park. Beside the beauty, wild life and the virginity of the country, our tour guide Safari Sammy made the trip unforgettable. I see a big potential in this country and Safari Sammy. I wish both of them good luck and success. Long live Rwanda.                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(7)}>
                                    {isExpandedArray[7][7] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user9.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Loes H</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2022-12-31</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[8][8] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Amazing Trip through Rwanda
                                        <br />
                                        We took an amazing 11-day trip through Rwanda in June 2022. We put together the trip in consultation with Charlies Travels and a local travel agent. Our aim was to be in nature a lot and visit Rwanda's parks. Normally a trip to Rwanda is quite pricey, but we didn't want a standard trip and therefore opted for budget hotels. The local travel agency, Serenity Adventure Safaris provided the transport, and was also our guide in Akagera. We started off from Kigali. We then visited 3 sites/parks in 11 days: • Akagera National Park • Nyungwe Forest Park • Lake Kivu Each of the parks has its own character. The view from the Akagera Rhino Lodge at Akagera National Park was spectacular, looking across Lake Ihema to Tanzania. The private lodges well looked after and the food fantastic. Good for enjoying and relaxing, In the park, with any luck you can spot lions, hippos, zebras and elephants, and lots of unusual birds, and take a boat trip. In Nyungwe Forest, we stayed at Chimpanzee Lodge, which is a good base for hiking trips ( with a guide ). Here we were surrounded by a green oasis of forest giants. The hiking trails are sometimes tough because of the height differences, and require some training. But the satisfaction afterwards is great. Sometimes Chimpanzee Lodge hosts a cultural evening for its guests with dance and music. Lake Kivu , Kibuye, was also definitely spectacular to visit. The calmness of the lake, in which you can swim without worry, was impressive. The fishermen sailing out in the evening while singing, also very rewarding. A boat-trip to the islands on Lake Kivu is recommended. We then continued our journey independently to Muhanga and Kigali, visiting friends and seeing the highlights in Kigali. Loes Hensing & Partner
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(8)}>
                                    {isExpandedArray[8][8] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <div className="review-header">
                                <img className="avatar" src={user10.src} />
                                <div className="ti-header">
                                    <div className="name">
                                        <h6 className="ti-name">Dhiraj Chauhan</h6>
                                        <img className="ti-icon" src={icon.src} />
                                    </div>
                                    <div className="date">
                                        <p>2022-12-09</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review">
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <img className="i-star" src={star.src} />
                                <div className=" v-container ">
                                    <img className=" c-star" src={verified.src} />
                                    <span className="message " >
                                        Verified
                                    </span>
                                </div>
                            </div>
                            <div className="comment">
                                <div className={`text ${isExpandedArray[9][9] ? 'expanded' : 'collapsed'}`}>
                                    <p>
                                        Amazing Experience !!!
                                        <br />
                                        Hello everyone, I’ve been opting for serenity adventure safaris since I’ve come to Rwanda in 2019 . Sammy is a great person and a very good friend. He’s very swift in understanding your needs and arranges a tour package best suited for your pocket. I recently took my parents to Akagera and we almost saw all the animals including the Lions, the driver was very knowledgeable about the place and he made sure that we can cover as many animals as we can . Overall I have had best experience in terms of time and money and I would recommend it to anyone who’s looking for just pure fun and adventure with no hidden charges and complete satisfaction.
                                    </p>
                                </div>
                                <button className="hide-more" onClick={() => toggleText(9)}>
                                    {isExpandedArray[9][9] ? 'Hide' : 'More'}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>

    )
}
export default Destination;