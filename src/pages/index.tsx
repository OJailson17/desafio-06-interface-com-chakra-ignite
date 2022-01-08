import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Slide } from '../components/Slide/Slide';
import { TravelType } from '../components/TravelType';

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: '1fr 1fr',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(5, 1fr)',
  });

  return (
    <>
      <Banner />

      <Grid justify='center' mt={['14', '20']}>
        <Grid
          gap={['10', '20']}
          templateColumns={isWideVersion}
          m='0 auto'
          w='80%'
        >
          <TravelType src='/assets/Nightlife.svg' title='Vida Noturna' />
          <TravelType src='/assets/Beach.svg' title='Praia' />
          <TravelType src='/assets/Modern.svg' title='Moderno' />
          <TravelType src='/assets/Classic.svg' title='Clássico' />
          <TravelType src='/assets/More.svg' title='e mais...' />
        </Grid>
      </Grid>

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

      <Flex
        direction='column'
        justify='center'
        align='center'
        m='0 auto'
        mb={12}
        w='80%'
      >
        <Heading fontSize={['28', '36']} fontWeight='medium'>
          Vamos nessa?
        </Heading>
        <Heading fontSize={['28', '36']} fontWeight='medium' textAlign='center'>
          Então escolha seu continente
        </Heading>
      </Flex>

      <Slide />
    </>
  );
};

export default Home;
