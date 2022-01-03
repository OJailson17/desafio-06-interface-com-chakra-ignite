import { Flex, Image } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex justify='center' align='center' h={100}>
      <Image src='/assets/logo.svg' alt='logo' />
    </Flex>
  );
};
