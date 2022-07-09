import styles from './Footer.module.scss'

export const Footer = () => {
  let actualYear = new Date().getFullYear()

  return (
    <>
      <footer>
        <section className={styles.copyright}>
          <p>Copyright &copy; {actualYear} Bauztel Café. Derechos reservados</p>
          <p>Powered by GiusNiyyel</p>
        </section>
      </footer>
    </>
  )
}
