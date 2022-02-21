import { AspectRatio, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

const Content = () => {
  return (
    <>
      <Flex maxWidth="90%" m="0 auto" mt="15px">
        <Image src="/imagens/animado.png" />
        <AspectRatio maxWidth="500px" ratio={1}>
          <iframe title="leoanimado" src="/animacoes/lindoAnimado.mp4" />
        </AspectRatio>
      </Flex>
      <Box maxWidth="500px" alignItems="center" m="100px auto">
        <Text>
          ZOOPIXEL é um metaverso de animais estranhos e divertidos criados em
          pixel art. Nossa equipe tem o intuito de mostrar ao mundo um outro
          lado da vida selvagem (um pouco menos selvagem, talvez?!
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
      <Text mt="60px" fontSize="2rem" textAlign="center">
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
