import React from 'react';
import Booking from "@/app/tour/booking";
import "@/app/styles/booking/book.scss";
import Head from 'next/head';
const BookingNow = () => {
    return (
        <>
            <Head>
                <title>Book Your Adventure with Serenity Adventure Safaris | Easy Online Booking & Secure Payment</title>
                <meta name="description" content="Plan and book your adventure trips with Serenity Adventure Safaris. Choose your tour, select a date, and make secure payments online. Contact us at info@serenityadventure.com or +250 783946650 for more information." />
            </Head>
            <div className="book">
                <Booking />
            </div>
        </>
    )

}
export default BookingNow;