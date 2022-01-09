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
            <SlideLink>Europa</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/southamerica.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink>América do Sul</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/northamerica.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink>América do Norte</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/asia.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink>Ásia</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/africa.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink>África</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/oceania.png' alt='europa' />
          <Box position='absolute' w='70%'>
            <SlideLink>Oceania</SlideLink>
            <Text fontSize={['14px', '24px']}>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
