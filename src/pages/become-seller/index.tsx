import { Layout } from '../../components/Layout/Main'

const BecomeSellerPage = () => (
  <Layout title='Vender café - Bauztel'>
    <section></section>
    <section>
      <form>
        <p>Datos personales</p>
        <label>
          RFC
          <input type='text' name='rfc' placeholder='RFC' aria-label='RFC' />
        </label>
        <label>
          Nombre Completo (Nombres y Apellidos)
          <input
            type='text'
            name='full_name'
            placeholder='Nombre Completo'
            aria-label='Nombre Completo'
          />
        </label>
        <label>
          Correo Electrónico
          <input
            type='email'
            name='email'
            placeholder='example@mail.com'
            aria-label='Correo Electrónico'
          />
        </label>
        <label>
          Teléfono
          <input
            type='phone'
            name='phone'
            placeholder='Teléfono'
            aria-label='Teléfono'
          />
        </label>
        <label>
          Comprobante de Identidad
          <input
            type='file'
            name='identity_proof_file'
            aria-label='Comprobante de Identidad'
          />
        </label>
        <p>Ubicación del negocio</p>
        <label>
          Dirección
          <input
            type='text'
            name='address_line1'
            placeholder='Calle y número'
            aria-label='Calle y número'
          />
        </label>
        <label>
          Ciudad
          <input
            type='text'
            name='city'
            placeholder='Ciudad'
            aria-label='Ciudad'
          />
        </label>
        <label>
          Estado
          <input
            type='text'
            name='state'
            placeholder='Estado'
            aria-label='Estado'
          />
        </label>
        <label>
          Código Postal
          <input
            type='text'
            name='zip_code'
            placeholder='Código Postal'
            aria-label='Código Postal'
          />
        </label>
        <label>
          País
          <input
            type='text'
            name='country'
            placeholder='País'
            aria-label='País'
          />
        </label>
        <label>
          Código Geo+
          <input
            type='text'
            name='geo_plus_code'
            placeholder='Código Geo+'
            aria-label='Código Geo+'
          />
        </label>
        <label>
          Comprobante de Domicilio
          <input
            type='file'
            name='address_proof_file'
            aria-label='Comprobante de Domicilio'
          />
        </label>
        <p>Proyección de ventas</p>
        <label>
          ¿Cuánto quieres vender?
          <input
            type='text'
            name='how_much'
            placeholder='¿Cuánto quieres vender?'
            aria-label='¿Cuánto quieres vender?'
          />
        </label>
        <label>
          ¿Cuándo quieres comenzar a vender?
          <input
            type='date'
            name='when'
            placeholder='¿Cuándo quieres comenzar a vender?'
            aria-label='¿Cuándo quieres comenzar a vender?'
          />
        </label>
        <label>
          ¿Con qué frecuencia quieres vender?
          <input
            type='text'
            name='frequency'
            placeholder='¿Con qué frecuencia?'
            aria-label='¿Con qué frecuencia?'
          />
        </label>
      </form>
    </section>
  </Layout>
)

export default BecomeSellerPage
