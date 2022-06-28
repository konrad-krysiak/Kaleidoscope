import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const Stars = () => {
  return (
    <Flex w="150px" flexDirection="row">
      {[...Array(5)].map((e, i) => (
        <Image key={i} src="/star.svg" w="30px" h="30px" />
      ))}
    </Flex>
  );
};
