import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

type SlideLinkProps = {
  children: string;
  href?: string;
};

export const SlideLink = ({ children, href = '/europe' }: SlideLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink mb='16px' fontSize={['24px', '48px']}>
        {children}
      </ChakraLink>
    </Link>
  );
};
