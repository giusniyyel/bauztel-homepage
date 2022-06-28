import {
  Heading,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { Hero } from "../../components/Hero";
import { Chakra } from "../../../Chakra";

interface IndexProps {
  cookies?: string;
}

const ContactUsPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Contáctanos - Bauztel">
      <VStack spacing={16}>
        <Hero
          title="¿Cómo podemos ayudarte?"
          subtitle="¡Mandanos un mensaje!"
        />
        <Box
          maxW="container.lg"
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={8}
        >
          <Stack direction={{ base: "column" }} spacing={2} mb={8}>
              <Heading>Contáctanos</Heading>
              <Text>
                En <b>Bauztel Café</b> queremos conocer tus opiniones,
                comentarios, o el interés que tienes sobre nuestros productos,
                así que te invitamos a dejar tu información para que podamos contactarte a
                la brevedad.
              </Text>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <form style={{ width: "100%", maxWidth: "64em" }}>
              <Stack spacing={8}>
                <FormControl>
                  <FormLabel>Nombre Completo</FormLabel>
                  <Input id="full_name" type="text" size="lg" />
                </FormControl>
                <FormControl>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input id="email" type="text" size="lg" />
                </FormControl>
                <FormControl>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    placeholder="Estoy interesado en conocer acerca de..."
                    id="message"
                    size="md"
                    resize="none"
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
              </Stack>
            </form>
            <iframe
              style={{ width: "100%", maxWidth: "64em" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.035164897436!2d-93.0972797!3d16.774926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed275f64ed8311%3A0x4849b474e8b33dfe!2sCircunvalaci%C3%B3n%20238%2C%20Renovaci%C3%B3n%2C%2029010%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1656307304532!5m2!1ses-419!2smx"
            />
          </Stack>
        </Box>
      </VStack>
    </Layout>
  </Chakra>
);

export default ContactUsPage;
export { getServerSideProps } from "../../../Chakra";
