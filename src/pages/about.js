// STYLES
import styles from '../styles/pages/About.module.css'

// DATA
import pointsData from '../data/pointsData'

// COMPONENT
import Header from '../components/Header'
import CommercialService from '../components/CommercialService'
import Team from '../components/Team'
import Wrapper from '../components/Wrapper'

const About = () => {
  return (
    <div>
     <Header />
     <section className={styles.aboutUsContainer}>
       <span/>
       <div className={styles.aboutUsContent}>
         <h1>About Us</h1>
         <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book
         </p>
       </div>
     </section>
     <section className={styles.pointsCompanyContainer}>
       <div className={styles.pointsCompanyText}>
         <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
         </p>
         <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic 
         </p>
         <p>
          typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more 
          recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
         </p>
       </div>
       <div className={styles.pointsCompanyGrid}>
        {pointsData.map(service => {
          return (
            <div className={styles.pointService}>
              <img src="/icons/about/2-pointscompany/point_icon.svg" alt=""/>
              <div>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          )
        })}
       </div>
     </section>
     <CommercialService />
     <Team />
     <Wrapper />
    </div>
  )
}

export default About
