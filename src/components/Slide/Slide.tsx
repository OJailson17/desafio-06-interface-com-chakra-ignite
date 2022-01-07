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
            <Link mb='16px' fontSize='48px'>
              Europa
            </Link>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Link mb='16px' fontSize='48px'>
              América do Sul
            </Link>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Link mb='16px' fontSize='48px'>
              América do Norte
            </Link>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Link mb='16px' fontSize='48px'>
              Ásia
            </Link>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Link mb='16px' fontSize='48px'>
              África
            </Link>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide className={styles['swiper-slide']}>
          <Image src='/assets/europe-image.png' alt='europa' />
          <Box position='absolute'>
            <Link mb='16px' fontSize='48px'>
              Oceania
            </Link>
            <Text fontSize='24px'>O continente mais antigo.</Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
