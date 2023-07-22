import { Grid, GridItem, Image } from "@chakra-ui/react";

type GridProjectLayoutProps = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
};

const GridProjectLayout = ({
  img1,
  img2,
  img3,
  img4,
  img5,
}: GridProjectLayoutProps) => {
  return (
    <Grid
      h={430}
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap={4}
      marginTop="2.5rem"
    >
      <GridItem rowSpan={2} borderRadius={8} w="100%" h="100%">
        <Image
          src={img2}
          h="100%"
          w="100%"
          borderRadius={8}
          objectFit="cover"
        />
      </GridItem>
      <GridItem colSpan={2} borderRadius={8}>
        <Image
          src={img1}
          h="100%"
          w="100%"
          borderRadius={8}
          objectFit="cover"
        />
      </GridItem>
      <GridItem borderRadius={8}>
        <Image
          src={img3}
          h="100%"
          w="100%"
          borderRadius={8}
          objectFit="cover"
        />
      </GridItem>
      <GridItem colSpan={1} borderRadius={8}>
        <Image
          src={img5}
          h="100%"
          w="100%"
          borderRadius={8}
          objectFit="cover"
        />
      </GridItem>
      <GridItem colSpan={2} borderRadius={8} h={230}>
        <Image
          src={img4}
          h="100%"
          w="100%"
          borderRadius={8}
          objectFit="cover"
        />
      </GridItem>
    </Grid>
  );
};

export default GridProjectLayout;
