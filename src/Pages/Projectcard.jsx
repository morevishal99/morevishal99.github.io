import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../Context/Theme';
import "./Style/style.css"
import { Tilt } from 'react-tilt'

const Projectcard = ({ el }) => {
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
    const darkc = '#92c7c7'

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          2000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <Tilt options={defaultOptions}>

        <Box marginTop={"15px"} padding={"15px"} className="project-card" borderRadius='20px' right boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
            <Box className='image'   style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
               {/* image of website */}
                <Image   w='full' src={el.image} alt="" />

                <Box p='6' >
                    <Text color={"cyan.600"} fontFamily={"Georgia"} className="project-title" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xxl' }}>{el.title}</Text>
                   
                    <Text fontWeight={"600"} color={Theme === 'light' ? lightc : darkc} fontFamily={"Saas"} className="project-description" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} mb={{ lg: 6 }}>{el.description}</Text>
                  
                    <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                        <Badge className="project-tech-stack" borderRadius='full' px='2' >
                            TECH STACK
                        </Badge>
                        {/* tech stack mapped here */}
                        {el.techstack.map((el) =>
                            <Box display={{ base: "flex", sm: "flex", md: "flex", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1}>
                                <Box className="project-tech-stack" color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='12px' textTransform='uppercase' ml='2' >
                                    {el}
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
                {/* links mentioned here */}
                <Flex gap={10} alignItems="center" mb={5} ml={7}>
                    <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-github-link" href={el.github} target="_blank" rel="noreferrer"> Github</a>
                    <a style={{ backgroundColor: "aliceblue", color: "teal", padding: "5px", borderRadius: "10px" }} className="project-deployed-link" href={el.deployed} target="_blank" rel="noreferrer">Deployed</a>
                </Flex>
            </Box>
        </Box>
        
        </Tilt>
    )
}

export default Projectcard