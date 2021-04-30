import React from 'react'

// STYLES
import styles from '../styles/components/Form.module.css'

const Form = (props) => {
  return (
    <form action={props.onSubmit} className={styles.formStyle}>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onFullNameChange} placeholder="Full Name"/>
      </label>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onEmailChange} placeholder="Email addres"/>
      </label>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onContactChange} placeholder="Contact number"/>
      </label>
      <label className={styles.labelStyle}>
        <input type="text" onChange={props.onSubjectChange} placeholder="Subject"/>
      </label>
      <label className={styles.labelStyle}>
        <textarea onChange={props.onDescriptionChange} placeholder="Description"></textarea>
      </label>
    </form>
  )
}

export default Form
