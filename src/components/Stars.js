import { Box } from '@chakra-ui/react';
import React from 'react';
import Particles from 'react-particles-js'
import useWindowSize from '../hooks/useWindowSize';

function Stars(props)
{
  const { width, height } = useWindowSize()

  return (
    <Box pos="fixed" w="full" h="100vh" bg="gray.800" zIndex="-1">
      <Particles
        width={width}
        height={height}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1500,
              }
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 0.5,
              outMode: "out",
            }
          },
          // interactivity: {
          //   events: {
          //     onhover: {
          //       enable: true,
          //       mode: "bubble"
          //     }
          //   },
          //   modes: {
          //     bubble: {
          //       distance: 250,
          //       duration: 2,
          //       size: 50,
          //     }
          //   }
          // }
        }}
      />
    </Box>
  );
}

export default Stars;