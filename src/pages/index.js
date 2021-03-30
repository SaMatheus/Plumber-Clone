import styles from '../styles/pages/Home.module.css'

// ICONS
import { ImPlay2 } from "react-icons/im";

// COMPONENTS
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.bannerContainer}>
        <div className={styles.bannerLeft}>
          <h1><strong>Call us for any</strong></h1>
          <h1>Plumbing needs</h1>
          <h2>+1800-9938-2839</h2>
          <Button>See all services</Button>
        </div>
        <div className={styles.bannerRight}>
          <img src="icons/banner1.svg" alt=""/>
          <img src="icons/banner2.svg" alt=""/>
        </div>
      </section>
      <section className={styles.servicesContainer}>
        <div className={styles.service}>
          <img src="icons/group-icon1.svg" alt=""/>
          <h1>Residental service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <img src="icons/group-icon2.svg" alt=""/>
          <h1>Commercial Service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <img src="icons/group-icon3.svg" alt=""/>
          <h1>Maintenance</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <div className={styles.videoBox}>
          <div className={styles.videoText}>
            <h1>Welcome to Plumber Company</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
            <Button>Learn More</Button>
          </div>
          <ImPlay2 />
        </div>
      </section>
    </>
   )
}
