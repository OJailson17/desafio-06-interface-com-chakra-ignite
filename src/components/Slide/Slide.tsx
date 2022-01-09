import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import continent from './continent.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './slide.module.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { SlideLink } from '../SlideLink';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const Slide = () => {
  return (
    <Box className={styles.container}>
      <Swiper
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        navigation={true}
        className={styles.swiper}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink href='/europe'>Europa</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/southamerica.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink href='/south-america'>América do Sul</SlideLink>
            <Text fontSize={['14px', '24px']}>
              O continente mais hospitaleiro.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/northamerica.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink href='north-america'>América do Norte</SlideLink>
            <Text fontSize={['14px', '24px']}>
              O continente com roteiros cinematográficos.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/asia.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink href='/asia'>Ásia</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais exótico.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/africa.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink href='/africa'>África</SlideLink>
            <Text fontSize={['14px', '24px']}>
              Um continente surpreendente e encantador.
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/oceania.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink href='/oceania'>Oceania</SlideLink>
            <Text fontSize={['14px', '24px']}>
              Um continente cheio de metrópoles animadas.
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
