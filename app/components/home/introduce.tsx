'use client'
import React from 'react';
import "@/app/styles/home/intro.scss";
import icon from "@/public/img/itinerary_7883334.png";
import Link from "next/link"
const Intro = () => {
    return (
        <>
            <div className="row">
                <div className="content col-sm-3">
                    <img className="icon" src={icon.src} />
                    <div>
                        <p>
                            Embark on a photo safari, explore diverse ecosystems, and immerse yourself in the stunning natural landscapes of Akagera National Park
                        </p>
                        <button className="btn-m">
                            <Link href='/blog/'>MORE DETAILS</Link>
                        </button>
                    </div>
                </div>
                <div className="content col-sm-3">
                    <img className="icon" src={icon.src} />
                    <div>
                        <p>
                            Join a guided trek to track the endangered Mountain Gorillas in Volcanoes National Park. Marvel at the diverse natural landscapes, including tropical forests, grasslands, and meadows                        </p>
                        <button className="btn-m">
                            <Link href='/blog/'>MORE DETAILS</Link>
                        </button>
                    </div>
                </div>
                <div className="content col-sm-3">
                    <img className="icon" src={icon.src} />
                    <div>
                        <p>
                            Visit the Gisakura Tea Estate and explore Nyungwe National Park, where a variety of rare animal and plant species, including primates and baboons, are conserved                        </p>
                        <button className="btn-m">
                            <Link href='/blog/'>MORE DETAILS</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro