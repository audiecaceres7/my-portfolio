import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { motion } from "framer-motion";
import { imgVariants } from "./main";
import { IoLayers } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
import GridProjectLayout from "./GridProjectLayout";
import saas1 from "./assets/saas1.png";
import saas2 from "./assets/saas2.png";
import saas3 from "./assets/saas3.png";
import saas4 from "./assets/saas4.png";
import saas5 from "./assets/saas5.png";

const SaasWebsite = () => {
  return (
    <motion.div
      variants={imgVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.2, type: "EaseInOut" }}
    >
      <Box>
        <Heading marginTop="3rem" textAlign="center" fontSize="3rem">
          SAAS website
        </Heading>
        <Box marginTop="1rem">
          <Text>
            This beautifully designed web page showcases a seamless blend of
            HTML and CSS, resulting in a visually stunning and interactive
            experience
          </Text>
          <Flex
            alignItems="center"
            marginTop="1rem"
            p={3}
            bg={useColorModeValue("#d4ffff", "#263838")}
            color={useColorModeValue("teal", "teal.100")}
            borderRadius="10px"
            w="50%"
            gap={3}
          >
            <Text>website</Text>
            <Link
              as={ReactLink}
              to="https://saas-website-iota.vercel.app/"
              target="_blank"
            >
              https://saas-website-iota.vercel.app/
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
            w="30%"
          >
            <Flex alignItems="center" gap={2}>
              Technologies
              <IoLayers />
            </Flex>
            <Box>HTML , CSS</Box>
          </Flex>
          <GridProjectLayout
            img1={saas1}
            img2={saas2}
            img3={saas3}
            img4={saas4}
            img5={saas5}
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

export default SaasWebsite;
