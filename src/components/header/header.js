import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex
        padding="0 20px"
        bg="#ffffff"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="90%"
        m="0 auto"
      >
        <Box display="flex">
          <HStack>
            <Text>Home</Text>
            <Text>Blog</Text>
            <Text>NFT's'</Text>
          </HStack>
        </Box>
        <Box display="flex">
          <Text textAlign="center" fontSize="1.8rem" fontWeight="bold">
            ZOOPIXEL
          </Text>
        </Box>

        <Box display="flex">
          <HStack>
            <Text>Face</Text>
            <Text>Ins</Text>
            <Text>Twitter</Text>
          </HStack>
          <Image w='10rem' src="/imagens/OpenSea 1.png" />
        </Box>
      </Flex>
    </>
  );
};
export default Header;
