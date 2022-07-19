import VideoBox from '#components/Utils/VideoBox'
import styles from './OurTechnology.module.scss'

const OurTechnology = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title_container}>
        <h2>Nuestra tecnología</h2>
        <p>Si amas el café ¿Alguna vez te has detenido a pensar de dónde proviene?</p>
      </div>
      <div className={styles.element_container}>
        <VideoBox />
      </div>
    </section>
  )
}

export default OurTechnology
