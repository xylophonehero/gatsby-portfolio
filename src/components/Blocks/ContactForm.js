import
{
  Box,
  HStack,
  Link,
  Text,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  // Select,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function ContactForm(props)
{
  return (
    <VStack spacing="8" my="8">
      <Text px="4" fontSize="2xl" fontWeight="semibold">Interested in working with me?</Text>
      <Text px="4" fontSize="xl">Fill out the form below or contact me on social media and I'll get back to you as soon as possible</Text>
      <HStack spacing="8" fontSize="4xl" >
        <Link href="mailto:nick@nickworrall.co.uk" isExternal _hover={{ textColor: "gray.400" }}>{<FaEnvelope />}</Link>
        <Link href="https://www.linkedin.com/in/nick-worrall-1940981ab/" isExternal _hover={{ textColor: "gray.400" }}>{<FaLinkedin />}</Link>
        <Link href="https://github.com/xylophonehero" isExternal _hover={{ textColor: "gray.400" }}>{<FaGithub />}</Link>
      </HStack>
      <Box
        as="form"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        maxW="48rem"
        w="100vw"
        bg="gray.800"
        p="4"
        rounded="xl"
        action="/thanks"

      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <VStack spacing="4" w="100%" >
          <FormControl id="name" isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" name="name" required="" placeholder="Name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input type="email" name="email" required="" placeholder="E-mail" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Message"
              required=""
              rows="5"

            />
          </FormControl>
          <Button type="submit" color="black" bgGradient="linear(to-b, gray.50, gray.400)">Send</Button>
        </VStack>
      </Box>
    </VStack >
  );
}

export default ContactForm;