import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import StarRatings from "react-star-ratings";
import { PlaceTile } from "../types/PlaceTile";
import { AiOutlineHeart } from "react-icons/ai";
import { setPlaceRate } from "../api/rate";
import { AlertDialogComponent } from "@/components/AlertDialogComponent";
import { useRouter } from "next/router";

export const Tile = ({ cityName, country, raters, score }: PlaceTile) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rate, setRate] = useState(score);
  const [alertMessage, setAlertMessage] = useState<string | ReactNode>();
  const [isRateChoosen, setIsRateChoosen] = useState(false);
  const fixedRate = +(+rate).toFixed(2);

  const rateHandler = () => {
    if (!isRateChoosen) {
      alert("Click star to choose a rate number.");
      return;
    }
    setPlaceRate(cityName, rate)
      .then((res) => {
        console.log("rate success");
        console.log(res);
        setAlertMessage(res.data.detail);
        onOpen();
      })
      .catch((res) => {
        setAlertMessage(res.response?.data?.detail || "error");
        onOpen();
      });
  };

  const alertOnClickHandler = () => {
    onClose();
    router.reload();
  };

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
            {cityName}{" "}
            <Text display="inline" color="grey" fontSize="12px">
              {country}
            </Text>
          </Text>
        </Box>

        <Box>{`Number of raters: ${raters}`}</Box>

        <Grid pb="20px" templateColumns={["1fr 2fr 2fr"]}>
          <GridItem as={Flex} justifyContent="center">
            <Text fontSize="24px">{fixedRate}</Text>
          </GridItem>

          <GridItem as={Flex} justifyContent="center">
            <Flex justifyContent="center">
              <StarRatings
                rating={+(+rate).toFixed(2)}
                starDimension="30px"
                starSpacing="5px"
                numberOfStars={5}
                starRatedColor="#dbdb14"
                changeRating={(clickedValue) => {
                  if (!isRateChoosen) {
                    setIsRateChoosen(true);
                  }
                  setRate(clickedValue);
                }}
                name="rating"
              />
            </Flex>
          </GridItem>

          <GridItem textAlign="center">
            <Button
              colorScheme="green"
              w="150px"
              onClick={() => {
                rateHandler();
              }}
            >
              RATE
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
      <AlertDialogComponent
        title={`Rate ${cityName}`}
        message={alertMessage}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onClickCallback={alertOnClickHandler}
      />
    </Flex>
  );
};
