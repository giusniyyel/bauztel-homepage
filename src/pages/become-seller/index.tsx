import { Layout } from '../../components/Layout/Main'

const BecomeSellerPage = () => (
  <Layout title='Vender café - Bauztel'>
    <form>
      <div>
        <label>
          Nombre completo
          <input type='text' name='full_name' placeholder='Nombre completo' />
        </label>
      </div>
      <div>
        <label>
          Correo Electrónico
          <input type='email' name='email' placeholder='email@example.com' />
        </label>
      </div>
    </form>
  </Layout>
)

export default BecomeSellerPage
