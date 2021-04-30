import React from 'react'

const Form = (props) => {
  return (
    <form action={props.onSubmit}>
      <label>
        <input type="text" onChange={props.onFullNameChange} placeholder="Full Name"/>
      </label>
      <label>
        <input type="text" onChange={props.onEmailChange} placeholder="Email addres"/>
      </label>
      <label>
        <input type="text" onChange={props.onContactChange} placeholder="Contact number"/>
      </label>
      <label>
        <input type="text" onChange={props.onSubjectChange} placeholder="Subject"/>
      </label>
      <label>
        <input type="text" onChange={props.onDescriptionChange} placeholder="Description"/>
      </label>
      <input type="submit" value="send a message"/>
    </form>
  )
}

export default Form
