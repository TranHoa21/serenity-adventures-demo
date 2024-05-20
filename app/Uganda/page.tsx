import React from 'react';
import Booking from "@/app/tour/booking";
import "@/app/styles/destination/destination.scss"
import address from "@/public/img/placeholder_8750467.png"
import languages from "@/public/img/communication_4041949.png"
import currency from "@/public/img/money_6711523.png"

const Destination = () => {
    return (
        <div className="destination">
            <h1 className="title">Uganda</h1>
            <div className="row">
                <div className="col-sm-5">
                    <h2>Visit Uganda</h2>
                    <p>
                        Uganda is a landlocked country with Majestic mountains, endless forests, and diverse wildlife life have made a unique beauty of the “green pearl of Africa”. The pristine beauty of Uganda gives visitors a pleasant, comfortable feeling, helping to relieve and re-energize themselves.
                        <br />
                        Hiking with Gorilla through the jungle, wildlife safaris, taking a trip to Griffin Falls Camp, Legendary Nile Rafting and countless other exciting activities await you!
                    </p>
                </div>
                <div className="col-sm-5 box2">
                    <ul className="box3">
                        <li className="item setItem"><img src={address.src} className="icon" />
                            <b>Address: </b>
                            <p>Uganda</p>
                        </li>
                        <li className="item setItem"><img src={languages.src} className="icon" />
                            <b>Languages spoken: </b>
                            <p>English, Kinyarwanda & Swahili</p>
                        </li>
                        <li className="item"><img src={currency.src} className="icon" />
                            <b>
                                Currency Used: </b>
                            <p>USD & Ugandan shillings, Euros</p>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )

}
export default Destination;