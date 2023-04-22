import { Box, Flex, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { useContext } from "react";
import { AppContext } from "../Context/Theme";
// import style from "./Style/All.module.css"
export default function Contact() {
  const { Theme } = useContext(AppContext);
  const light = {
    backgroundColor: 'white',
    color: 'goldenrod'
  }
  const dark = {
    backgroundColor: 'black',
    color: 'goldenrod'
  }
  return (
    <><Box >
      {/* className={style.grad} */}
      <Text style={Theme === 'light' ? light : dark} textAlign='center' color='goldenrod' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Contact</Text>
      <Box id="contact" style={Theme === 'light' ? light : dark} p={{ base: '10px', md: '30px' }} color="teal" >
        <Flex w={{ base: '100%', md: '70%', lg: '80%' }} m='auto' justifyContent='space-between' fontSize={{ base: '22px', md: '30px', lg: '50px' }} mt='10px' padding={"20px"} mb="20px">
          <Flex flexDirection="column" alignItems="center" gap={3} >
            <Text color="teal" id="contact-linkedin" >  <a href="https://www.linkedin.com/in/vishalmore99/" target='_blank' rel="noreferrer"> <BsLinkedin /></a></Text>
            <Text style={{ textShadow: "1px 1px red" }} color=" rgb(0, 163, 196)" fontSize={{ base: '7px', md: '11px', lg: '25px' }}>Vishal More</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <Text color="teal" id="contact-github">   <a href="https://github.com/morevishal99" target='_blank' rel="noreferrer"><BsGithub /></a></Text>
            <Text style={{ textShadow: "1px 1px red" }} color=" rgb(0, 163, 196)" fontSize={{ base: '7px', md: '11px', lg: '25px' }}>Vishal More</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <Text color="teal" id="contact-phone"> <a href="tel:+919766555424" ><AiOutlinePhone /></a></Text>
            <Text style={{ textShadow: "1px 1px red" }} color=" rgb(0, 163, 196)" fontSize={{ base: '7px', md: '11px', lg: '25px' }}>+91 9168989962</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <Text color="teal" id="contact-email" >  <a href="mailto:morevishal079@gmail.com"><GrMail /></a></Text>
            <Text style={{ textShadow: "1px 1px red" }} color=" rgb(0, 163, 196)" fontSize={{ base: '7px', md: '11px', lg: '25px' }}>morevishal079@gmail.com</Text>
          </Flex>
        </Flex>
      </Box>

    </Box>


    </>
  )

}