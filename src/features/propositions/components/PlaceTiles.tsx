import { DashboardLoading } from "@/components/DashboardLoading";
import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { usePlaces } from "../api/places";
import { Tile } from "./Tile";

export const PlaceTiles = () => {
  const { data, isLoading, isError } = usePlaces();

  if (isLoading) {
    return (
      <Flex w="100%" h="80vh" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (!data || isError) {
    return (
      <Flex
        h="300px"
        w="100%"
        fontSize="30px"
        justifyContent="center"
        alignItems="center"
      >
        Data could not be fetched.
        <Box>
          <Button colorScheme="blue">Refresh</Button>
        </Box>
      </Flex>
    );
  }

  if (!data) {
    return <Box>no data</Box>;
  }
  return (
    <Box w="100%" px="50px">
      {data.map((item, idx) => (
        <Tile key={idx} {...item} />
      ))}
    </Box>
  );
};
