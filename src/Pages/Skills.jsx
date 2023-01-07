import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useContext } from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";

export const AutoPlay = () => {

    const { Theme } = useContext(AppContext)
    const light = {
        backgroundColor: 'white',
        color: 'black'
    }

    const dark = {
        backgroundColor: 'black',
        color: 'black'
    }
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <>
            <Text fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center' >Skills</Text>
            <Box w="80%" m='auto'>
                <Slider {...settings} style={Theme === 'light' ? light : dark}>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='data:image/png;base64,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' />
                            <Text mt={{ base: '10px', lg: '15px' }}>HTML</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/css3.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>CSS3</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/javascript.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>JavaScript</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/react.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>React.Js</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/redux.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Redux</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/npm.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>NPM</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/node-js.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Node.Js</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/mongodb.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Mongodb</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/express.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Express</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/typescript.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>TypeScript</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/github.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>GitHub</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/SkillsImage/git.png' />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Git</Text>
                        </Box>
                    </div>
                   
                </Slider>
            </Box>
        </>
    );
}