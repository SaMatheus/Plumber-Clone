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
        <input type="text" onChange={props.onDescriptionChange} placeholder="Description"/>
      </label>
      <input type="submit" value="send a message"/>
    </form>
  )
}

export default Form
