import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { VscCloudDownload } from "react-icons/vsc";
// import Profile from '../Images/Profile.png'
import Profile from "../Images/Profile.png"
const Home = () => {
    return (
        <>
            <Box height={{ base: '40px', md: '60px' }}></Box>
            <Box backgroundImage="data:image/jpeg;base64,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" mt={100}
                w='100%' h={{
                    base: '450px', md: '400px',
                    lg: "500px", sm: '320px'
                }}
                bgPosition="cover"
                bgRepeat="no-repeat">

                <Flex w={{ base: '100%', md: '80%' }} m='auto' alignItems='center' justifyContent={{ base: 'center', md: 'space-around' }} flexDirection={{ base: 'column-reverse', lg: 'row' }} rowGap={{ base: '10px', md: '10px' }} mt={{ base: '20px', md: '10px', lg: '40px' }}>
                    <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '65%' }} m={{ base: 'auto', md: "auto", lg: '0' }} fontWeight='600' textAlign={{ base: 'center', md: "center", lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
                        <Text color={"teal.500"}>Hello World!</Text>
                        <Text id="user-detail-name" color={"teal.500"} fontSize={{ base: '25px', md: '40px', lg: '60px' }} > I AM VISHAL MORE</Text>
                        <Image width={"1500px"} src="https://readme-typing-svg.herokuapp.com/?lines=An Aspiring+Full+Stack+Web+Developer;Life-Long+Learner&color=red&center=true" alt={"desc"} />
                        <Button id="resume-button-2" size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} colorScheme='teal' gap={1.5}><a id="resume-link-2" href="https://drive.google.com/uc?export=download&id=1t42g2b_cVik65BL7Yni89_JzRYihcs94" >Resume</a>  </Button>
                    </Box>
                    <Image borderRadius="100%" className="home-img" src={Profile} shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '100px', md: '200px', lg: '350px' }} alt="Vishal More" />
                </Flex>
            </Box>

        </>

    )
}
export default Home;