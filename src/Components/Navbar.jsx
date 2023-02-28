import logo from '../Images/logo.gif'
import { useContext } from 'react';
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Stack,
    Text,
    Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AppContext } from '../Context/Theme';


export const Navbar = ({ ProfileRef, AboutRef, SkillsRef, ProjectsRef, ContactRef }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { Theme, ToggleTheme } = useContext(AppContext)

    const light = {
        backgroundColor: 'white',
        color: 'black'
    }

    const dark = {
        backgroundColor: 'black',
        color: 'white'
    }
    return (
        <>
            <Box id="nav-menu" backgroundImage="http://line25.com/wp-content/uploads/2010/portfolio-coding/6.png" pos='fixed' w='100%' zIndex='99' px={4} style={Theme === 'light' ? light : dark} className='ChackraNavBar' shadow='lg'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <IconButton style={Theme === 'light' ? light : dark}
                        size='lg'
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />}
                        aria-label='Open Menu'
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} >
                        <Box p='5px'>
                            <Image width={{ base: '60px', md: '60px' }} src={logo} />
                        </Box>
                        <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{ base: '', md: '60%', lg: '40%' }}
                            justifyContent='space-between' alignItems='center' color='goldenrod' fontWeight='650'>
                            <Text id="home" class="nav-link home" onClick={ProfileRef} cursor='pointer'>Home</Text>
                            <Text id="about" class="nav-link about" onClick={AboutRef} cursor='pointer'>About</Text>
                            <Text id="skills" class="nav-link skills" onClick={SkillsRef} cursor='pointer'>Skills</Text>
                            <Text id="projects" class="nav-link projects" onClick={ProjectsRef} cursor='pointer'>Project</Text>
                            <Text class="nav-link contact" onClick={ContactRef} cursor='pointer'>Contact</Text>
                            <Text id="resume-button-1" class="nav-link resume"><a href="https://drive.google.com/file/d/1t42g2b_cVik65BL7Yni89_JzRYihcs94/view?usp=share_link" target='_blank'>Resume </a></Text>
                        </Flex>
                    </Flex>
                    <Box width='5%' justifyContent={'center'} display='flex'>
                        <Text onClick={ToggleTheme} cursor='pointer'>{Theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}</Text>
                    </Box>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} style={Theme === 'light' ? light : dark}>
                        <Stack as={'nav'} spacing={4} color='goldenrod' fontWeight='600'>
                            <Text id="home" class="nav-link home" onClick={ProfileRef} cursor='pointer'>Home</Text>
                            <Text id="about" class="nav-link about" onClick={AboutRef} cursor='pointer'>About</Text>
                            <Text id="skills" class="nav-link skills" onClick={SkillsRef} cursor='pointer'>Skills</Text>
                            <Text id="projects" class="nav-link projects" onClick={ProjectsRef} cursor='pointer'>Project</Text>
                            <Text id="contact"class="nav-link contact" onClick={ContactRef} cursor='pointer'>Contact</Text>
                            <Text id="resume-button-1" class="nav-link resume"><a href="https://drive.google.com/file/d/1t42g2b_cVik65BL7Yni89_JzRYihcs94/view?usp=share_link" target='_blank'>Resume </a></Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}