import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type TravelTypeProps = {
  src: string;
  title: string;
  isFirstRow?: boolean;
};

export const TravelType = ({
  src,
  title,
  isFirstRow = false,
}: TravelTypeProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      align='center'
      justify='center'
      w={isWideVersion ? '100%' : '50%'}
      mt={!isFirstRow && !isWideVersion ? 8 : 0}
    >
      {isWideVersion ? (
        <Image src={src} alt={title} w={['20']} h={20} />
      ) : (
        <Box w='2' h='2' bg='yellow.400' borderRadius='50%' mr='2'></Box>
      )}

      <Text
        fontSize={['18', '20']}
        mt={isWideVersion ? 6 : 0}
        fontWeight='semibold'
        color='gray.500'
        textAlign='center'
      >
        {title}
      </Text>
    </Flex>
  );
};
