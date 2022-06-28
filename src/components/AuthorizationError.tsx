import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const AuthorizationError = () => {
  const router = useRouter();
  return (
    <Flex h="100vh" w="100%" justifyContent="center" alignItems="center">
      <Flex
        direction="column"
        gap="10px"
        p="50px"
        borderRadius="5px"
        textAlign="center"
        background="rgb(255,255,255,1)"
      >
        <Heading size="md" color="#000">
          You are not authorized to visit this page.
        </Heading>
        <Text>Please log in or register.</Text>
        <Box>
          <Button
            mt="20px"
            colorScheme="red"
            py="10px"
            size="lg"
            onClick={() => {
              router.push("/");
            }}
          >
            GO BACK
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
