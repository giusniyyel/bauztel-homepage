import {
  Center,
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
import ReCAPTCHA from "react-google-recaptcha";

interface IndexProps {
  cookies?: string;
}

const onSuccessCaptcha= () => {
  console.log("Hubo un cambio");
};

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
            <Heading textAlign="center">Contáctanos</Heading>
            <Text>
              En <b>Bauztel Café</b> queremos conocer tus opiniones,
              comentarios, o el interés que tienes sobre nuestros productos, así
              que te invitamos a dejar tu información para que podamos
              contactarte a la brevedad.
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
                    size="lg"
                    minH={32}
                    resize="none"
                  />
                </FormControl>
                <Center>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onSuccessCaptcha}
                  />
                </Center>
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
          </Stack>
        </Box>
      </VStack>
    </Layout>
  </Chakra>
);

export default ContactUsPage;
export { getServerSideProps } from "../../../Chakra";
