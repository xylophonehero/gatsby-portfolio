import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import BlockSorter from '../BlockSorter';

function BlockColumns({ maxColumns, items })
{
  return (
    <Box maxW="80rem" mx="8" my="8">
      <SimpleGrid columns={[1, 1, 1, maxColumns]} gap="12">
        {items.map(item => (
          <BlockSorter key={item.contentful_id} block={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default BlockColumns;