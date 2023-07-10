import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { imgVariants } from "./main";
import { IoLayers } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as ReactLink } from "react-router-dom";
import GridProjectLayout from "./GridProjectLayout";
import poke1 from "./assets/poke1.png";
import poke2 from "./assets/poke2.png";
import poke3 from "./assets/poke3.png";
import poke4 from "./assets/poke4.png";
import poke5 from "./assets/poke5.png";

const PokeApiWebsite = () => {
  return (
    <motion.div
      variants={imgVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, type: "EaseInOut" }}
    >
      <Box>
        <Heading marginTop="3rem" textAlign="center" fontSize="3rem">
          Poke API Website
        </Heading>
        <Box marginTop="1rem">
          <Text>
            This is a small and simple version of a pokedex crafted with HTML,
            CSS and Typescript. Using the pokeApi and adding some interactivity
          </Text>
          <Flex
            alignItems="center"
            marginTop="1rem"
            p={3}
            bg={useColorModeValue("#d4ffff", "#263838")}
            color={useColorModeValue("teal", "teal.100")}
            borderRadius="10px"
            w="60%"
            gap={3}
          >
            <Text>website</Text>
            <Link
              as={ReactLink}
              to="https://poke-api-flame.vercel.app/"
              target="_blank"
            >
              https://poke-api-flame.vercel.app/
            </Link>
            <FaGlobe />
          </Flex>
          <Flex
            fontSize="1rem"
            marginTop="1rem"
            alignItems="center"
            p={3}
            gap={4}
            bg={useColorModeValue("#d4ffff", "#263838")}
            color={useColorModeValue("teal", "teal.100")}
            borderRadius="10px"
            w="40%"
          >
            <Flex alignItems="center" gap={2}>
              Technologies
              <IoLayers />
            </Flex>
            <Box>HTML , CSS , TS</Box>
          </Flex>
          <GridProjectLayout
            img1={poke1}
            img2={poke2}
            img3={poke3}
            img4={poke4}
            img5={poke5}
          />
        </Box>
        <ReactLink to="/PortfolioPage">
          <Button leftIcon={<ArrowBackIcon />} marginTop="2rem">
            back
          </Button>
        </ReactLink>
      </Box>
    </motion.div>
  );
};

export default PokeApiWebsite;
