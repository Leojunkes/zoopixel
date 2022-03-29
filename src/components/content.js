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
    <>7
    OI AMADA llllaoi amotelinda kkkkkkkkkkk fui
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
            <Image ml='50px' src="imagens/setaDireita.png" />
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

      <Box maxWidth="500px" alignItems="center" m="200px auto">
        <Text>
          ZOOPIXEL é um metaverso de animais estranhos e divertidos criados em
          pixel art. Nossa equipe tem o intuito de mostrar ao mundo um outro
          lado da vida selvagem (um pouco menos selvagem, talvez?!)
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
      <Text mt="200px" fontSize="2rem" textAlign="center">
        NOSSOS NFT's
      </Text>
      <Flex>
        <Box alignItems="center" m="60px auto">
          <Image
            w="150px"
            src="https://pbs.twimg.com/profile_images/920470127388237824/ENEZQzU2_400x400.jpg"
            borderRadius="8px"
          />
        </Box>
      </Flex>
    </>
  );
};
export default Content;
