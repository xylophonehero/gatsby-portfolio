import { Box, Flex, Text } from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

function Testimonial({ author, jobTitle, testimonial })
{
  return (
    <Flex flexDir="column" align="center" border="2px" rounded="2xl" p="8" bg="gray.800">
      <Text as="h3" fontWeight="bold" fontSize="2xl">{author}</Text>
      <Text fontSize="xl" mb="4">{jobTitle}</Text>
      <Box className="content" pt="4" borderTop="1px">
        {renderRichText(testimonial)}
      </Box>
    </Flex>
  );
}

export default Testimonial;