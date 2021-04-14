// STYLES
import styles from '../styles/pages/Contact.module.css'

// COMPONENT
import Header from '../components/Header'
import RouteDescription from '../components/RouteDescription'
import Wrapper from '../components/Wrapper'

// FORMIK
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
      <section cassName={styles.formContainer}>
        <h1>Get in touch</h1>
        <Formik
          initialValues = {{fullname: '', email: '', contact: '', subject: '', description: ''}}
          validates = {values => {
            const errors = {}
            // VALIDATION CONDITION:
            // Name
            !values.fullName ? errors.fullName = 'Required' : errors
            // Email
            !values.email 
            ? errors.email = 'Required'
            :!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ? errors.email = 'Invalid email address'
            : errors
            // Contact
            !values.contact ? errors.contact = 'Required' : errors
            // Subject
            !values.subject ? errors.subject = 'Required' : errors
            // Description
            !values.description ? errors.description = 'Required' : errors
          }}
          onSubmit = {(values, {setSubmitting}) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
            }, 400)
          }}
        >
          {({isSubmitting}) => (
            <Form>
              <Field  type="fullName" name="fullName" placeholder="Full Name"/>
              <ErrorMessage name="fullName" component="div"/>
              <Field  type="email" name="email"placeholder="Email" />
              <ErrorMessage name="email" component="div"/>
              <Field  type="contact" name="contact" placeholder="Contact"/>
              <ErrorMessage name="contact" component="div"/>
              <Field  type="subject" name="subject" placeholder="Subject"/>
              <ErrorMessage name="subject" component="div"/>
              <Field  type="description" name="description" placeholder="Description"/>
              <ErrorMessage name="description" component="div"/>
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </section>
      <Wrapper />
    </div>
  )
}

export default Contact