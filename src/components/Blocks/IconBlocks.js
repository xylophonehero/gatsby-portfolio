import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function IconBlocks({ icon })
{
  return (
    <Box maxW="80rem" mx="8" my="8">
      <Heading textAlign="center" mb="8" textTransform="uppercase">Technologies I use</Heading>
      <SimpleGrid columns={[2, 3, 4, 5, 6]} gap={12}>
        {icon.map(item =>
        (
          <Flex maxW="150px" w="full" flexDir="column" justifyContent="flex-end" align="center">
            <Flex flexGrow="1" flexDir="column" justifyContent="center" align="center">

              <GatsbyImage image={getImage(item.gatsbyImageData)} alt={item.title} />
            </Flex>
            <Text textAlign="center" fontWeight="semibold" mt="2" fontSize="xl">{item.title}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default IconBlocks;