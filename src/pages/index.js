import styles from '../styles/pages/Home.module.css'

// ICONS
import { ImPlay2 } from "react-icons/im";

// COMPONENTS
import Button from '../components/Button'
import Header from '../components/Header'

// DATA
import pointsData from '../data/pointsData'
import teamData from '../data/teamData'

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
          <img src="icons/2-banner/banner1.svg" alt=""/>
          <img src="icons/2-banner/banner2.svg" alt=""/>
        </div>
      </section>
      <section className={styles.servicesContainer}>
        <div className={styles.service}>
          <img src="icons/services/first.svg" alt=""/>
          <h1>Residental service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <img src="icons/services/second.svg" alt=""/>
          <h1>Commercial Service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <img src="icons/services/third.svg" alt=""/>
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
            <h1>Welcome to <br/> Plumber Company</h1>
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
      <section className={styles.companyHistoryContainer}>
        <span className={styles.companyHistoryImg}/>
        <div className={styles.companyHistoryText}>
          <h1>Our Company History</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book
          </p>
          <h2>Trust Our Team of Experts</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book
          </p>
        </div>
      </section>
      <section className={styles.plumberPointsContainer}>
        <div className={styles.plumberPointsText}>
          <h1>Plumber Points</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className={styles.plumberPointsTags}>
          {pointsData.map(point => {
            return (
              <div key={point.id} className={styles.point}>
                <img src="/icons/6-plumber_point/point_icon.svg" alt=""/>
                <p>{point.title}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section className={styles.imageContainer}></section>
      <section className={styles.teamContainer}>
        <div className={styles.teamText}>
          <h1>Our Dedicated Team</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className={styles.teamEmployee}>
          {teamData.map(employee => {
            return (
              <div key={employee.id} className={styles.employee}>
                <img src="/icons/8-team/team.png" alt=""/>
                <div className={styles.employeeText}>
                  <p>{employee.name}</p>
                  <strong>{employee.job}</strong>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className={styles.testimonialContainer}>
        <div className={styles.testimonialCarrousel}></div>
      </section>
      <section></section>
    </>
   )
}
