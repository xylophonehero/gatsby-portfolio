import { Box, Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { motion } from 'framer-motion'

function Name(props)
{
  const letters = ["N", "I", "C", "K", "_", "W", "O", "R", "R", "A", "L", "L"]
  const letters2 = ["W", "E", "B", "_", "D", "E", "V", "E", "L", "O", "P", "E", "R"]

  return (
    <Flex h="80vh" flexDir="column" justify="center" pos="relative">
      <Box fontFamily="heading" fontSize="9xl" >
        <Flex w="full" justifyContent="center">
          {letters.map(letter =>
          (
            <Letter key={uuidv4()} letter={letter} />
          ))}
        </Flex>
        <Flex w="full" justifyContent="center">
          {letters2.map(letter =>
          (
            <Letter key={uuidv4()} letter={letter} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Name;

function Letter({ letter })
{
  const [clicked, setClicked] = useState(false)

  const sgn = (x) => x / Math.abs(x)
  const sign = sgn(Math.random() - 0.5)
  const variants = {
    initial: {},
    animate: {
      opacity: 0,
      x: ((Math.random() - 0.5) * (sign) * 1000) + (sign * 100),
      y: (Math.random() * -200) - 100,
      scale: 0,
      rotate: (sign * 720),
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    }
  }
  if (letter === "_")
  {
    return (
      <Box textColor="transparent" cursor="default">
        {letter}
      </Box>
    )
  }

  return (
    <Box
      as={motion.div}
      mx="2"
      initial="initial"
      animate={clicked ? "animate" : "initial"}
      variants={variants}
      onClick={() => setClicked(true)}
      cursor="pointer"
    >
      {letter}
    </Box>
  )
}