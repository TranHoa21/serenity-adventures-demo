import React from 'react';
import Booking from "@/app/tour/booking";
import "@/app/styles/destination/destination.scss"
import address from "@/public/img/placeholder_8750467.png"
import languages from "@/public/img/communication_4041949.png"
import currency from "@/public/img/money_6711523.png"

const Destination = () => {
    return (
        <div className="destination">
            <h1 className="title">Rwanda</h1>
            <div className="row">
                <div className="col-sm-5">
                    <h2>Visit Rwanda</h2>
                    <p>Landlocked Rwanda is characterized by undulating hilly and mountainous terrain, with rainforest on the western heights and heavily-cultivated fields in the valleys below. From the central areas, the land slopes away to the
                        savannahs and marshes of the east. Considered the most densely-populated country in Africa with a predominantly rural population, Rwanda is as well known for its traumatic history, including the 1994 genocide, as for its courageous recovery to become a stable, well-run and united country with a truly inspiring story. Today, it is characterized by revival, recovery and renaissance!</p>
                </div>
                <div className="col-sm-5 box2">
                    <ul className="box3">
                        <li className="item setItem"><img src={address.src} className="icon" />
                            <b>Address: </b>
                            <p>Rwanda</p>
                        </li>
                        <li className="item setItem"><img src={languages.src} className="icon" />
                            <b>Languages spoken: </b>
                            <p>English, Kinyarwanda & Swahili</p>
                        </li>
                        <li className="item"><img src={currency.src} className="icon" />
                            <b>
                                Currency Used: </b>
                            <p>USD & Rwandan francs, Euros</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="Content">
                <h2 className="title">More Information</h2>
                <b>Visas</b>
                <p>Nationals from the East African Community, Democratic Republic of Congo, Canada, South Africa, United States of America, Germany, Mauritius, Great Britain, Sweden, and Hong Kong may visit Rwanda without a visa for a period of up to 90 days. If there is no Rwandan Embassy or Mission in your vicinity, an entry facility can be requested online on http://www.migration.gov.rw This facility can be used to obtain a visa at any official point of entry into Rwanda.</p>
                <b>When Packing</b>
                <p>Do not forget a windbreaker or a light raincoat. When tracking gorillas you will be in a rainforest, so it will more likely than not rain, and you will also need good hiking boots, and a hat. Garden gloves, to avoid stinging nettles, and gators, are recommended. A light sweater for the evenings is recommended. If you swim, bring your swimming costume, the main hotels in Kigali all have swimming pools. If your itinerary includes Lake Kivu at either Kibuye or Gisenyi you will have the opportunity to swim in the lake.</p>
                <b>Voltage</b>
                <p>Voltage is 220V.</p>
                <b>Drinking Water</b>
                <p>It is NOT advisable to drink water from the taps. You will be able to get bottled water wherever you go. Also make sure you carry bottled water on the actual tracks.</p>
                <b>Credit Cards</b>
                <p>The unit of currency is the Rwanda franc. However, the US dollar is the hard currency of preference. Very few places in Rwanda accept either credit cards or traveler’s checks. Only the major hotels in Kigali and Kivu Sun Hotel in Gisenyi plus a few airlines accept them, so make sure you have sufficient cash on you at all times.</p>
                <b>Camera and Film</b>
                <p>Don’t forget your camera and bring loads of film if you’re still using analogue. Also bring plenty of batteries for all your equipment. There is no charge for private filming in the Parks but there is a fee for commercial filming and prior arrangements have to be made.</p>
                <b>Vaccinations</b>
                <p>The only one you need for Rwanda is Yellow Fever. We strongly suggest that you see your doctor at home about malaria precautions.</p>
                <b>Security</b>
                <p>Rwanda is considered the safest travel destination in the region.</p>
                <b>Communication</b>
                <p>Rwanda has an excellent cell phone network covering almost the entire country. International phone calls can be made easily. Appropriate SIM cards for the network are readily available everywhere, even in remote towns, and cell phones can be purchased or rented from major shops in Kigali. Most towns of any size will have several internet cafes and computer centers.</p>
                <b>Umuganda (community work day)</b>
                <p>Every last Saturday of the month, from 08h00 to 12h30, all Rwandans from all walks of life take a break from their everyday chores and come together within the neighborhoods and villages to do communal work together, for the benefit of the whole society. Work often includes general cleaning and other activities like breaking fallow ground for farming, unblocking trenches and roadside drains, sweeping the streets, etc. After work, communities have a short meeting [Inama] to discuss general societal issues and then go back home.
                    <br />
                    The afternoon is free to revert to personal engagements.</p>
                <b>How to get to Rwanda</b>
                <p>Kigali International Airport connects the world to Rwanda with flights to and from: <br />
                    Addis Ababa, Accra, Amsterdam, Arusha, Brazzaville, Brussels, Bujumbura, Dar es Salaam, Doha, Dubai, Entebbe, Istanbul, Johannesburg, Juba, Kilimanjaro, Lagos, Libreville, Mombasa and Nairobi.<br />
                    Rwanda is a polythene-free country. For environmental reasons, plastic bags have been banned, the customary plastic duty-free bags included.
                    Nationals from the East African Community, Democratic Republic of Congo, Canada, South Africa, United States of America, Germany, Mauritius, Great Britain, Sweden, and Hong Kong may visit Rwanda without a visa for a period of up to 90 days.<br />
                    If there is no Rwandan Embassy or Mission in your vicinity, an entry facility can be requested online on http://www.migration.gov.rw This facility can be used to obtain a visa at any official point of entry into Rwanda.
                </p>

            </div>
        </div>
    )

}
export default Destination;