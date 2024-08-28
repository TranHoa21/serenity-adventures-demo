import React from 'react';
import Booking from "@/app/tour/booking";
import "@/app/styles/contact/contact.scss"
import email from "@/public/img/mail_9068642.png";
import phone from "@/public/img/call_3687004.png";
import call from "@/public/img/customer-service_950237.png";
import gmail from "@/public/img/email_11840146.png";
import map from "@/public/img/map_1865269.png";
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Start Planning Your Trip with Serenity Adventure Safaris | Travel Guidance & Booking</title>
                <meta name="description" content="Discover the best travel options and ideas with Serenity Adventure Safaris. Contact our expert travel consultants for personalized guidance and memorable holiday planning. Reach us at info@serenityadventure.com or call +250 783946650." />
            </Head>
            <div className="destination">
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className="title">Start Planning your Trip</h2>
                        <p>Serenity front desk is always ready to help you with the best travel guidance and ideas. There's a fine line between genius and insanity. Our travel consultant and reservation teams are here to erase these lines and give you the best travel options and ideas. Contact us to make your trips and holidays the best and most memorable ones.</p>
                        <div className="row-2">
                            <div className="col-sm-5">
                                <img src={email.src} className="icon-e" />
                                <div className="email">
                                    <h5>Email Address</h5>
                                    <p>info@serenityadventure.com</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <img src={phone.src} className="icon-e" />
                                <div className="email">
                                    <h5>Phone Number</h5>
                                    <p>+250 783946650</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 box2">
                        <Booking />
                    </div>
                </div>
                <div className="row-3">
                    <div className="col-sm-3">
                        <div className="box">
                            <div className="box-image"><img src={call.src} /></div>
                            <div className="box-header">
                                <p>24/7 Service</p>
                                <h5>Call Us On</h5>
                            </div>
                        </div>
                        <div className="box-content">
                            <p>+250 783946650</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <div className="box-image"><img src={gmail.src} /></div>
                            <div className="box-header">
                                <p>Drop A Line</p>
                                <h5>Mail Us</h5>
                            </div>
                        </div>
                        <div className="box-content">
                            <p>info@serenityadventure.com</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <div className="box-image"><img src={map.src} /></div>
                            <div className="box-header">
                                <p>Location</p>
                                <h5>Visit Us On</h5>
                            </div>
                        </div>
                        <div className="box-content">
                            <p>KN 59 St, Kigali, Rwanda</p>
                        </div>
                    </div>

                </div>
                <div className="address-googlemap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d255200.39293637875!2d30.057363!3d-1.950711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5344c2beafd%3A0xb0d26512e57fd8f9!2sSerenity%20Adventure%20Safaris!5e0!3m2!1sen!2sug!4v1713638591364!5m2!1sen!2sug"
                        height="450"
                        style={{ border: '0', width: '100%' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )

}
export default Contact;