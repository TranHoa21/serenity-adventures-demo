import React from 'react';
import "@/app/styles/destination/destination.scss"
import address from "@/public/img/placeholder_8750467.png"
import languages from "@/public/img/communication_4041949.png"
import currency from "@/public/img/money_6711523.png"
import Head from 'next/head';

const Destination = () => {
    return (
        <>
            <Head>
                <title>Explore Kenya | Discover the Beauty of East Africa</title>
                <meta name="description" content="Explore Kenya, a stunning East African destination known for its diverse landscapes, from the savannahs and Great Rift Valley to the majestic Mount Kilimanjaro. Experience thrilling safaris, rich wildlife, and vibrant cultures." />
            </Head>
            <div className="destination">
                <h1 className="title">Kenya</h1>
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Visit Kenya</h2>
                        <p>
                            Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, Lakelands, the dramatic Great Rift Valley and mountain highlands. It’s also home to wildlife like lions, elephants and rhinos. From Nairobi, the capital, safaris visit the Maasai Mara Reserve, known for its annual wildebeest migrations, and Amboseli National Park, offering views of Tanzania’s 5,895m Mt. Kilimanjaro.
                        </p>
                    </div>
                    <div className="col-sm-5 box2">
                        <ul className="box3">
                            <li className="item setItem"><img src={address.src} className="icon" />
                                <b>Address: </b>
                                <p>Kenya</p>
                            </li>
                            <li className="item setItem"><img src={languages.src} className="icon" />
                                <b>Languages spoken: </b>
                                <p>English, Kinyarwanda & Swahili</p>
                            </li>
                            <li className="item"><img src={currency.src} className="icon" />
                                <b>
                                    Currency Used: </b>
                                <p>USD & Kenyan shillings, Euros</p>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Destination;