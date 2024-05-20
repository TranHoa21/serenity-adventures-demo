'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import "@/app/styles/rwanda/safari.scss";
import Link from 'next/link';

interface Tour {
    id: number;
    image: string;
    title: string;
    places_id: number;
    link: string;
    places_name: string;
    // Thêm các thuộc tính khác của tour nếu cần
}


const RwandaSafari = () => {
    const [tours, setTours] = useState<Tour[]>([]);



    useEffect(() => {
        axios.get<Tour[]>('https://serenity-adventures-demo.onrender.com/api/v1/tour')
            .then(response => {
                const filteredTours = response.data.filter(tour => tour.places_name === "Rwanda Safari");
                setTours(filteredTours);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
            });
    }, []);
    return (
        <>
            <h1>Rwanda Safari</h1>
            <div className="safari">
                <div className="row">
                    {tours.map((tour) => (
                        <div className="col-sm-4 " key={tour.id}>
                            <Link href={`/tour/${tour.link}`}>
                                <div className="rwanda-safari">
                                    <img className="image" src={tour.image} alt={tour.title} />
                                    <h6 className="title">{tour.title}</h6>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}

export default RwandaSafari;
