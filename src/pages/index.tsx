import { Text, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Main";
import { Chakra } from "../../Chakra";

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Inicio - Bauztel">
      <VStack>
        <Text textStyle="h1" as="h1">
          Bauztel Café
        </Text>
        <Text textStyle="p" as="p">
          Café orgánico 100% Chiapas
        </Text>
      </VStack>
    </Layout>
  </Chakra>
);

export default IndexPage;
export { getServerSideProps } from "../../Chakra";
