import { Layout } from '../../components/Layout/Main'

const ContactUsPage = () => (
  <Layout title='Contáctanos - Bauztel'>
    <section>
      <h1>Contáctanos</h1>
      <p>
        En Bauztel Café queremos conocer tus opiniones, comentarios, o el
        interés que tienes sobre nuestros productos.
      </p>
    </section>
    <section>
      <div>
        <p>Escríbenos</p>
        <p>Deja tu mensaje para que podamos contactarte a la brevedad.</p>
        <form id='contact'>
          <div>
            <label>
              Nombre Completo
              <input type='text' name='name' placeholder='Nombre completo' />
            </label>
          </div>
          <div>
            <label>
              Correo Electrónico
              <input
                type='email'
                name='email'
                placeholder='contact@bauztel.com'
              />
            </label>
          </div>
          <div>
            <label>
              Mensaje
              <input
                type='email'
                name='email'
                placeholder='Estoy interesado en conocer acerca de...'
              />
            </label>
          </div>
          <input type='submit' value='Enviar' />
        </form>
      </div>
      <div>
        <div>{/* Mapa o Imagen */}</div>
        <div>
          <p>Síguenos en...</p>
          <div>
            <div>{/* facebook icon */}</div>
            <div>{/* instagram icon */}</div>
            <div>{/* whatsapp icon */}</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactUsPage
