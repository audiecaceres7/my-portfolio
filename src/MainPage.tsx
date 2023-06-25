import { Box, Heading, Text } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Box marginTop="2rem">
      <Heading as="h1" fontSize="3rem">
        Audie Caceres
      </Heading>
      <Text fontWeight="500" marginTop="1rem">
        I'm a 23 year old software engineer, specializing in front-end
        development using technologies such as TypeScript, HTML, CSS and React .
        I thrive on creating intuitive and engaging user interfaces that blend
        functionality and deliver exceptional digital experience .
      </Text>
    </Box>
  );
};

export default MainPage;
