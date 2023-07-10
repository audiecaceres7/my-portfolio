import { useColorModeValue } from "@chakra-ui/react";
import { Heading, Flex, Image } from "@chakra-ui/react";

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
      <Image
        src={cardImage}
        w="100%"
        h={200}
        borderRadius={8}
        objectFit="cover"
      />
      <Heading as="h3" fontSize="1.6rem">
        {cardTitle}
      </Heading>
    </Flex>
  );
};

export default PortfolioCard;
