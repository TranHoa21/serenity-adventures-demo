'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import "@/app/styles/blog/allPost.scss";
import love from "@/public/img/heart_833472.png";
import comment from "@/public/img/message_8799976.png"
import dotenv from 'dotenv';
dotenv.config();

interface Post {
    id: number;
    image: string;
    title: string;
    content: string;
    description: string;
    link: string;
    publicationDate: string;
    comment: number;
    like: number;
}

const AllPost = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        axios.get<Post[]>(`${apiUrl}/post`)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách bài viết:', error);
            });
    }, []);

    // Tính chỉ mục bắt đầu và chỉ mục kết thúc của bài post trên trang hiện tại
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Chuyển đến trang trước đó
    const goToPrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    // Chuyển đến trang tiếp theo
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <h1>Blog</h1>

            <div className="blog-container">
                <div className='row'>
                    {currentPosts.map((post) => (
                        <div className="col-sm-4" key={post.id}>
                            <Link href={`/blog/${post.link}`}>
                                <div className="blog">
                                    <img className="image" src={post.image} alt={post.title} />
                                    <h6 className="title">{post.title}</h6>
                                    <p className="description">{post.description.slice(0, 100)}...</p>
                                    <div><img src={comment.src} className="c-icon" /> {post.comment}
                                        <img src={love.src} className="c-icon" /> {post.like}
                                    </div>
                                    <p className='date'>{post.publicationDate}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={goToPrevPage} className="btn-pagi" disabled={currentPage === 1}>Previous</button>
                    <button onClick={goToNextPage} className="btn-pagi" disabled={currentPosts.length < postsPerPage}>Next</button>
                </div>
            </div>
        </>
    );
};

export default AllPost;
