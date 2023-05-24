import logod from '../Images/VISHAL_DARK.gif'
import logol from '../Images/VISHAL_LIGHT.gif'
// import logo from '../Images/Vishal.gif'
import { useContext } from 'react';
import { Box, Flex, IconButton, useDisclosure, Stack, Text, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AppContext } from '../Context/Theme';
// import style from "../Pages/Style/All.module.css"

export const Navbar = ({ ProfileRef, AboutRef, SkillsRef, ProjectsRef, ContactRef }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { Theme, ToggleTheme } = useContext(AppContext)

    const light = {
        backgroundColor: 'aliceblue',
        color: 'black'
    }

    const dark = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <>
            <Box   id="nav-menu" position='fixed' w='100%' zIndex='100' px={4} style={Theme === 'light' ? light : dark} className='ChackraNavBar' shadow='lg'>
                   <Flex alignItems={'left'} justifyContent={'space-between'} >
                    <IconButton style={Theme === 'light' ? light : dark}
                        size='lg'
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />}
                        aria-label='Open Menu'
                        display={{ md: 'none' }}
                        marigin-top="15px"
                        boreder="1px solid blue"
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} >
                        <Box onClick={ProfileRef} p='5px'>
                            <Image h={{ base: '60px', md: '60px',lg:"80px" }}width={{ base: '120px', md: '140px',lg:"190px" }} src={ Theme === 'light' ? logol : logod } />
                        </Box>
                        <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{ base: '', md: '60%', lg: '40%' }}
                            justifyContent='space-between' alignItems='center' color='goldenrod' fontWeight='650'>
                            <Text className="nav-link home" onClick={ProfileRef} cursor='pointer'>Home</Text>
                            <Text className="nav-link about" onClick={AboutRef} cursor='pointer'>About</Text>
                            <Text id="skills" className="nav-link skills" onClick={SkillsRef} cursor='pointer'>Skills</Text>
                            <Text id="projects" className="nav-link projects" onClick={ProjectsRef} cursor='pointer'>Project</Text>
                            <Text className="nav-link contact" onClick={ContactRef} cursor='pointer'>Contact</Text>
                            
                            <a id="resume-button-1" className="nav-link resume" href="https://drive.google.com/uc?export=download&id=1MT0lyDc2sz4cRTEJHsArdDrLWbebLhE9" target={"_blank"} rel="noreferrer" > Resume </a> 
                            {/* <a id="resume-button-1" className="nav-link resume" href="https://drive.google.com/file/d/1MT0lyDc2sz4cRTEJHsArdDrLWbebLhE9/view?usp=share_link" target={"_blank"} rel="noreferrer" > Resume </a>  */}
                        </Flex>
                    </Flex>
                    <Box width='10%' mt={"20px"} justifyContent={'center'} display='flex'>
                        <Text fontSize={"25px"} onClick={ToggleTheme} cursor='pointer'>{Theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}</Text>
                    </Box>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} style={Theme === 'light' ? light : dark}>
                        <Stack as={'nav'} spacing={4} color='goldenrod' fontWeight='600'>
                            <Text id="home" className="nav-link home" onClick={ProfileRef} cursor='pointer'>Home</Text>
                            <Text id="about" className="nav-link about" onClick={AboutRef} cursor='pointer'>About</Text>
                            <Text id="skills" className="nav-link skills" onClick={SkillsRef} cursor='pointer'>Skills</Text>
                            <Text id="projects" className="nav-link projects" onClick={ProjectsRef} cursor='pointer'>Project</Text>
                            <Text id="contact" className="nav-link contact" onClick={ContactRef} cursor='pointer'>Contact</Text>
                            <a  className="nav-link resume" href="https://drive.google.com/file/d/1MT0lyDc2sz4cRTEJHsArdDrLWbebLhE9/view?usp=share_link" target='_blank' rel="noreferrer">Resume </a>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}