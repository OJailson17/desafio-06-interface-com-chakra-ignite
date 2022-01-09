import {
  Divider,
  Flex,
  Grid,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Slide } from '../components/Slide/Slide';
import { TravelType } from '../components/TravelType';

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Banner />

      <Grid justify='center' mt={['14', '20']}>
        <Flex
          justify='space-around'
          align='center'
          direction='row'
          wrap={isWideVersion ? 'nowrap' : 'wrap'}
          m='0 auto'
          w='80%'
        >
          <TravelType
            src='/assets/Nightlife.svg'
            title='Vida Noturna'
            isFirstRow
          />
          <TravelType src='/assets/Beach.svg' title='Praia' isFirstRow />
          <TravelType src='/assets/Modern.svg' title='Moderno' />
          <TravelType src='/assets/Classic.svg' title='Clássico' />
          <TravelType src='/assets/More.svg' title='e mais...' />
        </Flex>
      </Grid>

      <Divider
        orientation='horizontal'
        type='solid'
        w={['60px', '90px']}
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
        <Heading fontSize={['20', '36']} fontWeight='medium'>
          Vamos nessa?
        </Heading>
        <Heading fontSize={['20', '36']} fontWeight='medium' textAlign='center'>
          Então escolha seu continente
        </Heading>
      </Flex>

      <Slide />
    </>
  );
};

export default Home;
