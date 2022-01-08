import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export const City = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      w={isWideVersion ? '256px' : '100%'}
      h='279px'
      borderRadius='4'
      overflow='hidden'
    >
      <Box w='100%' h='173px' objectFit='contain' border='none'>
        <Image
          src='https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz'
          alt='cidade'
          h='100%'
          w='100%'
        />
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
              Londres
            </Text>
            <Text
              fontSize='16'
              fontWeight='medium'
              fontFamily='Barlow'
              color='gray.400'
            >
              Reino Unido
            </Text>
          </Box>

          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png'
            alt='flag'
            w='30px'
            h='30px'
          />
        </Flex>
      </Box>
    </Box>
  );
};
