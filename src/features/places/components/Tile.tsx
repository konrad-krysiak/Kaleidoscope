import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import { PlaceTile } from "../types/PlaceTile";
import { AiOutlineHeart } from "react-icons/ai";

export const Tile = ({
  city,
  country,
  description,
  rating,
  places,
}: PlaceTile) => {
  const [rate, setRate] = useState(rating);
  return (
    <Flex
      height={["200px"]}
      my="30px"
      direction="row"
      border="1px solid #e0e0e0"
      borderRadius="10px"
      px="10px"
      position="relative"
    >
      {/* image */}
      <Box flex={1}>
        <Image m="0 auto" src="/image.svg" width="200px" height="200px" />
      </Box>
      <Flex flex={2} flexDirection="column" justifyContent="space-between">
        <Box pt="10px">
          <Text fontSize="24px" color="#000">
            {city}{" "}
            <Text display="inline" color="grey" fontSize="12px">
              {country}
            </Text>
          </Text>
        </Box>

        <Box>{description}</Box>

        <Grid pb="20px" templateColumns={["1fr 2fr 2fr"]}>
          <GridItem as={Flex} justifyContent="center">
            <Text fontSize="24px">4.5</Text>
          </GridItem>

          <GridItem as={Flex} justifyContent="center">
            <Flex justifyContent="center">
              <StarRatings
                rating={rate}
                starDimension="30px"
                starSpacing="5px"
                numberOfStars={5}
                starRatedColor="#dbdb14"
                changeRating={(clickedValue) => setRate(clickedValue)}
                name="rating"
              />
            </Flex>
          </GridItem>

          <GridItem textAlign="center">
            <Button colorScheme="green" w="150px">
              CHECK
            </Button>
          </GridItem>
        </Grid>
      </Flex>

      {/* favourites button */}
      <Box
        position="absolute"
        top="15px"
        right="20px"
        _hover={{ backgroundColor: "transparent" }}
      >
        <AiOutlineHeart size="25px" />
      </Box>
    </Flex>
  );
};
