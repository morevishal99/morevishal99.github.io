import { Box, Image } from "@chakra-ui/react";
import "./techstack.css";

function TechStack({ src, title }) {
  return (
    <Box className="skills-card">
      <Box className="skills-card-img">
        <Image src={src} alt={title} />
      </Box>
      <p className="skills-card-name">{title}</p>
    </Box>
  );
}

export default TechStack;