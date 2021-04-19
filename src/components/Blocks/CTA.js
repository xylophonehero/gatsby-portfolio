import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

function CTA({ buttonText, pageRef })
{
  return (
    <Link to={`/${pageRef.slug}`}>
      <Button type="submit" color="black" bgGradient="linear(to-b, gray.50, gray.400)" my="4" mx="auto">{buttonText}</Button>
    </Link>
  );
}

export default CTA;