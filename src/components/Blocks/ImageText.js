import { Box, Flex } from '@chakra-ui/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

function ImageText({ text, image, imageLeft })
{
  return (
    <Flex maxW="80rem" mx="8" my="8" flexDir={["column", null, "row"]}>
      <Box as={GatsbyImage} image={getImage(image)} maxW="24rem" w="full" maxH="30rem" mr="8" rounded="2xl" boxShadow="dark-lg" mb="8" />
      <Box className="content">
        {renderRichText(text)}
      </Box>
    </Flex>
  );
}

export default ImageText;