// STYLES
import styles from '../styles/components/News.module.css'

// DATA
import newsData from '../data/newsData'

const News = () => {
  return (
    <section className={styles.newsContainer}>
      <h1>See Our News</h1>
      <div className={styles.newsBox}>
        {newsData.map(news => {
          return (
            <div className={styles.news}>
              <div style={{background: `url(${news.img}) no-repeat center center / cover`}}/>
              <h2>{news.title}</h2>
              <p>{news.paragraph}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default News
