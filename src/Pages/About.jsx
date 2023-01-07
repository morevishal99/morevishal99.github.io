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
       <Text  color='' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center'>About Me</Text>
      <Center style={Theme === 'light' ? light : dark}>
        <Box style={Theme === 'light' ? light : dark}
          maxW={{ base: '350px', md: '450px', lg: '600px', xl: '800px' }}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          textAlign={'center'}>

          <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={5} style={Theme === 'light' ? light : dark}>
            An aspiring full-stack developer with a good knowledge of web development and Problem-Solving skills. Skilled in developing quality
            programs quickly. My expertise lies in delivering user-friendly software
            applications within strict deadlines. Looking to secure a stimulating
            position as a Full stack web developer, alongside learning and growing
            with the company.
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
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