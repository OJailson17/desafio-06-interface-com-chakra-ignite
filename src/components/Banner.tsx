import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export const Banner = () => {
  const bgSize = useBreakpointValue({
    base: '100',
    xl: '100vw',
  });

  const WideVersion = useBreakpointValue({
    base: 'none',
    lg: 'block',
  });

  return (
    <Flex
      w='100%'
      h={['250', '335']}
      bgImage="url('/assets/background.png')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize={bgSize}
      justify='center'
    >
      <Flex
        w={['90%', '80%']}
        h='100%'
        m='0 auto'
        justify='space-between'
        align='center'
        position='relative'
      >
        <Box color='gray.50'>
          <Heading fontWeight='medium' fontSize={['20', '36']}>
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize={['14', '20']} mt='20px' fontWeight='normal'>
            Chegou a hora de tirar do papel a viagem que você{' '}
            {WideVersion === 'block' && <br />} sempre sonhou.{' '}
          </Text>
        </Box>

        <Box mt={20} display={WideVersion}>
          <Image src='/assets/airplane.svg' alt='airplane' />
        </Box>
      </Flex>
    </Flex>
  );
};
