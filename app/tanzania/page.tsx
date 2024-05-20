import React from 'react';
import "@/app/styles/destination/destination.scss"
import address from "@/public/img/placeholder_8750467.png"
import languages from "@/public/img/communication_4041949.png"
import currency from "@/public/img/money_6711523.png"

const Destination = () => {
    return (
        <div className="destination">
            <h1 className="title">Tanzania</h1>
            <div className="row">
                <div className="col-sm-5">
                    <h2>Visit Tanzania</h2>
                    <p>
                        Tanzania is an East African country known for its vast wilderness areas. They include the plains of Serengeti National Park, a safari mecca populated by the “big five” game (elephant, lion, leopard, buffalo, rhino), and Kilimanjaro National Park, home to Africa’s highest mountain. Offshore lie the tropical islands of Zanzibar, with Arabic influences, and Mafia, with a marine park home to whale sharks and coral reefs.
                    </p>
                </div>
                <div className="col-sm-5 box2">
                    <ul className="box3">
                        <li className="item setItem"><img src={address.src} className="icon" />
                            <b>Address: </b>
                            <p>Tanzania</p>
                        </li>
                        <li className="item setItem"><img src={languages.src} className="icon" />
                            <b>Languages spoken: </b>
                            <p>English, Kinyarwanda & Swahili</p>
                        </li>
                        <li className="item"><img src={currency.src} className="icon" />
                            <b>
                                Currency Used: </b>
                            <p>USD & Tanzanian shillings, Euros</p>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )

}
export default Destination;