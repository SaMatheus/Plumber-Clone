// STYLES
import styles from '../styles/components/Header.module.css'

// ROUTER
import Link from 'next/link'

function Header() {
  const handleClick = () => {
    alert('Request success, please wait for the contact of our collaborators!')
  }
  return (
    <section className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="icons/home/1-header/logo.svg" alt=""/>
      </div>
      <div className={styles.navBar}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <button onClick={handleClick}>Request a Call Back</button>
      </div>
    </section> 
  )
}

export default Header