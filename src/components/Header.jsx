// STYLES
import styles from '../styles/components/Header.module.css'

// ROUTER
import Link from 'next/link'

// HOOKS
import { useContext } from 'react'

// CONTEXT
import UrlContext from '../context/UrlContext'


function Header() {
  const { url } = useContext(UrlContext)

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
          <li 
            className={
              url === '/' 
              ? `${styles.navBarLink} ${styles.navBarLinkAcitve}` 
              : `${styles.navBarLink}`
            }
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li 
            className={
              url === '/about' 
              ? `${styles.navBarLink} ${styles.navBarLinkAcitve}` 
              : `${styles.navBarLink}`
            }
          >
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li 
            className={
              url === '/services' 
              ? `${styles.navBarLink} ${styles.navBarLinkAcitve}` 
              : `${styles.navBarLink}`
            }
          >
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li 
            className={
              url === '/project' 
              ? `${styles.navBarLink} ${styles.navBarLinkAcitve}` 
              : `${styles.navBarLink}`
            }
          >
            <Link href="/project">
              <a>Project</a>
            </Link>
          </li>
          <li 
            className={
              url === '/blog' 
              ? `${styles.navBarLink} ${styles.navBarLinkAcitve}` 
              : `${styles.navBarLink}`
            }
          >
            <Link href="/blog">
              <a>Blogs</a>
            </Link>
          </li>
          <li 
            className={
              url === '/contact' 
              ? `${styles.navBarLink} ${styles.navBarLinkAcitve}` 
              : `${styles.navBarLink}`
            }
          >
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