import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
} from '../../../shared/data/Logos'
import styles from './ContactContainer.module.scss'

const ContactContainer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Contáctanos</h1>
        <p className={styles.description}>
          En Bauztel Café queremos conocer tus opinion comentarios, o el interés
          que tienes sobre nuestros productos.
        </p>
      </section>
      <section className={styles.formBox}>
        <form className={styles.form} onSubmit={handleSubmit} >
          <h2 className={styles.formTitle}>Escribenos</h2>
          <p className={styles.formDescription}>Deja tu mensaje para que podamos contactarte a la brevedad.
          </p>
          <div className={styles.formGroup}>
            <label htmlFor='name' className={styles.formLabel}>
              Nombre
            </label>
            <input type='text' id='name' placeholder='Nombre completo' className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='email' className={styles.formLabel}>
              Correo electrónico
            </label>
            <input type='email' placeholder='Su direccion de correo electronico' id='email' className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='message' className={styles.formLabel}>
              Mensaje
            </label>
            <textarea
              id='message'
              rows={5}
              className={styles.formInput}
              placeholder='Estoy interesado en conocer acerca de...'
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.formButton}>Enviar</button>
          </div>
        </form>
        <div className={styles.infoBox}>
          <div className={styles.viewBox}></div>
          <div className={styles.socialArea}>
            <h3 className={styles.socialTitle}>Síguenos en...</h3>
            <div className={styles.socialBox}>
              <div className={styles.icon}>
                <WhatsappIcon />
              </div>
              <div className={styles.icon}>
                <FacebookIcon />
              </div>
              <div className={styles.icon}>
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactContainer