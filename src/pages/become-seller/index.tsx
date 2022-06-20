import { Text, Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout"
import { Chakra } from "../../../Chakra";

interface IndexProps {
  cookies?: string;
}

const BecomeSellerPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Inicio - Bauztel">
      <Heading as="h1" size="4xl">
        Vende Bauztel Café
      </Heading>
      <Text>Café orgánico 100% Chiapas</Text>
    </Layout>
  </Chakra>
);

export default BecomeSellerPage;
export { getServerSideProps } from "../../../Chakra";