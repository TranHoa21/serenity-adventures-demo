'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@/app/styles/rwanda/safari.scss";
import Link from 'next/link';

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
        axios.get<Tour[]>('https://serenity-adventures-demo.onrender.com/api/v1/tour') // Thêm kiểu dữ liệu cho response.data
            .then(response => {
                // Lọc các tour có places_id là 1
                const filteredTours = response.data.filter(tour => tour.places_name === "Uganga luxury");
                setTours(filteredTours);

            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách hướng dẫn:', error);
            });
    }, []);
    return (
        <>
            <h1>Uganda Luxury</h1>
            <div className="safari">
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

        </>
    )
}

export default UgandaLuxury;
