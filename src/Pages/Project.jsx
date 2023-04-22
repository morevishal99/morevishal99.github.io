import { Box, Text } from '@chakra-ui/react'
import Projectcard from './Projectcard';
import data from "../db.json"
const Project = () => {

    return (
        <Box mt={{ sm: '20%', md: '10%', lg: '5%' }} id="projects">
            <Text  style={{textShadow:"2px 2px red"}}textAlign='center' color='goldenrod' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>My Projects</Text>
            <Box w={"80%"} display={{ base: "column", sm: "column", lg: "grid" }} gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="50px" gap={20}>
                {data.projects.map((el) =>
                // all data mapped here for projects
                    <Projectcard el={el} />
                )}
            </Box>
        </Box>
    );
}
export default Project;