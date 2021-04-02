// STYLE
import styles from '../styles/components/Team.module.css'

// DATA
import teamData from '../data/teamData'

const Team = () => {
  return (
    <section className={styles.teamContainer}>
        <div className={styles.teamText}>
          <h1>Our Dedicated Team</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className={styles.teamEmployee}>
          {teamData.map(employee => {
            return (
              <div key={employee.id} className={styles.employee}>
                <img src="/icons/home/8-team/team.png" alt=""/>
                <div className={styles.employeeText}>
                  <p>{employee.name}</p>
                  <strong>{employee.job}</strong>
                </div>
              </div>
            )
          })}
        </div>
      </section>
  )
}

export default Team
