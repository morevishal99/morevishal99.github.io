import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useContext } from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";

import css from "./SkillsImages/css.png"
import github from "./SkillsImages/github.png"
import git from "./SkillsImages/git.png"
import html from "./SkillsImages/html5.png"
import javascript from "./SkillsImages/javascript.png"
import node from "./SkillsImages/node js.png"
import npm from "./SkillsImages/npm.png"
import react from "./SkillsImages/react.png"
import typescript from "./SkillsImages/typescript.png"
import mongo from "./SkillsImages/mongodb.png"
import redux from "./SkillsImages/redux.png"
import express from "./SkillsImages/express.png"


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
            <Text  color='goldenrod'   fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center' >Skills</Text>
            <Box w="80%" m='auto'>
                <Slider {...settings} style={Theme === 'light' ? light : dark}>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                            <Image  w={{ base: '45px', md: '80px', lg: '80px' }} src={html}  />
                            <Text mt={{ base: '10px', lg: '15px' }}>HTML</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                            <Image  w={{ base: '45px', md: '60px', lg: '60px' }} src={css} />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>CSS3</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image  w={{ base: '45px', md: '80px', lg: '80px' }}src={javascript}  />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>JavaScript</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image  w={{ base: '45px', md: '80px', lg: '80px' }} src={react}/>
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>React.Js</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={redux}  />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Redux</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={npm} />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>NPM</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '75px', md: '125px', lg: '125px' }} src={node} />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Node.Js</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={mongo}  />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Mongodb</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={express}  />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Express</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={typescript} />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>TypeScript</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={github}  />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>GitHub</Text>
                        </Box>
                    </div>
                    <div style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={git}  />
                            <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Git</Text>
                        </Box>
                    </div>

                </Slider>
            </Box>
        </>
    );
}