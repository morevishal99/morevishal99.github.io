import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Profile from "../Images/Profile.png"
const Home = () => {
    return (
        <>
            <Box height={{ base: '40px', md: '60px' }}></Box>
            <Box mt={100}
                w='100%' h={{
                    base: '450px', md: '400px',
                    lg: "500px", sm: '320px'
                }}
                bgPosition="cover"
                bgRepeat="no-repeat">

                <Flex w={{ base: '100%', md: '80%' }} m='auto' alignItems='center' justifyContent={{ base: 'center', md: 'space-around' }} flexDirection={{ base: 'column-reverse', lg: 'row' }} rowGap={{ base: '10px', md: '10px' }} mt={{ base: '20px', md: '10px', lg: '40px' }}>
                    <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '65%' }} m={{ base: 'auto', md: "auto", lg: '0' }} fontWeight='600' textAlign={{ base: 'center', md: "center", lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
                        <Text color={"#3E865F"}>Hello World!</Text>
                        <Text id="user-detail-name" color={"#2F4E76"} fontSize={{ base: '25px', md: '40px', lg: '60px' }} > I AM VISHAL MORE</Text>
                        <Image src="https://readme-typing-svg.herokuapp.com/?lines=Aspiring+Full-Stack+Web+Developer;Life-Long-Learner&color=red&center=true" alt={"desc"} />
                        <a id="resume-button-1" href="https://drive.google.com/uc?export=download&id=1t42g2b_cVik65BL7Yni89_JzRYihcs94" >  <Text color={"teal"} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} colorScheme='teal' gap={1.5}>Download Resume </Text></a>
                    </Box>
                    <Image borderRadius="20%" className="home-img" src={Profile} shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '200px', md: '200px', lg: '350px' }} alt="Vishal More" />
                </Flex>

            </Box>

        </>

    )
}
export default Home;