import { Box, Image } from "@chakra-ui/react";
import { Tilt } from "react-tilt";
import "./Style/techstack.css";

function TechStack({ src, title }) {

  return (
    // <Tilt options={defaultOptions}>

    <Box className="skills-card">
      <Box className="skills-card-img">
        <Image src={src} alt={title} />
      </Box>
      <p className="skills-card-name">{title}</p>
    </Box>
    // </Tilt>
  );
}

export default TechStack;