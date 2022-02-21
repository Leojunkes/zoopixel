import { Box, Flex, HStack, Image, Text, Grid, VStack } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <Grid
        padding="50px 0 50px 0"
        h="100%"
        color="gray.200"
        bg="black"
        templateColumns="repeat(3,1fr)"
      >
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="top"
          alignItems="center"
        >
          <VStack spacing={4}>
            <Text>Contate-nos</Text>
            <Text>filipeflow@gmail.com</Text>
          </VStack>
        </Box>
        <Box
          mt="50px"
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <VStack spacing="100px">
            <Text>ZOOPIXEL</Text>
            <Text>powered by Leo Tech</Text>
          </VStack>
        </Box>
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="top"
          alignItems="center"
        >
          <VStack spacing={4}>
            <Text>Siga-nos</Text>
            <Box display="flex" flexDirection="row">
              <Text>f</Text>
              <Text>I</Text>
              <Text>T</Text>
            </Box>
          </VStack>
        </Box>
      </Grid>
    </>
  );
};
export default Footer;
