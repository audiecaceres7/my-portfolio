import { Grid, GridItem, Image } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <LazyLoadImage
          src={img2}
          placeholderSrc={img2}
          effect="blur"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </GridItem>
      <GridItem colSpan={2} borderRadius={8}>
        <LazyLoadImage
          src={img1}
          placeholderSrc={img1}
          effect="blur"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </GridItem>
      <GridItem borderRadius={8}>
        <LazyLoadImage
          src={img3}
          placeholderSrc={img3}
          effect="blur"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </GridItem>
      <GridItem colSpan={1} borderRadius={8}>
        <LazyLoadImage
          src={img5}
          placeholderSrc={img5}
          effect="blur"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </GridItem>
      <GridItem colSpan={2} borderRadius={8} h={230}>
        <LazyLoadImage
          src={img4}
          placeholderSrc={img4}
          effect="blur"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </GridItem>
    </Grid>
  );
};

export default GridProjectLayout;
