import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Slide } from '../components/Slide/Slide';
import { TravelType } from '../components/TravelType';

const Home: NextPage = () => {
  return (
    <>
      <Banner />

      <Flex justify='center' mt={20}>
        <HStack spacing={24} w='80%'>
          <TravelType src='/assets/Nightlife.svg' title='Vida Noturna' />
          <TravelType src='/assets/Beach.svg' title='Praia' />
          <TravelType src='/assets/Modern.svg' title='Moderno' />
          <TravelType src='/assets/Classic.svg' title='Clássico' />
          <TravelType src='/assets/More.svg' title='e mais...' />
        </HStack>
      </Flex>

      <Divider
        orientation='horizontal'
        type='solid'
        w='90px'
        h='2px'
        bg='gray.500'
        m='0 auto'
        mt={20}
        mb={12}
      />

      <Flex direction='column' justify='center' align='center' mb={12}>
        <Heading fontSize={36} fontWeight='medium'>
          Vamos nessa?
        </Heading>
        <Heading fontSize={36} fontWeight='medium'>
          Então escolha seu continente
        </Heading>
      </Flex>

      <Slide />
    </>
  );
};

export default Home;
