import React from 'react';
import "@/app/styles/home/choose.scss";
import price from "@/public/img/price-tag_8414195.png";
import service from "@/public/img/best-seller_6672492.png";
import scheduling from "@/public/img/operation_11385286.png";
import unique from "@/public/img/briefcase_10736866.png";
import Link from 'next/link';

const Chooes = () => {
    return (
        <div className="w-c">
            <h1>Why choose us for travel?</h1>
            <div className="choo">
                <div className="item col-sm-2">
                    <img className="icon" src={price.src} />
                    <h3>Good price</h3>
                    <h6>Serenity Adventures is committed to providing affordable travel packages that reflect the true value of the travel experience.</h6>
                </div>
                <div className="item col-sm-2">
                    <img className="icon" src={service.src} />
                    <h3>Service quality</h3>
                    <h6>Committed to delivering high-quality travel services to customers, from selecting destinations to organizing trips and serving customers.</h6>                </div>
                <div className="item col-sm-2">
                    <img className="icon" src={scheduling.src} />
                    <h3>Easy scheduling </h3>
                    <h6>Provide a simple and convenient booking process, helping customers save time and effort when planning their trips.</h6>
                </div>
                <div className="item col-sm-2">
                    <img className="icon" src={unique.src} />
                    <h3>Unique travel</h3>
                    <h6>Serenity Adventures not only brings customers to popular destinations but also creates unique and unforgettable travel experiences.</h6>
                </div>
            </div>
            <div className="ctnt">
                <h1>Embark on the ultimate holiday adventure in Rwanda</h1>
                <h5>Welcome to one of the premier travel and tour companies, offering a plethora of unique tours and unforgettable adventures across Rwanda, Uganda, Kenya, and Tanzania. Whether you're craving an exhilarating safari, a cultural immersion, or a breathtaking hike, we've got you covered. Explore our diverse range of experiences and let us turn your travel dreams into reality</h5>
                <Link href="/booking" className="search" >Book Now</Link>
            </div>

        </div>
    )
}
export default Chooes;