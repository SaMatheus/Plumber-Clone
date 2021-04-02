import styles from '../styles/components/RouteDescription.module.css'

const RoutDescription = ({children}) => {
  return (
    <section className={styles.routeDescriptionContainer}>
       <span/>
       <div className={styles.routeDescriptionContent}>
         {children}
       </div>
     </section>
  )
}

export default RoutDescription
