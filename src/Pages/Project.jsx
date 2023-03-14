import React, { useContext } from 'react';
import { Box, Image, Badge, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../Context/Theme';
import { TfiGithub } from "react-icons/tfi";
import { GrDeploy } from "react-icons/gr";
import Nordstrom from "./ProjectImages/Nordstrom.png"
import smatbot from "./ProjectImages/Smatbot.png"
import Indeed from "./ProjectImages/Indeed.png"
import Musafir from "./ProjectImages/Musafir.png"
import FashionFlare from "./ProjectImages/FashionFlare.png"
const Project = () => {
    const { Theme } = useContext(AppContext);
    const light = {
        backgroundColor: 'white',
        color: 'black'
    }
    const dark = {
        backgroundColor: 'black',
        color: 'white'
    }
    const lightc = "#36454f"


    // const darkc = '#F0F8FF'
    const darkc = '#92c7c7'

    return (
        <Box id="projects">
            <Text textAlign='center' color='goldenrod' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>My Projects</Text>
            <Box w={"80%"} display={{ base: "column", sm: "column", lg: "grid" }} gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="50px" gap={20}>
                {/* {first} */}
                <Text padding={"15px"} className="project-card" right boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={FashionFlare} alt="Yoox" />

                        <Box p='6' >
                            <Text color={"cyan.600"} fontFamily={"Georgia"} className="project-title" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xxl' }}>Fashion Flare.Com</Text>
                            <Text fontWeight={"600"} color={Theme === 'light' ? lightc : darkc} fontFamily={"Saas"} className="project-description" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ lg: 6 }}>
                                Fashion flaire is an e-commerce website that primarily sells and delivers cloths and accessories . This is collabrative project. We have created clone of Ajio.com website in 5 days. User able to signup and login successfully. Also user able to see, buy, add and make payment through website and admin side function is also added.
                            </Text>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge className="project-tech-stack" borderRadius='full' px='2' >
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1}>
                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        React JS
                                    </Box>

                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        Redux
                                    </Box>
                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        Chakra UI
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-github-link" href="https://github.com/morevishal99/feigned-copper-2423" target="_blank" rel="noreferrer"> Github</a>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-deployed-link" href='https://feigned-copper-2423-shashankbijapur.vercel.app/' target="_blank" rel="noreferrer">Live</a>
                        </Flex>
                    </Box>
                </Text>
                {/* {second} */}
                <Text padding={"15px"}  boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    className="project-card" right>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={Musafir} alt="Yoox" />
                        <Box p='6'>
                            <Text color={"cyan.600"} fontFamily={"Georgia"} className="project-title" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xxl' }}>Musafir.Com</Text>
                            <Text fontWeight={"600"} color={Theme === 'light' ? lightc : darkc} fontFamily={"Saas"} className="project-description" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ lg: 6 }}>
                                Musafir is a website for tours and travel created with one thought that is to empower Indian traveler with instant bookings and comprehensive choices.
                            </Text>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge className="project-tech-stack" borderRadius='full' px='2' >
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1}>
                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        React JS
                                    </Box>

                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        Redux
                                    </Box>
                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        Chakra UI
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-github-link" href="https://github.com/morevishal99/Musafir-mmt-clone-" target="_blank" rel="noreferrer">Github</a>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-deployed-link" href='https://musafir-travel.netlify.app/' target="_blank" rel="noreferrer">Live</a>
                        </Flex>
                    </Box>
                </Text>
                {/* {third} */}
                <Text padding={"15px"} className="project-card" left  boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={Indeed} alt="Indeed" />
                        <Box p='6'>
                            <Text color={"cyan.600"} fontFamily={"Georgia"} className="project-title" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xxl' }}>Indeed.Com</Text>

                            <Text fontWeight={"600"} color={Theme === 'light' ? lightc : darkc} fontFamily={"Saas"} className="project-description" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ lg: 6 }}>
                                The site allows jobseekers to search for jobs by location, job type, salary, and keywords. Employers can post jobs for free and use the site to search for potential candidates. Indeed also offers a variety of resources to employers, such as job posting tools, resume search tools, and employer branding tools.
                            </Text>

                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge className="project-tech-stack" borderRadius='full' px='2' >
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1}>
                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        HTML
                                    </Box>

                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        CSS
                                    </Box>
                                    <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        JAVASCRIPT
                                    </Box>

                                </Box>
                            </Box>
                        </Box>

                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-github-link" href="https://github.com/morevishal99/vengeful-anger-1431" target="_blank" rel="noreferrer">Github</a>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-deployed-link" href='https://gleaming-blancmange-5519c8.netlify.app/' target="_blank" rel="noreferrer">Live</a>
                        </Flex>
                    </Box>
                </Text>
                {/* {fourth} */}
                <Text padding={"15px"} className="project-card" right  boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={smatbot} alt="SmatBot" h={{ lg: '300px' }} />
                        <Box p='6'>
                            <Text color={"cyan.600"} fontFamily={"Georgia"} className="project-title" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xxl' }}>Smatbot.Com</Text>
                            <Text fontWeight={"600"} color={Theme === 'light' ? lightc : darkc} fontFamily={"Saas"} className="project-description" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ lg: 6 }}>
                                A website which provides Automated chatbots, Customized chatbot solutions, Affordable pricing and Conversational AI Chatbot to Acquire, Engage & Support Customers.
                            </Text>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' mt={3} >
                                <Badge borderRadius='full' px='2' fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1} >

                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        Javascript
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-github-link" href="https://github.com/morevishal99/smatbot.com-clone" target="_blank" rel="noreferrer">Github</a>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-deployed-link" href='https://elaborate-vacherin-013d66.netlify.app/' target="_blank" rel="noreferrer">Live</a>
                        </Flex>
                    </Box>
                </Text>
                {/* {fifth} */}
                <Text padding={"15px"} className="project-card" left  boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10}  >
                        <Image w='full' src={Nordstrom} alt="NordStrom" h={{ lg: '300px' }} />
                        <Box p='6' >
                            <Text color={"cyan.600"} fontFamily={"Georgia"} className="project-title" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xxl' }}>Nordstrom.Com</Text>
                            <Text fontWeight={"600"} color={Theme === 'light' ? lightc : darkc} fontFamily={"Saas"} className="project-description" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ lg: 6 }}>
                                An e-commerce website that provides large number of
                                clothing accessories,beauty products and many more
                            </Text>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' mt={3}  >
                                <Badge borderRadius='full' px='2' fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1} >
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        Javascript
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-github-link" href="https://github.com/morevishal99/selective-stem-7212" target="_blank" rel="noreferrer">Github</a>
                            <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-deployed-link" href='https://musical-lolly-1b4f8a.netlify.app/' target="_blank" rel="noreferrer">Live</a>
                        </Flex>
                    </Box>
                </Text>
            </Box>
        </Box>
    );
}
export default Project;