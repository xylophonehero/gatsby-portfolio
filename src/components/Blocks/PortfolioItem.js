import { Box, Flex, Link, Text, Button } from '@chakra-ui/react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';

function PortfolioItem({ title, tagline, technologies, link, description })
{
  return (
    <Flex flexDir="column" border="4px" borderRadius="2xl" p="8" align="center" bg="gray.800">
      <Link href={link} isExternal>
        <Text fontSize="2xl" fontWeight="semibold" textTransform="uppercase">{title}</Text>
      </Link>

      <Text fontSize="xl">{tagline}</Text>
      <Flex flexDir="row" flexWrap="wrap" justify="center" maxW={["320px", technologies.length === 4 ? "320px" : "480px"]} my="4" >
        {technologies.map(item => (
          <Box
            key={item.contentful_id}
            color={item?.textColor || "black"}
            w="120px"
            mx="4"
            mb="3"
            p={0.5}
            textAlign="center"
            fontWeight="semibold"
            bgGradient={`linear(to-r,${item.color},${item?.color3 ? item.color3 + ',' : ''} ${item?.color2 || item.color} )`}
            rounded="xl"
          >
            {item.title}
          </Box>
        ))}
      </Flex>
      <Box className="content" borderTop="1px" pt="2" w="full" flexGrow="1">
        {renderRichText(description)}
      </Box>
      <Link href={link} isExternal>
        <Button color="black" bgGradient="linear(to-b, gray.50, gray.400)">See more</Button>
      </Link>
    </Flex>
  );
}

export default PortfolioItem;