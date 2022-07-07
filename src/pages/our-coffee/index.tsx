import { Text, Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Main"
import { Chakra } from "../../../Chakra";

interface IndexProps {
  cookies?: string;
}

const OurCoffeePage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Inicio - Bauztel">
      <Heading as="h1" size="4xl">
        Nuestro Café
      </Heading>
      <Text>Café orgánico 100% Chiapas</Text>
    </Layout>
  </Chakra>
);

export default OurCoffeePage;
export { getServerSideProps } from "../../../Chakra";