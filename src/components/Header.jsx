import styles from '../styles/components/Header.module.css'

function Header() {
  const handleClick = () => {
    alert('Request success, please wait for the contact of our collaborators!')
  }
  return (
    <section className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="icons/1-header/logo.svg" alt=""/>
      </div>
      <div className={styles.navBar}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button onClick={handleClick}>Request a Call Back</button>
      </div>
    </section> 
  )
}

export default Header