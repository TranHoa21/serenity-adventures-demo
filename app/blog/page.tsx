'use client'

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import axios from 'axios';
import "@/app/styles/blog/blog.scss";
import AllPost from "@/app/blog/allPost";
import Link from "next/link";
import dotenv from 'dotenv';
dotenv.config();

interface Post {
    id: number;
    image: string;
    title: string;
    content: string;
    description: string;
    link: string;
}
const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>(`https://sever-b483.onrender.com/api/v1/post`)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách bài viết:', error);
            });
    }, []);
    const latestPosts = posts.slice(0, 4);

    return (
        <div className="blog">
            <div className="new-post">
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
                    {latestPosts.map(post => (
                        <SwiperSlide key={post.id}>
                            <Link href={`/blog/${post.link}`}>
                                <img className='image' src={post.image} alt={post.title} />
                                <div className='background'>
                                    <p>Featured</p>
                                    <h1 className='title'>{post.title}</h1>
                                    <h6>{post.description}</h6>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className="all-post">
                <AllPost />
            </div>
        </div>
    );
}
export default Blog;