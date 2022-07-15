import styles from './FindUs.module.scss'

export const FindUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.map}></div>
      <div className={styles.schedule}>
        <h2>Horario de nuestra cafeteria</h2>
        <div className={styles.content}>
          <Day day='Lunes' hours='9:00AM - 18:00PM' />
          <Day day='Martes' hours='9:00AM - 18:00PM' />
          <Day day='Miercoles' hours='9:00AM - 18:00PM' />
          <Day day='Jueves' hours='9:00AM - 18:00PM' />
          <Day day='Viernes' hours='9:00AM - 18:00PM' />
          <Day day='Sabado' hours='9:00AM - 18:00PM' />
          <Day day='Domingo' hours='9:00AM - 18:00PM' />
        </div>
      </div>
    </section>
  )
}

const Day = ({ day, hours }) => {
  return (
    <div className={styles.day}>
      <p>{day}</p>
      <div>{/* dots */}</div>
      <span>{hours}</span>
    </div>
  )
}

export default FindUs
