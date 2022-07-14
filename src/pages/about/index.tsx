import { Layout } from '../../components/Layout/Main'
import {
  MedalIcon,
  PeopleIcon,
  PlaneIcon,
  SaveIcon,
  StoreIcon,
} from '../../shared/data/Logos'

const AboutUsPage = () => (
  <Layout title='Inicio - Bauztel'>
    <section>
      <div>
        <p>About Us</p>
        <h1>Dedicados a la calidad</h1>
        <div>{/* Divider */}</div>
      </div>
      <div>
        <p>
          Parte de nuestra misión es producir y transformar los granos de café
          con altos estándares de calidad y seguridad.
        </p>
      </div>
    </section>
    <section>
      <div>
        <p>Nuestra misión</p>
        <h2>Un café exquisito para tu cuerpo</h2>
        <div>{/* Divider */}</div>
      </div>
      <div>
        <p>
          Nos comprometemos con nuestros clientes a ofrecer un producto con
          aroma y sabor exquisito que les permita saborear y compartir una
          bebida intensa que active su energía corporal y obtenga los beneficios
          que el café proporciona a través de nuestra marca.
        </p>
      </div>
    </section>
    <section>
      <h1>Nuestro valor</h1>
      <div>
        <p>Exquisito sabor</p>
        <div>{/* Imagen */}</div>
      </div>
      <div>
        <p>Excelente aroma</p>
        <div>{/* Imagen */}</div>
      </div>
      <div>
        <p>Disponible en diversas presentaciones</p>
        <div>{/* Imagen */}</div>
      </div>
      <div>
        <p>Calidad homogénea</p>
        <div>{/* Imagen */}</div>
      </div>
      <div>
        <p>Empaque adecuado</p>
        <div>{/* Imagen */}</div>
      </div>
      <div>
        <p>Natural</p>
        <div>{/* Imagen */}</div>
      </div>
    </section>
    <section>
      <h1>Ventaja competitiva</h1>
      <div>
        <div>
          <MedalIcon />
        </div>
        <p>Calidad a precio justo</p>
      </div>
      <div>
        <div>
          <PeopleIcon />
        </div>
        <p>Sin intermediarios</p>
      </div>
      <div>
        <div>
          <SaveIcon />
        </div>
        <p>Normas estrictas de calidad al producir</p>
      </div>
      <div>
        <div>
          <StoreIcon />
        </div>
        <p>Instalaciones abiertas al cliente</p>
      </div>
      <div>
        <div>
          <PlaneIcon />
        </div>
        <p>Envío gratis al mayoreo en el sureste</p>
      </div>
    </section>
    <section>
      <p>Nuestra tecnología</p>
      <p>Si amas el café ¿No te has preguntado de dónde proviene?</p>
      <div>
      </div>
    </section>
  </Layout>
)

export default AboutUsPage
