import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { Box, Heading, Text, Button, List, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { imgVariants, variants } from "./main";

const MainPage = () => {
  return (
    <Box marginTop="3rem">
      <motion.article
        variants={variants}
        key="mainPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.2, type: "EaseInOut" }}
      >
        <Heading as="h1" fontSize="3rem">
          Hi! im Audie Caceres
        </Heading>
        <Text fontWeight="500" marginTop={5}>
          I'm a 23 year old software engineer, specializing in front-end
          development using technologies such as TypeScript, HTML, CSS and React
          . I thrive on creating intuitive and engaging user interfaces that
          blend functionality and deliver exceptional digital experience .
        </Text>
        <Button
          as={Link}
          to="/PortfolioPage"
          rightIcon={<ArrowForwardIcon />}
          marginTop={5}
          colorScheme="teal"
          borderRadius={3}
        >
          My portfolio
        </Button>

        <section style={{ marginTop: "3rem" }}>
          <Heading>Links</Heading>
          <List display="flex" gap={4} flexDir="column" marginTop={5}>
            <Link to="https://github.com/audiecaceres7" target="_blank">
              <Button
                leftIcon={<Icon as={IoLogoGithub} />}
                colorScheme="teal"
                variant="outline"
                borderRadius={3}
                border="none"
              >
                Git hub
              </Button>
            </Link>
            <Link
              to="https://www.linkedin.com/in/audie-caceres-2a6801250"
              target="_blank"
            >
              <Button
                leftIcon={<Icon as={IoLogoLinkedin} />}
                colorScheme="teal"
                variant="outline"
                borderRadius={3}
                border="none"
              >
                Linked In
              </Button>
            </Link>
            <Link to="https://www.instagram.com/audiecaceres7/" target="_blank">
              <Button
                leftIcon={<Icon as={IoLogoInstagram} />}
                colorScheme="teal"
                variant="outline"
                borderRadius={3}
                border="none"
              >
                Instagram
              </Button>
            </Link>
          </List>
        </section>
      </motion.article>
    </Box>
  );
};

export default MainPage;
