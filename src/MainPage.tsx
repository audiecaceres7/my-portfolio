import { motion } from "framer-motion";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import rengoku from "./assets/rengoku2.png";
import { imgVariants, variants } from "./main";

const MainPage = () => {
  return (
    <Box marginTop="2rem">
      <motion.div
        variants={imgVariants}
        key="mainPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3, type: "EaseInOut" }}
      >
        <Image
          style={{
            width: "350px",
            height: "600px",
            opacity: "0.3",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
          src={rengoku}
        />
      </motion.div>
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
        <Text fontWeight="500" marginTop="1rem">
          I'm a 23 year old software engineer, specializing in front-end
          development using technologies such as TypeScript, HTML, CSS and React
          . I thrive on creating intuitive and engaging user interfaces that
          blend functionality and deliver exceptional digital experience .
        </Text>
      </motion.article>
    </Box>
  );
};

export default MainPage;
