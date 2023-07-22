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
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { variants } from "./main";
import profileImage from "./assets/IMG_0596 2(1).jpg";

const MainPage = () => {
  const [isLargerThan480, isLargerThan370] = useMediaQuery([
    "(min-width: 480px)",
    "(min-width: 370px)",
  ]);

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
        <Heading as="h1" fontSize={isLargerThan480 ? "3rem" : "2.7rem"}>
          Audie Caceres
        </Heading>
        <Flex
          justifyContent="space-between"
          direction={isLargerThan370 ? "row" : "column"}
          alignItems={isLargerThan370 ? "center" : "start"}
          gap={isLargerThan480 ? 0 : 4}
          borderRadius="10px 100px 100px 10px"
          borderWidth={1.3}
          borderColor="pink.900"
          padding={isLargerThan480 ? "20px 30px" : "35px"}
          marginTop="1rem"
        >
          <Box w={isLargerThan370 ? "400px" : "auto"}>
            <Text>
              My name is Audie Caceres and I'm a 23 year old software engineer
              living in Miami, FL.
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
          </Box>
          <Image
            boxSize="140px"
            src={profileImage}
            objectFit="cover"
            borderRadius="full"
          />
        </Flex>
        <section style={{ marginTop: "3rem", width: "200px" }}>
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
        <section style={{ marginTop: "3rem", paddingBottom: "2rem" }}>
          <Flex alignItems="baseline" gap={3}>
            <Heading>Bio</Heading>
            <FaBook fontSize="1.5rem" />
          </Flex>
          <Text fontWeight="400" marginTop={5}>
            My name is Audie Caceres and I'm a 23 year old software engineer
            living in Miami, FL. Originally I was born in the United States, but
            I moved to Nicaragua when I was 6 and lived most of my child hood
            there. When I turned 19, I decided to move back to the U.S to start
            a new journey in life
          </Text>
          <Text fontWeight="400" marginTop={5}>
            I have a huge passion for programming, animation, music, design and
            ever since I was little I had a deep respect for creativity in
            general and I always found myself wanting to learn new things
          </Text>
        </section>
      </motion.article>
    </Box>
  );
};

export default MainPage;
