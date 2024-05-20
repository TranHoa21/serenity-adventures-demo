import Image from "next/image";
import styles from "@/app/styles/home/page.module.scss";
import Slider1 from "@/app/components/home/slider1";
import Intro from "@/app/components/home/introduce";
import Popular from "@/app/components/home/popularTours";
import Chooes from "@/app/components/home/chooseUs";
import Destination from "@/app/components/home/destination";
import Link from "next/link";

export default function Home() {
  return (
    < >
      <div className={styles.homepage}>
        <div className={styles.box1}>
          <div className={styles.item}>
            <h1 className={styles.slogan}>ADVENTURE, TRANQUILITY </h1>
            <h4 className={styles.slc}>Explore the Wild World with Serenity Adventures</h4>
            <p className={styles.content}>"Serenity Adventures is a premier travel planning agency that specializes in curating unforgettable journeys for those seeking unique and immersive travel experiences. Our dedicated team is committed to crafting exhilarating adventures and cultural explorations that leave a lasting impression. We pride ourselves on creating tailor-made itineraries that cater to individual preferences, ensuring that each trip is personalized to perfection. With Serenity Adventures, you can embark on a remarkable journey and create cherished memories that will stay with you forever."
            </p>
            <button className={styles.btn}><Link className={styles.link} href="/about-us">REGISTER NOW</Link></button>
          </div>
          <div className={styles.item2} >
            <Slider1 />
          </div>
        </div>
      </div>
      <div className={styles.design}>
        <Intro />
      </div>
      <Popular />
      <Chooes />
      <Destination />
    </>
  );
}
