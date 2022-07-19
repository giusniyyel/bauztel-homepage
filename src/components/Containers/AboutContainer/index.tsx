import {
  MedalIcon,
  PeopleIcon,
  PlaneIcon,
  SaveIcon,
  StoreIcon,
} from '#data/Logos'
import OurTechnology from '#components/Sections/OurTechnology'
import styles from './AboutContainer.module.scss'
import Image from 'next/image'

const AboutContainer = () => {
  return (
    <>
      <section className={styles.main_container}>
        <div className={styles.text_box}>
          <span className={styles.subtitle_above}>Nosotros</span>
          <h1>
            <em>Dedicados</em> a la calidad
          </h1>
          <div className={styles.horizontal_divider}>{/* Divider */}</div>
          <div className={styles.wrap_container}>
            <p className={styles.main_content}>
              Nos encanta la calidad, por esa razón parte de nuestra misión es
              producir y transformar los granos de café con altos estándares de
              calidad y seguridad.
              <br /> <br />
              Como empresa nos esforzamos por formar relaciones de trabajo
              saludables basadas en confianza y el respeto.
            </p>
          </div>
        </div>
        <div className={styles.image_box}>
          <Image
            className={styles.img}
            src='/about.jpg'
            width={650}
            height={520}
            objectFit='cover'
            layout='intrinsic'
            alt='Café hecho con amor'
          />
          <h4>Café hecho con amor</h4>
        </div>
      </section>
      <section className={styles.mission_container}>
        <span className={styles.subtitle_above}>Nuestra misión</span>
        <h2 className={styles.heading}>Un café exquisito para tu cuerpo</h2>
        <div className={styles.vertical_divider}>{/* Divider */}</div>
        <div className={styles.mission_description}>
          <p>
            Nos comprometemos con nuestros clientes a ofrecer un producto con
            aroma y sabor exquisito que les permita saborear y compartir una
            bebida intensa que active su energía corporal y obtenga los
            beneficios que el café proporciona a través de nuestra marca.
          </p>
        </div>
      </section>
      <OurTechnology />
      <section className={styles.values}>
        <h2 className={styles.Heading}>Nuestra Ventaja Competitiva</h2>
        <div className={styles.values_container}>
          <div
            className={styles.values_item}
            style={{ backgroundColor: '#f6f6f7' }}
          >
            <div className={styles.values_icon}>
              <MedalIcon />
            </div>
            <p>Calidad a precio justo</p>
          </div>
          <div
            className={styles.values_item}
            style={{ backgroundColor: '#e2ddd9' }}
          >
            <div className={styles.values_icon}>
              <PeopleIcon />
            </div>
            <p>Sin intermediarios</p>
          </div>
          <div className={styles.values_item}>
            <div className={styles.values_icon}>
              <SaveIcon />
            </div>
            <p>Normas estrictas de calidad al producir</p>
          </div>
          <div
            className={styles.values_item}
            style={{ backgroundColor: '#f6f6f7' }}
          >
            <div className={styles.values_icon}>
              <StoreIcon />
            </div>
            <p>Instalaciones abiertas al cliente</p>
          </div>
          <div
            className={styles.values_item}
            style={{ backgroundColor: '#edeeed' }}
          >
            <div className={styles.values_icon}>
              <PlaneIcon />
            </div>
            <p>Envío gratis al mayoreo en el sureste</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutContainer
