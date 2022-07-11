import styles from './FindUs.module.scss'

export const FindUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.map}></div>
      <div className={styles.schedule}>
        <h2>Schedule</h2>
        <div className={styles.content}>
          <Day day='Lunes' hours='9:00 - 18:00' />
          <Day day='Martes' hours='9:00 - 18:00' />
          <Day day='Miercoles' hours='9:00 - 18:00' />
          <Day day='Jueves' hours='9:00 - 18:00' />
          <Day day='Viernes' hours='9:00 - 18:00' />
          <Day day='Sabado' hours='9:00 - 18:00' />
          <Day day='Domingo' hours='9:00 - 18:00' />
        </div>
      </div>
    </section>
  )
}

const Day = ({ day, hours }) => {
  return (
    <div className={styles.day}>
      <h3>{day}</h3>
      <span>{hours}</span>
    </div>
  )
}

export default FindUs
