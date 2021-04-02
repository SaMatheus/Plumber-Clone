// STYLES
import styles from '../styles/pages/Services.module.css'

// COMPONENT
import Header from '../components/Header'
import RouteDescription from '../components/RouteDescription'
import Team from '../components/Team'
import Wrapper from '../components/Wrapper'

// HOOKS
import {useContext, useEffect} from 'react'

// CONTEXT
import { UrlContext } from '../context/UrlContext'

// DATA
import servicesData from '../data/servicesData'

const Services = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])

  return (
    <div>
      <Header/>
      <RouteDescription>
        <h1>Services</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book
        </p>
      </RouteDescription>
      <section className={styles.servicesContainer}>
        <div className={styles.text}>
          <h1>Our Serviecs</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
          </p>
        </div>
        <div className={styles.grid}>
          {servicesData.map(service => {
            return (
              <div className={styles.service}>
                <div>
                  <img src={service.img} alt=""/>
                </div>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>
      <Team />
      <Wrapper />
    </div>
  )
}

export default Services
