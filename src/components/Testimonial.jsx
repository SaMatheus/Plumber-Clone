// STYLES
import styles from '../styles/components/Testimonial.module.css'

// HOOKS
import {useState} from 'react'

// ICONS
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

// DATA
import sliderData from '../data/sliderData';

const Testimonial = () => {
  const [current, setCurrent] = useState(0)
  const length = sliderData.length

  if(!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <section className={styles.testimonialContainer}>
        <img src="/icons/9-slider/1.png" alt=""/>
        <h1>Testimonial</h1>
        <div className={styles.testimonialCarrousel}>
          <BsArrowLeftShort className={styles.leftArrow} onClick={prevSlide}/>
          <BsArrowRightShort className={styles.rightArrow} onClick={nextSlide}/>
          {sliderData.map((slide, index) => (
            <div key={slide.id}
              className={styles.testimonialContent}
            >
              {index === current && (
                <>
                  <p>{slide.paragraph}</p>
                  <strong>{slide.author}</strong>
                </>
              )}
              <div className={styles.carrouselIndex}>
                <span className={current === 0 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}/>
                <span className={current === 1 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}/>
                <span className={current === 2 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}/>
                <span className={current === 3 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}/>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Testimonial
