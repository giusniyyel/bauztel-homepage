import { Layout } from '../components/Layout/Main'
import Hero from '#components/Sections/Hero'
import Products from '#components/Sections/Products'
import FindUs from '#components/Sections/FindUs'

const IndexPage = () => (
  <Layout title='Inicio - Bauztel'>
    <section className='container'>
      <Hero />
      <Products />
      <FindUs />
    </section>
  </Layout>
)

export default IndexPage
