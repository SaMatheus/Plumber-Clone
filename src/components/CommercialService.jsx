import styles from '../styles/components/CommercialService.module.css'

const CommercialService = () => {
  return (
    <section className={styles.commercialServiceContainer}>
      <div className={styles.img}></div>
      <div className={styles.content}>
        <div>
          <h1>Commercial Service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book
          </p>
        </div>
      </div>
    </section>
  )
}

export default CommercialService
