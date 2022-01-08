import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BiInfoCircle } from 'react-icons/bi';
import { City } from '../components/City';

export default function Continent() {
  const cityContainer = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        w='100%'
        h={isWideVersion ? 400 : 300}
        bgImage="url('/assets/england.png')"
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize={isWideVersion ? '100%' : ''}
        position='relative'
      >
        <Flex w='80%' m='0 auto' direction='column' justify='flex-end'>
          <Heading
            color='gray.50'
            fontWeight='semibold'
            fontSize={['36px', '48px']}
            mb={14}
          >
            Europa
          </Heading>
        </Flex>
      </Flex>

      <Flex
        align='center'
        w='80%'
        justify='space-between'
        flexDirection={isWideVersion ? 'row' : 'column'}
        m='0 auto'
        mt='80px'
        mb='80px'
      >
        <Box
          w={isWideVersion ? '50%' : '100%'}
          mr={isWideVersion ? '70px' : ''}
        >
          <Text fontSize={['20px', '24px']} textAlign='justify'>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>

        <HStack spacing={10} mt={isWideVersion ? '' : 7}>
          <Flex alignItems='center' justify='center' direction='column'>
            <Text
              color='yellow.400'
              fontSize={['36px', '48px']}
              fontWeight='semibold'
            >
              50
            </Text>
            <Text fontSize={['18px', '24px']} fontWeight='semibold'>
              países
            </Text>
          </Flex>
          <Flex alignItems='center' justify='center' direction='column'>
            <Text
              color='yellow.400'
              fontSize={['36px', '48px']}
              fontWeight='semibold'
            >
              60
            </Text>
            <Text fontSize={['18px', '24px']} fontWeight='semibold'>
              línguas
            </Text>
          </Flex>
          <Flex alignItems='center' justify='center' direction='column'>
            <Text
              color='yellow.400'
              fontSize={['36px', '48px']}
              fontWeight='semibold'
            >
              27
            </Text>
            <Text
              fontSize={['18px', '24px']}
              fontWeight='semibold'
              textAlign='center'
            >
              cidades +100
              <Tooltip hasArrow label='some info' placement='top'>
                <Box as='span' ml='5px'>
                  <Icon
                    as={BiInfoCircle}
                    fontSize='16px'
                    color='gray.400'
                    fontWeight='bold'
                  />
                </Box>
              </Tooltip>
            </Text>
          </Flex>
        </HStack>
      </Flex>

      {/* Cities */}

      <Box w='80%' m='0 auto'>
        <Heading fontSize={['24', '28', '36']} fontWeight='medium' mb='10'>
          Cidades +100
        </Heading>

        <Grid mb='10' templateColumns={cityContainer} gap='45' align='center'>
          <City />
          <City />
          <City />
          <City />
          <City />
        </Grid>
      </Box>
    </>
  );
}
