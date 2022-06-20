import {
  Heading,
  Flex,
  Center,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { Chakra } from "../../../Chakra";

interface IndexProps {
  cookies?: string;
}

const ContactUsPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Contáctanos - Bauztel">
      <VStack w="100%" maxWidth="full" spacing={16}>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          maxWidth="full"
          bgColor="#F6A702"
        >
          <VStack>
            <Center w="100%" bg="#F6A702" padding="4em">
              <VStack>
                <Heading as="h1" size="2xl">
                  ¿Cómo podemos ayudarte?
                </Heading>
                <Text>¡Mandanos un mensaje!</Text>
              </VStack>
            </Center>
            <Center w="100%"></Center>
          </VStack>
        </Flex>
        <Box
          maxW="container.md"
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={8}
        >
          <form>
            <VStack spacing={8}>
              <FormControl>
                <FormLabel>Nombre Completo</FormLabel>
                <Input id="full_name" type="text" size="md" />
              </FormControl>
              <FormControl>
                <FormLabel>Correo Electronico</FormLabel>
                <Input id="email" type="text" size="md" />
              </FormControl>
              <FormControl>
                <FormLabel>Mensaje</FormLabel>
                <Textarea
                  placeholder="Estoy interesado en conocer acerca de..."
                  id="message"
                  size="md"
                />
              </FormControl>
              <Button
                w="100%"
                backgroundColor="#1E3760"
                colorScheme="facebook"
                size="lg"
              >
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Layout>
  </Chakra>
);

export default ContactUsPage;
export { getServerSideProps } from "../../../Chakra";
