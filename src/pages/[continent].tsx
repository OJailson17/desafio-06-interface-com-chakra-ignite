import { Flex, Heading } from '@chakra-ui/react';

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
        <Heading color='gray.50' position='absolute' bottom={16} left={36}>
          Europa
        </Heading>
      </Flex>
    </>
  );
}
