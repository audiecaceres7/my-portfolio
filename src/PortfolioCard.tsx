import { useColorModeValue } from "@chakra-ui/react";
import { Heading, Flex } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type PortfolioCardProps = {
  cardImage: string;
  cardTitle: string;
};

const PortfolioCard = ({ cardImage, cardTitle }: PortfolioCardProps) => {
  return (
    <Flex
      flexDir="column"
      gap={4}
      marginTop="3rem"
      padding="25px 30px"
      borderRadius={10}
      transition="ease-in-out 200ms"
      boxShadow="dark-lg"
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(5px) translateX(5px)",
        bg: useColorModeValue("#d4ffff", "#263838"),
        color: useColorModeValue("teal", "teal.100"),
      }}
    >
      <LazyLoadImage
        src={cardImage}
        placeholderSrc={cardImage}
        effect="blur"
        style={{
          borderRadius: "10px",
          backgroundSize: "cover",
          width: "100%",
          height: "200px",
        }}
      />
      <Heading as="h3" fontSize="1.6rem">
        {cardTitle}
      </Heading>
    </Flex>
  );
};

export default PortfolioCard;
