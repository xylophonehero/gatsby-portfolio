import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from 'framer-motion';
import
{
  Box,
} from "@chakra-ui/layout"

import Header from "./header"
import { Flex } from "@chakra-ui/layout"
import Stars from "./Stars"
import Fonts from "./Fonts"

const Layout = ({ children, location }) =>
{
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const duration = 0.3

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <Flex flexDir="column" minH="100vh" pos="relative" >
      <Fonts />
      <Stars />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box flexGrow="1" pos="relative">
        <AnimatePresence>
          <Box
            as={motion.main}
            key={location}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            overflowX="hidden"
          >
            {children}
          </Box>
        </AnimatePresence>
      </Box>
      <footer
        style={{
          marginTop: `2rem`,
          position: 'relative',
        }}
      >
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Flex >
  )
}


export default Layout
