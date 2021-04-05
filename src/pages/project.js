// STYLES
import styles from '../styles/pages/Project.module.css'

// COMPONENT
import Header from '../components/Header'
import CommercialService from '../components/CommercialService'
import Wrapper from '../components/Wrapper'

// DATA
import projectData from '../data/projectData'

// HOOKS
import { useContext, useEffect } from 'react';

// CONTEXT
import { UrlContext } from '../context/UrlContext';

const Project = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])
  
  return (
    <div>
      <Header />
      <div className={styles.imageContainer} />
      <section className={styles.projectContainer}>
        <div className={styles.text}>
          <h1>Our Projects</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
          </p>
        </div>
        <div className={styles.grid}>
          {projectData.map(project => {
            return (
              <div className={styles.project}>
                <img src={project.img} alt=""/>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            )
          })}
        </div>
      </section>
      <CommercialService />
      <Wrapper />
    </div>
  )
}

export default Project