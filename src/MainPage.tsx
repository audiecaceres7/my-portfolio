import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Box,
  Heading,
  Text,
  Button,
  List,
  Icon,
  Flex,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { variants } from "./main";
import profileImage from "./assets/IMG_0596 2(1).jpg";

const MainPage = () => {
  return (
    <Box marginTop="3rem">
      <motion.article
        variants={variants}
        key="mainPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3, type: "EaseInOut" }}
      >
        <Heading as="h1" fontSize="3rem">
          Audie Caceres
        </Heading>
        <Flex alignItems="center" gap={8}>
          <Text fontWeight="500" marginTop={4}>
            I'm a 23 year old software engineer, specializing in front-end
            development using technologies such as TypeScript, HTML, CSS and
            React . I thrive on creating intuitive and engaging user interfaces
            that blend functionality and deliver exceptional digital experience
            .
          </Text>
          <Image
            boxSize="140px"
            src={profileImage}
            objectFit="cover"
            borderRadius="full"
          />
        </Flex>
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
          <Flex alignItems="baseline" gap={3}>
            <Heading>Links</Heading>
            <FaExternalLinkAlt fontSize="1.5rem" />
          </Flex>
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
        <section style={{ marginTop: "3rem" }}>
          <Flex alignItems="baseline" gap={3}>
            <Heading>Bio</Heading>
            <FaBook fontSize="1.5rem" />
          </Flex>
          <Text fontWeight="500" marginTop={5}>
            My name is Audie Caceres and I'm a 23 year old software engineer
            living in Miami, FL. Originally I was born in the United States, but
            I lived most of my childhood in Nicaragua. Ever since I was little I
            had a deep passion for creativity in general and I always found
            myself wanting to learn new things .
          </Text>
        </section>
      </motion.article>
    </Box>
  );
};

export default MainPage;
