import { Text, Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout"
import { Chakra } from "../../../Chakra";

interface IndexProps {
  cookies?: string;
}

const ContactUsPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Inicio - Bauztel">
      <Heading as="h1" size="4xl">
        Contáctanos
      </Heading>
      <Text>Café orgánico 100% Chiapas</Text>
    </Layout>
  </Chakra>
);

export default ContactUsPage;
export { getServerSideProps } from "../../../Chakra";