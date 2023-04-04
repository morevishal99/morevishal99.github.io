import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/Theme";
import css from "./SkillsImages/css.png"
import github from "./SkillsImages/github.png"
import git from "./SkillsImages/git.png"
import postman from "./SkillsImages/Postman.png"
// import html from "./SkillsImages/html5.png"
import javascript from "./SkillsImages/javascript.png"
import node from "./SkillsImages/node js.png"
import npm from "./SkillsImages/npm.png"
import react from "./SkillsImages/react.png"
import typescript from "./SkillsImages/typescript.png"
import mongo from "./SkillsImages/mongodb.png"
import redux from "./SkillsImages/redux.png"
import express from "./SkillsImages/express.png"
import data from "../db.json";
import "./skills.css";
import TechStack from "./TechStack";
export const Skills = () => {
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
        autoplaySpeed: "nono",
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
            <Text mt={{ sm: '20%', md: '10%', lg: '15%' }} color='goldenrod' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center' >Skills</Text>
            <Box className="grad1"  id="skills" w="80%" m='auto' mt={"40px"}>
                <Slider {...settings} style={Theme === 'light' ? light : dark}>
                    {/* <Box style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box className="skills-card" p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5}  >
                            <Image  w={{ base: '45px', md: '60px', lg: '80px' }} src={html} />
                            <Text  color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">HTML</Text>
                        </Box>
                    </Box> */}
                    <Box style={{ display: "flex", width: "50px", height: '150px' }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5}  >
                            <Image className="skills-card-img" w={{ base: '45px', md: '60px', lg: '60px' }} src={css} />
                            <Text className="skills-card-name"color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">CSS</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={javascript} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">JAVASCRIPT</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={react} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">REACT</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={redux} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">REDUX</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px", textAlign: "center" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={npm} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600" textAlign="center">NPM</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '75px', md: '125px', lg: '125px' }} src={node} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">NODE JS</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={mongo} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">MONGO DB</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={express} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">EXPRESS JS</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={typescript} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">TYPESCRIPT</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={github} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">GITHUB</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={git} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">GIT</Text>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", width: "50px", height: '150px', gap: "10px" }} >
                        <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='aliceblue' mr={5} >
                            <Image w={{ base: '45px', md: '80px', lg: '80px' }} src={postman} />
                            <Text color={"grey"} padding="10px" fontSize={"20px"} fontWeight="600">POSTMAN</Text>
                        </Box>
                    </Box>

                </Slider>
            </Box>

<Box >
      <Box className="skillsWrapper">
        <h1 className="skills-heading">Languages / Frameworks</h1>
        <Box className="skillsTechnologiesDiv">
          {data.language_framework.map((elm) => (
            <TechStack key={elm.id} {...elm} />
          ))}
        </Box>
        <h1 className="skills-heading">Tools</h1>
        <Box className="skillsToolsDiv">
          {data.tools.map((elm) => (
            <TechStack key={elm.id} {...elm} />
          ))}
        </Box>
      </Box>
    </Box>

        </>
    );
}