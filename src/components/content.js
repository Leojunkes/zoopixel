import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

const Content = () => {
  return (
    <>
      <Flex
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage="url('/imagens/initialBg.png')"
        w="600"
        h="600"
        maxWidth="90%"
        m="0 auto"
        mt="15px"
      >
        <Flex m="250px auto">
          <Box boxSize="15rem">
            <Image ml="50px" src="imagens/setaDireita.png" />
          </Box>
          <Box cursor="pointer" boxSize="20rem">
            <Image
              transform="scale(0.9)"
              _hover={{ transform: "scale(1)" }}
              w="20rem"
              src="imagens/botãoPassaro.png"
            />
          </Box>
        </Flex>
      </Flex>
      <Box
        fontSize="1.4rem"
        maxWidth="500px"
        alignItems="center"
        m="100px auto"
      >
        <Text fontFamily="Tapestry">
          <Text fontWeight="bold">ZOOPIXEL</Text> é um metaverso de animais
          estranhos e divertidos criados em pixel art. Nossa equipe tem o
          intuito de mostrar ao mundo um outro lado da vida selvagem (um pouco
          menos selvagem, talvez?!)
        </Text>
      </Box>
      <Text fontSize="2rem" textAlign="center">
        EQUIPE
      </Text>
      <Flex mt="60px" alignItems="center" justifyContent="center">
        <HStack textAlign="center" spacing="70px">
          <Box>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/150"
              borderRadius="full"
            />
            <Text>Filipe Junkes</Text>
          </Box>
          <Box>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/150"
              borderRadius="full"
            />
            <Text>Vitória Oliveira</Text>
          </Box>
          <Box>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/150"
              borderRadius="full"
            />
            <Text>Leonardo Junkes</Text>
          </Box>
        </HStack>
      </Flex>
      <Text mt="100px" fontSize="2rem" textAlign="center">
        NOSSOS NFT's
      </Text>
      <Flex>
        <Box display="flex" alignItems="center" m="60px auto">
          <HStack>
            <Image w="150px" src="/imagens/animalLeo.gif" borderRadius="8px" />
            <Image borderRadius="8px" w="150px" src="imagens/lionLeo.gif" />
            <Image borderRadius="8px" w="150px" src="imagens/flower.gif" />
          </HStack>
        </Box>
      </Flex>
    </>
  );
};
export default Content;
