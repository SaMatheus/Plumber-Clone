import styles from '../styles/components/RouteDescription.module.css'

const RouteDescription = ({children}) => {
  return (
    <section className={styles.routeDescriptionContainer}>
       <span/>
       <div className={styles.routeDescriptionContent}>
         {children}
       </div>
     </section>
  )
}

export default RouteDescription
