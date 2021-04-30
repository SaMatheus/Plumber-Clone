// STYLES
import styles from '../styles/pages/Contact.module.css'

// COMPONENT
import Header from '../components/Header'
import RouteDescription from '../components/RouteDescription'
import Wrapper from '../components/Wrapper'
import Form from '../components/Form';

// HOOKS
import { useContext, useEffect } from 'react';

// CONTEXT
import { UrlContext } from '../context/UrlContext';


const Contact = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])
  
  return (
    <div>
      <Header />
      <RouteDescription>
        <h1>Contact us</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book
        </p>
      </RouteDescription>
      <section className={styles.formContainer}>
        <h1>Get in touch</h1>
        <Form />
      </section>
      <Wrapper />
    </div>
  )
}

export default Contact