'use client'
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import "@/app/styles/rwanda/detail.scss";
import MultiSelectWithDB from "@/app/tour/tour";
import Booking from "@/app/tour/booking"

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
}

const TourDetail = () => {

    const { link } = useParams();

    const [tour, setTour] = useState<Tour | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        if (link) {
            axios.get<Tour>(`https://serenity-adventures-demo.onrender.com/api/v1/tour/${link}`)
                .then(response => {
                    setTour(response.data);
                    setLoading(false);
                    const container = document.getElementById('content-container');
                    if (container) {
                        container.innerHTML = response.data.description;
                    }// Set loading to false after data is fetched
                })
                .catch(error => {
                    console.error('Lỗi khi lấy thông tin tour:', error);
                    setLoading(false); // Set loading to false on error as well
                });
        } else {
            // Handle invalid id or show 404 page
            setLoading(false); // Set loading to false when id is invalid
        }
    }, [link]);

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    if (!tour) {
        return <div>Tour not found!</div>; // Show a message if tour is not available
    }


    return (
        <div>
            <h1 className="h-title">{tour.title}</h1>
            <div className="box-container">
                <div className="row">
                    <div className="content col-sm-7">
                        <img className="img-tour" src={tour.image} alt={tour.title} />
                        <div id="content-container">{tour.description}</div>
                        <div><h4>Expense:<em>{tour.price}$</em> </h4></div>
                    </div>
                    <div className="col-sm-4">
                        <Booking />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TourDetail;
