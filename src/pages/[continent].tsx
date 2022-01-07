import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { BiInfoCircle } from 'react-icons/bi';

export default function Continent() {
  return (
    <>
      <Flex
        w='100%'
        h={500}
        bgImage="url('/assets/england.png')"
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='100vw'
        position='relative'
      >
        <Heading
          color='gray.50'
          fontWeight='semibold'
          fontSize='48px'
          position='absolute'
          bottom={16}
          left={36}
        >
          Europa
        </Heading>
      </Flex>

      <Flex
        align='center'
        w='80%'
        justify='space-between'
        m='0 auto'
        mt='80px'
        mb='80px'
      >
        <Box w='50%' mr='70px'>
          <Text fontSize='24px' textAlign='justify'>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>

        <HStack spacing={10}>
          <Box>
            <Text color='yellow.400' fontSize='48px' fontWeight='semibold'>
              50
            </Text>
            <Text fontSize='24px' fontWeight='semibold'>
              países
            </Text>
          </Box>
          <Box>
            <Text color='yellow.400' fontSize='48px' fontWeight='semibold'>
              60
            </Text>
            <Text fontSize='24px' fontWeight='semibold'>
              línguas
            </Text>
          </Box>
          <Box>
            <Text color='yellow.400' fontSize='48px' fontWeight='semibold'>
              27
            </Text>
            <Text fontSize='24px' fontWeight='semibold'>
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
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
