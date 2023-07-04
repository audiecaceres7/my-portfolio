import { Link } from "react-router-dom";
import { Grid, Heading, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { variants } from "./main";
import projectOne from "./assets/project-1.jpeg";
import projectTwo from "./assets/project-2.jpeg";
import projectThree from "./assets/project-3.jpeg";

const PortfolioPage = () => {
  return (
    <div>
      <motion.article
        variants={variants}
        key="portfolioPage"
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.2, type: "EaseInOut" }}
      >
        <Heading as="h1" fontSize="3rem" marginTop="2rem">
          My Portfolio
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <Link to="/PokeApiWebsite">
            <Flex flexDir="column" gap={4} marginTop="3rem">
              <Image
                w={330}
                h={200}
                src={projectThree}
                borderRadius={5}
                objectFit="cover"
              />
              <Heading as="h3" fontSize="1.6rem">
                Poke API
              </Heading>
            </Flex>
          </Link>
          <Link to="/FolioWebsite">
            <Flex flexDir="column" gap={4} marginTop="3rem">
              <Image w={330} h={200} src={projectTwo} borderRadius={5} />
              <Heading as="h3" fontSize="1.6rem">
                Folio Website
              </Heading>
            </Flex>
          </Link>
          <Link to="/SaasWebsite">
            <Flex flexDir="column" gap={4} marginTop="3rem">
              <Image
                w={330}
                h={200}
                src={projectOne}
                borderRadius={5}
                objectFit="cover"
              />
              <Heading as="h3" fontSize="1.6rem">
                SAAS website
              </Heading>
            </Flex>
          </Link>
        </Grid>
      </motion.article>
    </div>
  );
};

export default PortfolioPage;
