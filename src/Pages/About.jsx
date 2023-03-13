import {
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/Theme';
export default function About() {
  const { Theme } = useContext(AppContext);
  const light = {
    backgroundColor: 'white',
    color: 'teal'
  }
  const dark = {
    backgroundColor: 'black',
    color: 'teal'
  }
  return (
    <>
      <Text id="about" fontSize={{ base: '22px', md: '22px', lg: '40px' }} color='goldenrod' fontWeight={{ base: '600', md: '700' }} textAlign='center'>About Me</Text>
      <Center className="about section" style={Theme === 'light' ? light : dark}>
        <Flex display={{ base: "column", sm: "column", md: "flex", lg: "flex" }} >
          <Box style={Theme === 'light' ? light : dark}
            maxW={{ base: '350px', md: '450px', lg: '600px', xl: '800px' }}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            rounded={'lg'}
            color="red"
            textAlign={'center'}>
           
            <Text fontSize={"20px"} fontWeight="600" mt={"90px"} id="user-detail-intro" textAlign={'left'}  px={8} style={Theme === 'light' ? light : dark} color="red">
              An aspiring full-stack web developer with a good knowledge of web development and Problem-Solving skills. Skilled in developing quality
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
          </Box>
          <Image src="https://camo.githubusercontent.com/101c98f67298425e9875ecfac1c25efccaf3c966db04609cc4f4e92d6bd12c32/68747470733a2f2f632e74656e6f722e636f6d2f4e4f594633663832625f6741414141432f70726f6772616d6d65722e676966" alt="coding image" />
        </Flex>
      </Center>
    </>
  );
}