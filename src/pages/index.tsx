import { Layout } from "../components/Layout/Main";
import Hero from '#components/Sections/Hero'
const IndexPage = () => (
    <Layout title="Inicio - Bauztel">
        <section className='container'>
            <main>
                <Hero/>
            </main>

        </section>
    </Layout>
);

export default IndexPage;