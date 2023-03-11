import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { VscCloudDownload } from "react-icons/vsc";
// import Profile from '../Images/Profile.png'
import Profile from "../Images/Profile.png"
const Home = () => {
    return (
        <>
            <Box height={{ base: '40px', md: '60px' }} border="1px solid red"></Box>
            <Box mt={100}
                w='100%' h={{
                    base: '450px', md: '400px',
                    lg: "500px", sm: '320px'
                }}
                bgPosition="cover"
                bgRepeat="no-repeat">

                <Flex w={{ base: '100%', md: '80%' }} m='auto' alignItems='center' justifyContent={{ base: 'center', md: 'space-around' }} flexDirection={{ base: 'column-reverse', lg: 'row' }} rowGap={{ base: '10px', md: '10px' }} mt={{ base: '20px', md: '10px', lg: '40px' }}>
                    <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '65%' }} m={{ base: 'auto', md: "auto", lg: '0' }} fontWeight='600' textAlign={{ base: 'center', md: "center", lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
                        <Flex justifyContent='center' textAlign={"center"} gap='5px' direction={{ base: 'column', lg: 'column' }}>

                            <Flex >
                                <Text >
                                    <b>Hello World!</b>
                                </Text>
                                <Image mt='-5px' w={{ base: '40px', md: '60px', lg: '85px' }} src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif" />
                            </Flex>


                            <Text id="user-detail-name" fontSize={{ base: '25px', md: '50px', lg: '80px' }} >
                                <Image mt={{ base: '10px', md: '0px' }} w={{ base: '300px', md: '400px', lg: '650px' }} fontSize={{ base: '25px', md: '50px', lg: '80px' }} align="left" src="https://readme-typing-svg.herokuapp.com/?lines=I Am Vishal More&color=teal&center=true" />
                            </Text>
                        </Flex>
                        <Text >MERN Stack Developer</Text>
                        <Button id="resume-button-2" size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} colorScheme='teal' gap={1.5}><a id="resume-link-2" href="https://drive.google.com/uc?export=download&id=1t42g2b_cVik65BL7Yni89_JzRYihcs94" > Resume<VscCloudDownload color="white" /> </a> </Button>
                    </Box>


                    <Image borderRadius="100%" className="home-img" src={Profile} shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '100px', md: '200px', lg: '350px' }} alt="Vishal More" />

                </Flex>
            </Box>

        </>
    )
}
export default Home;