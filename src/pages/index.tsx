import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Flex
      w='100%'
      h={335}
      bgImage="url('/assets/background.png')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='100%'
      position='relative'
      justify='space-around'
      align='center'
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

      <Box mt={24}>
        <Image src='/assets/airplane.svg' alt='airplane' />
      </Box>
    </Flex>
  );
};

export default Home;
