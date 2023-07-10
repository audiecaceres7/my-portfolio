import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variants } from "./main";
import { Heading, Grid } from "@chakra-ui/react";
import projectOne from "./assets/project-1.jpeg";
import projectTwo from "./assets/project-2.jpeg";
import projectThree from "./assets/project-3.jpeg";
import PortfolioCard from "./PortfolioCard";

const PortfolioPage = () => {
  return (
    <div>
      <motion.div
        variants={variants}
        key="portfolioPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3, type: "EaseInOut" }}
      >
        <Heading as="h1" fontSize="3rem" marginTop="2rem">
          My Portfolio
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <Link to="/PokeApiWebsite">
            <PortfolioCard
              cardImage={projectThree}
              cardTitle="Poke API Website"
            />
          </Link>
          <Link to="/FolioWebsite">
            <PortfolioCard cardImage={projectTwo} cardTitle="Folio Website" />
          </Link>
          <Link to="/SaasWebsite">
            <PortfolioCard cardImage={projectOne} cardTitle="SAAS Website" />
          </Link>
        </Grid>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
