import { Link as ChakraLink, Button, Center } from "@chakra-ui/react";

import { Container } from "./Container";

export const CTA = () => (
  <Container flexDirection="row" position="fixed" bottom="0" width="90%" maxWidth="48rem" py={3}>
    <ChakraLink isExternal href="https://t.me/mrspcbr" flexGrow={1} mx={2}>
      <Center>
        Developed by <strong>&nbsp;Spacebar&nbsp;</strong> for Proof Of Memes Community
      </Center>
    </ChakraLink>
  </Container>
);
