import {
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/Theme';


export default function About() {
  const { Theme } = useContext(AppContext);

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
       <Text    id="about" fontSize={{ base: '22px', md: '22px', lg: '40px' }} color='goldenrod' fontWeight={{ base: '600', md: '700' }} textAlign='center'>About Me</Text>
      <Center class="about section" style={Theme === 'light' ? light : dark}>
        <Box style={Theme === 'light' ? light : dark}
          maxW={{ base: '350px', md: '450px', lg: '600px', xl: '800px' }}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          textAlign={'center'}>

          <Text  id="user-detail-intro" textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={5} style={Theme === 'light' ? light : dark}>
            An aspiring full-stack developer with a good knowledge of web development and Problem-Solving skills. Skilled in developing quality
            programs quickly. My expertise lies in delivering user-friendly software
            applications within strict deadlines. Looking to secure a stimulating
            position as a Full stack web developer, alongside learning and growing
            with the company.
          </Text>

          <Stack  id="user-detail-intro" align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #WebDesign
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #JavaScript
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #tech
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #DSA
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #programmer
            </Badge>
          </Stack>

          <Stack mt={1} direction={'row'} spacing={4} >
            <a href="https://www.linkedin.com/in/abrar-khan-b67333230/" target='_blank' style={{ width: '90%', margin: 'auto' }}>{/*<LinkedinButton/>*/}</a>
          </Stack>
        </Box>
      </Center>
    </>
  );
}