import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { VscCloudDownload } from "react-icons/vsc";
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
                    <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '65%' }} m={{ base: 'auto', lg: '0' }} fontWeight='600' textAlign={{ base: 'center', lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
                        <Flex justifyContent='center' gap='5px' direction={{ base: 'row', lg: 'column' }}>

                            <Flex>
                                <Text >
                                    <b>Hello World!</b>
                                </Text>
                                <Image mt='-5px' w={{ base: '40px', md: '60px', lg: '85px' }} src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif" />
                            </Flex>


                            <Text id="user-detail-name" fontSize={{ base: '25px', md: '50px', lg: '80px' }} color='' style={{}}>I Am Vishal More</Text>
                        </Flex>
                        <Text >MERN Stack Developer</Text>
                        <Button id="resume-button-2" size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} colorScheme='teal' gap={1.5}><a id="resume-link-2" href="https://drive.google.com/file/d/1t42g2b_cVik65BL7Yni89_JzRYihcs94/view?usp=share_link" > Resume<VscCloudDownload color="white" /> </a> </Button>
                    </Box>
                    <Box>
                        <Image class="home-img" src='https://avatars.githubusercontent.com/u/107456969?v=4' shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '100px', md: '200px', lg: '350px' }} borderRadius='50%' alt="Vishal More" />
                    </Box>
                </Flex>
            </Box>

        </>
    )
}
export default Home;