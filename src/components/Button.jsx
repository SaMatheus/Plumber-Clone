import styles from '../styles/components/Button.module.css'

function Button(props) {
  return (
    <button className={styles.buttonStyle} {...props}>{props.children}</button>
  )
}

export default Button