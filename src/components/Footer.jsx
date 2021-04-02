// STYLES
import styles from '../styles/components/Footer.module.css'

// ICONS
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

// DATA
import recentPostData from '../data/recentPostData';

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoBox}>
          <img src="/icons/home/11-footer/footer_logo.svg" alt="logomarca"/>
          <p>
            Lore Issue is simply dummy text of the printing and typesetting industry. Lore Issue has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        <div className={styles.footerServicesAndContact}>
          <h1>Our Services</h1>
          <p>Plumber Service</p>
          <p>Bathroom Plumbing Service</p>
          <p>Kitchen Plumbing Service</p>
          <p>Roof Plumbing Service</p>
          <p>Bathroom Plumbing Service</p>
          <p>Kitchen Plumbing Service</p>
        </div>
        <div className={styles.footerServicesAndContact}>
          <h1>Contact </h1>
          <div>
            <p>1800-9938-2839</p>
            <a href="mailto:support@plumberpoint.com" target="_blank">support@plumberpoint.com</a>
          </div>
          <p>A-507 Mandoli<br/>New Delhi, India</p>
          <p>Mon-Sat 9.00-15:00<br/>Sunday CLOSED</p>
        </div>
        <div className={styles.footerRecentPost}>
          <h1>Recent Post</h1>
          {recentPostData.map(post => {
            return(
              <div className={styles.footerPost}>
                <img src={post.img} alt=""/>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.paragraph}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.footerCopy}>
        <p>©Copyright 2020 Techwero Systems.</p>
        <div>
          <a href="#">Term of Services</a>
          <a href="#">Privacy & policy</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
