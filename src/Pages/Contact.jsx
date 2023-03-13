import { Box, Flex, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { useContext } from "react";
import { AppContext } from "../Context/Theme";


export default function Contact() {
  const { Theme } = useContext(AppContext);

  const light = {
    backgroundColor: 'white',
    color: 'black'
  }

  const dark = {
    backgroundColor: 'black',
    color: 'white'
  }
  return (
    <>
      <Text textAlign='center' color='goldenrod' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Contact</Text>
      <Box id="contact" style={Theme === 'light' ? light : dark} p={{ base: '10px', md: '30px' }} backgroundColor="" color="black" mt='10px' >
        <Flex w={{ base: '100%', md: '70%', lg: '50%' }} m='auto' justifyContent='space-between' fontSize={{ base: '22px', md: '26px', lg: '30px' }} mt='10px'>
          <Flex flexDirection="column" alignItems="center" gap={3} >
            <Text id="contact-linkedin" >  <a href="https://www.linkedin.com/in/vishalmore99/" target='_blank'> <BsLinkedin /></a></Text>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }}>Vishal More</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <Text id="contact-github">   <a href="https://github.com/morevishal99" target='_blank'><BsGithub /></a></Text>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }}>Vishal More</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <Text id="contact-phone"> <a href="tel:+919766555424" ><AiOutlinePhone /></a></Text>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }}>+91 9168989962</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <Text id="contact-email" >  <a href="mailto:morevishal079@gmail.com"><GrMail /></a></Text>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }}>morevishal079@gmail.com</Text>
          </Flex>
        </Flex>
      </Box>


    </>
  )

}