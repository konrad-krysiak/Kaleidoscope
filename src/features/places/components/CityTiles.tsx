import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { useCities } from "../api/cities";
import { CityTile } from "./CityTile";

export const CityTiles = () => {
  const { data, isLoading, isError } = useCities();

  if (isLoading) {
    return (
      <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
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
        <CityTile key={idx} {...item} />
      ))}
    </Box>
  );
};
