import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type CityProps = {
  imageSrc: string;
  city: string;
  country: string;
  countryFlag: string;
};

export const City = ({ imageSrc, city, country, countryFlag }: CityProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      w={isWideVersion ? '256px' : '80%'}
      h='279px'
      borderRadius='4'
      overflow='hidden'
      m='0 auto'
    >
      <Box w='100%' h='173px' objectFit='contain' border='none'>
        <Image src={imageSrc} alt='cidade' h='100%' w='100%' />
      </Box>

      <Box
        w='100%'
        h='106px'
        border='1px solid rgba(255, 186, 8, .5)'
        borderTop='none'
      >
        <Flex justify='space-between' align='center' w='80%' m='0 auto'>
          <Box mt='4'>
            <Text
              mb='3'
              fontSize='20'
              fontWeight='semibold'
              fontFamily='Barlow'
              color='gray.500'
            >
              {city}
            </Text>
            <Text
              fontSize='16'
              fontWeight='medium'
              fontFamily='Barlow'
              color='gray.400'
            >
              {country}
            </Text>
          </Box>

          <Image src={countryFlag} alt='flag' w='30px' h='30px' />
        </Flex>
      </Box>
    </Box>
  );
};
