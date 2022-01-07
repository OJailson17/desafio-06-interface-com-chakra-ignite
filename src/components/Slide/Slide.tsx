import { Box, Heading, Image, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import continent from './continent.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './slide.module.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

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
          <Box position='absolute'>
            <Heading mb='16px' fontSize='48px'>
              Europa
            </Heading>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Heading mb='16px' fontSize='48px'>
              América do Sul
            </Heading>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Heading mb='16px' fontSize='48px'>
              América do Norte
            </Heading>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Heading mb='16px' fontSize='48px'>
              Ásia
            </Heading>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Heading mb='16px' fontSize='48px'>
              África
            </Heading>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Heading mb='16px' fontSize='48px'>
              Oceania
            </Heading>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
