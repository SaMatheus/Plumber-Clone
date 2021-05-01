import React from 'react'

// STYLES
import styles from '../styles/components/Form.module.css'

// COMPONENTS
import Button from './Button'

const Form = (props) => {

  const handleClick = () => {
    handleSubmit()
  }

  const handleSubmit = () => {
    alert('Sent successfuly')
  }

  return (
    <form action={props.onSubmit} className={styles.formStyle}>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onFullNameChange} placeholder="Full Name" required/>
      </label>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onEmailChange} placeholder="Email addres" required/>
      </label>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onContactChange} placeholder="Contact number" required/>
      </label>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onSubjectChange} placeholder="Subject" required/>
      </label>
      <label className={styles.labelStyle}>
        <textarea onChange={props.onDescriptionChange} placeholder="Description" required></textarea>
      </label>
      <Button onClick={handleClick}> Send a Message</Button>
    </form>
  )
}

export default Form
