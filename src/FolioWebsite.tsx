import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Button,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { imgVariants } from "./main";
import { IoLayers } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as ReactLink } from "react-router-dom";
import GridProjectLayout from "./GridProjectLayout";
import folio1 from "./assets/folio1.png";
import folio2 from "./assets/folio2.png";
import folio3 from "./assets/folio3.png";
import folio4 from "./assets/folio4.png";
import folio5 from "./assets/folio5.png";

const FolioWebsite = () => {
  const [isLargerThan790, isLargerThan460] = useMediaQuery([
    "(min-width: 790px)",
    "(min-width: 460px)",
  ]);
  return (
    <motion.div
      variants={imgVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, type: "EaseInOut" }}
    >
      <Box>
        <Heading marginTop="3rem" textAlign="left" fontSize="3rem">
          Folio website
        </Heading>
        <Box marginTop="1rem">
          <Text>
            This is a captivating portfolio page crafted with HTML, CSS, and
            JavaScript. Experience seamless navigation, stunning visuals, and
            interactive elements
          </Text>
          <Flex
            alignItems="center"
            marginTop="1rem"
            direction={isLargerThan460 ? "row" : "column"}
            p={3}
            bg={useColorModeValue("#d4ffff", "#263838")}
            color={useColorModeValue("teal", "teal.100")}
            borderRadius="10px"
            w="100%"
            gap={3}
            fontSize="1rem"
          >
            <Text>website</Text>
            <Link
              as={ReactLink}
              to="https://portfolio-website-psi-tawny.vercel.app/"
              target="_blank"
            >
              https://portfolio-website-psi-tawny.vercel.app/
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
            w={isLargerThan790 ? "50%" : "100%"}
          >
            <Flex alignItems="center" gap={2}>
              Technologies
              <IoLayers />
            </Flex>
            <Box>HTML , CSS , JS</Box>
          </Flex>
          <GridProjectLayout
            img1={folio1}
            img2={folio2}
            img3={folio3}
            img4={folio4}
            img5={folio5}
          />
        </Box>
        <ReactLink to="/PortfolioPage">
          <Button
            leftIcon={<ArrowBackIcon />}
            marginTop="2rem"
            marginBottom="3rem"
          >
            back
          </Button>
        </ReactLink>
      </Box>
    </motion.div>
  );
};

export default FolioWebsite;
