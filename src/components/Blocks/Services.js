import { Box, Flex, Link, SimpleGrid, Text } from '@chakra-ui/layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types'
import React from 'react';

function Services({ services })
{
  return (
    <Box maxW="80rem" mx="8" my="8">
      <SimpleGrid columns={[1, 2, 3]} gap="12">
        {services.map(service => (
          <Flex flexDir="column" bg="gray.800">
            <Flex flexDir="column" justifyContent="center" h="6rem">

              <Text as="h3" textTransform="uppercase" textAlign="center" fontWeight="bold" fontSize="2xl" mb="2" >{service.title}</Text>
            </Flex>
            <Box borderTop="1px" pt="2">
              {renderRichText(service.description, {
                renderNode: {
                  [INLINES.HYPERLINK]: node => (
                    <Link href={node.data.uri} isExternal>{node.content[0].value}</Link>
                  )
                }
              })}
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Services;