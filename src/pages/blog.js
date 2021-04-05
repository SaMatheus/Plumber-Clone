// STYLES
import styles from '../styles/pages/Blog.module.css'

// COMPONENT
import Header from '../components/Header'
import CommercialService from '../components/CommercialService'
import Wrapper from '../components/Wrapper'

// HOOKS
import { useContext, useEffect } from 'react';

// CONTEXT
import { UrlContext } from '../context/UrlContext';

// DATA
import blogData from '../data/blogData'

// ROUTER
import Link from 'next/link';

const Blog = () => {
  const { setUrl } = useContext(UrlContext)

  useEffect(() => {
    setUrl(`${window.location.pathname}`)
  }, [])

  return (
    <div>
      <Header />
      <section className={styles.blogContainer}>
        <div>
          <h1>Our Blogs</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book
          </p>
        </div>
        <img src="/icons/blogs/bg.png" alt=""/>
      </section>
      <section className={styles.blogDescriptionContainer}>
        <img src="/icons/blogs/bg2.png" alt=""/>
        <div className={styles.blogDescriptionRight}>
        <h1>BLog Description</h1>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. 
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. 
          </p>
        </div>
        <Link href='/about'>Learn More</Link>
        </div>
      </section>
      <section className={styles.blogGrid}>
        {blogData.map(item => {
          return (
            <div className={styles.blogPost}>
              <img src={item.img} alt=""/>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <a href={item.href}>Learn More</a>
            </div>
          )
        })}
      </section>
      <CommercialService />
      <Wrapper />
    </div>
  )
}

export default Blog