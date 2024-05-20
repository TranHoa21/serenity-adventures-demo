import React from 'react';
import "@/app/styles/aboutUs/style.scss";
import Booking from "@/app/tour/booking";
const AboutUs = () => {
    return (
        <div className="row">
            <h1>About Us</h1>
            <div className="col-sm-8">
                <h2>Explore the Wild World with Serenity Adventures</h2>
                <h3>Introduction</h3>
                <p>Serenity Adventures is a leading travel planning agency specializing in curating unforgettable journeys for those seeking unique and immersive travel experiences. Our dedicated team is committed to crafting exhilarating adventures and cultural explorations that leave a lasting impression. We pride ourselves on creating tailor-made itineraries that cater to individual preferences, ensuring that each trip is personalized to perfection. With Serenity Adventures, you can embark on a remarkable journey and create cherished memories that will stay with you forever.</p>
                <h3>History</h3>
                <p>Serenity Adventures was founded with the mission to create unparalleled travel experiences that stand out from the rest. With the dedication and expertise of our professional team, we have built a brand known for professionalism, flexibility, and personalization. From wilderness adventures to cultural expeditions, Serenity Adventures always leads the way in providing unique and incomparable travel experiences.</p>
                <h3>Services</h3>
                <p>We offer a range of high-quality travel services including:<br />
                    - Trip Organization: Creating customized travel itineraries based on the preferences and needs of our clients.<br />
                    -Professional Tour Guides: Guiding by experienced and passionate tour guides.<br />
                    -24/7 Emergency Support: Ready to assist customers anytime, anywhere.<br />
                </p>
                <h3>Commitment</h3>
                <p>Serenity Adventures is committed to providing customers with the best travel experiences, with safety, flexibility, and professionalism as our top priorities. We are not just a travel company, but also a reliable companion on every journey.</p>
                <h3>Contact</h3>
                <p>Contact us today to start your journey with Serenity Adventures. Explore the wilderness and discover the unique cultures of unique destinations around the world.</p>
            </div>
            <div className="col-sm-4">
                <Booking />
            </div>
        </div>
    )
}

export default AboutUs