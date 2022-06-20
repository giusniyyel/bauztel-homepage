import { Text, Heading, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Chakra } from "../../Chakra";

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Inicio - Bauztel">
      <VStack>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
        <Heading as="h1" size="4xl">
          Bauztel Café
        </Heading>
        <Text>Café orgánico 100% Chiapas</Text>
      </VStack>
    </Layout>
  </Chakra>
);

export default IndexPage;
export { getServerSideProps } from "../../Chakra";
