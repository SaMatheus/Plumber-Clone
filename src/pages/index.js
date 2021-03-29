import Header from '../components/Header'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.bannerContainer}>
        <div className={styles.bannerLeft}>
          <h1><strong>Call us for any</strong></h1>
          <h1>Plumbing needs</h1>
          <h2>+1800-9938-2839</h2>
          <button>See all services</button>
        </div>
        <div className={styles.bannerRight}>
          <img src="icons/banner1.svg" alt=""/>
          <img src="icons/banner2.svg" alt=""/>
        </div>
      </section>
    </>
   )
}
