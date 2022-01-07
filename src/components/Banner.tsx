import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Banner = () => {
  return (
    <Box
      w='100%'
      h={335}
      bgImage="url('/assets/background.png')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='100vw'
    >
      <Flex
        w='80%'
        m='0 auto'
        justify='space-between'
        align='center'
        position='relative'
      >
        <Box color='gray.50'>
          <Heading fontWeight='medium'>
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize='20px' mt='20px' fontWeight='normal'>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.{' '}
          </Text>
        </Box>

        <Box mt={20}>
          <Image src='/assets/airplane.svg' alt='airplane' />
        </Box>
      </Flex>
    </Box>
  );
};
