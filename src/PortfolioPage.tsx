import tanjiro from "./assets/tanjiro.png";
import { Box, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { imgVariants, variants } from "./main";

const PortfolioPage = () => {
  return (
    <Box marginTop="2rem">
      <motion.div
        variants={imgVariants}
        key="portfolioPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3, type: "EaseInOut" }}
      >
        <Image
          style={{
            width: "600px",
            height: "600px",
            opacity: "0.4",
            position: "absolute",
            bottom: "0",
            left: "-150px",
          }}
          src={tanjiro}
        />
      </motion.div>
      <motion.article
        variants={variants}
        key="portfolioPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3, type: "EaseInOut" }}
      >
        <Heading as="h1" fontSize="3rem">
          My Portfolio
        </Heading>
      </motion.article>
    </Box>
  );
};

export default PortfolioPage;
