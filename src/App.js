import { Navbar } from './Components/Navbar';
import { Skills} from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { useContext, useRef } from 'react';
import { AppContext } from './Context/Theme.jsx';
import {  Box } from '@chakra-ui/react';
import Project from './Pages/Project'; 
import Github from './Pages/Github';
function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null)
  const {Theme} = useContext(AppContext);

  const light = {
    backgroundColor : 'white',
    color : 'black'
  }

  const dark = {
    backgroundColor : 'black',
    color : 'white'
  }

  const HandleScrollTo = (ref) =>{
    window.scrollTo({
      top : ref.current.offsetTop,
      behavior : 'smooth'
    })
  };
const white="white"
const black="black"
  return (
    <Box  className="App"  style={Theme ==='light'? light : dark} >
      <Navbar 
      ProfileRef={( ) =>HandleScrollTo(ProfileRef)} 
      AboutRef={( )=> HandleScrollTo(AboutRef)} 
      SkillsRef={( ) => HandleScrollTo(SkillsRef)}
      ProjectsRef={( ) => HandleScrollTo(ProjectRef)}
      ContactRef={( ) => HandleScrollTo(ContactRef)}
      />    

     <Box border={`2px solid ${Theme ==='light'?   white:black  }`}  ref={ProfileRef}>
      <Home/>
     </Box>

     <Box  border={`2px solid ${Theme ==='light'?   white:black  }`}  mt={{base : '5%', md: '9%',lg:"9%"}} ref={AboutRef}>
      <About/>
     </Box>

     <Box  border={`2px solid ${Theme ==='light'?   white:black  }`} mt={{base : '5%', md : '9%', lg : '9%' }} ref={SkillsRef}>
      <Skills/>
     </Box>

     <Box border={`2px solid ${Theme ==='light'?   white:black  }`}  mt={{base : '5%', md : '9%', lg : '9%' }} ref={ProjectRef}>
      <Project/>
     </Box>

     <Box border={`2px solid ${Theme ==='light'?   white:black  }`}  mt={{base : '5%', md : '9%', lg : '9%' }} >
      <Github />
     </Box>

     <Box  border={`2px solid ${Theme ==='light'?   white:black  }`}  mt={{base : '7%', md : '9%', lg : '9%' }} ref={ContactRef}>
      <Contact/>
     </Box>
    </Box>
  );
}



export default App;