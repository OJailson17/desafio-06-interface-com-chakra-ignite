import { Flex, Image, Text } from '@chakra-ui/react';

type TravelTypeProps = {
  src: string;
  title: string;
};

export const TravelType = ({ src, title }: TravelTypeProps) => {
  return (
    <Flex direction='column' align='center' justify='center' w='100%'>
      <Image src={src} alt={title} w='85px' h='85px' />
      <Text fontSize='24px' mt={6} fontWeight='semibold' color='gray.500'>
        {title}
      </Text>
    </Flex>
  );
};
